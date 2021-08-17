# e-commerce API built with nodejs and express
## Use of products
For product use, the API provides category, brand and product endpoints. Which are related for a greater context on the product that is created.
Example:
- GET localhost:3000/api/categories
- GET localhost:3000/api/categories/:id
- POST localhost:3000/api/categories
- PUT localhost:3000/api/categories/:id
- DELETE localhost:3000/api/categories/:id

This example also applies to brands and products.

## Use of users
The API has the ability to authenticate via jsonwebtoken and password encryption, as some endpoints need authentication, for example, anyone can list existing products, but only someone authorized can remove a product.
Example for authentication:
- POST localhost:3000/users/signup
- POST localhost:3000/users/signin

Example endpoints users:
- GET localhost:3000/api/users
- GET localhost:3000/api/users/:id
- PUT localhost:3000/api/users/:id
- DELETE localhost:3000/api/users/:id

There is also the Order entity, which has the information about the user, the related product and creation date.
Example endpoints orders:
- GET localhost:3000/api/orders
- GET localhost:3000/api/orders/:id
- POST localhost:3000/api/orders
- PUT localhost:3000/api/orders/:id
- DELETE localhost:3000/api/orders/:id

## Use
Steps to follow

- git clone <repository>
- run into the terminal npm i
- use .env-example file
- run into the terminal npm run dev
