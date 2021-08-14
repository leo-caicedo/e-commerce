const { Router } = require("express");

const router = Router();
// dtos
const orderDto = require("../dto/order.dto");
// middleware
const validationSchema = require("../../utils/middleware/validate-schema");
const verifyToken = require("../../utils/middleware/jwt");
// services
const OrdersServices = require("../services/orders.service");
const ordersServices = new OrdersServices();

router.get("/", ordersServices.getOrders);
router.get("/:id", ordersServices.getOrder);
router.post(
  "/",
  [verifyToken, orderDto, validationSchema],
  ordersServices.createOrder
);
router.put("/:id", verifyToken, ordersServices.updateOrder);
router.delete("/:id", verifyToken, ordersServices.deleteOrder);

module.exports = router;
