//Import Koa
const Koa = require('Koa');
//Import body-parser
const bodyParser = require('koa-bodyparser');
//Importing the routes
const productRoutes = require('./routes/products.routes');

//Start App
const app = new Koa();

//Using body parser
app.use(bodyParser());

//Registering the routes
app.use(productRoutes.routes()).use(productRoutes.allowedMethods());

//Setup the port
app.listen(3000);
console.log("Application is running on port 3000");



