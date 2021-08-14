const { Router } = require("express");

const router = Router();
// dtos
const orderDto = require("../dto/order.dto");
// middleware
const validationSchema = require("../../utils/middleware/validate-schema");
// services
const OrdersServices = require("../services/orders.service");
const ordersServices = new OrdersServices();

router.get("/", ordersServices.getOrders);
router.get("/:id", ordersServices.getOrder);
router.post("/", orderDto, validationSchema, ordersServices.createOrder);
router.put("/:id", ordersServices.updateOrder);
router.delete("/:id", ordersServices.deleteOrder);

module.exports = router;
