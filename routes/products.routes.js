//Import @koa/router package to handle the routing
const Router = require("@koa/router");
//Import methods created in products.api file
const {createProduct, getProduct, getProducts,updateProduct,deleteProduct} =  require('../api/products.api');

//Define the prefix of the api
const router = new Router({
    prefix:'/products'
})
//GET request
router.get('/',async ctx=>{
    ctx.body= await getProducts() ;
})
//POST request
router.post('/',async ctx=>{
    //Get the product details from the body
    let product = ctx.request.body;
    product = await createProduct(product);
    //If the product is added successfully 200 status code is sent as the response
    ctx.response.status = 200;
    ctx.body = product;
})
//GET request to get a specific product
//:id is used to indicate that id is a parameter not a path
router.get('/:id',async ctx=>{
    const id = ctx.params.id;
    ctx.body = await getProduct(id);
})
//Delete Request
router.delete('/:id',async ctx=>{
    //Get the id from the url
    const id = ctx.params.id;
    await deleteProduct(id);
})
//Update request to update a specific product sent as the id
router.put('/:id',async ctx=>{
    //Get the id from the url
    const id = ctx.params.id;
    //Get the product details from the body
    let product = ctx.request.body;
    product = await updateProduct(id,product);
    ctx.response.status = 200;
    ctx.body = product;

})
//Export the router
module.exports = router;