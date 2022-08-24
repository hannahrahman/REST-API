//Import the methods that we exported in products.dao.js
const {getAll, getById, removeById, save, update} = require('../dal/products.dao');

//Map the save() method
const createProduct = async ({name, description, qty, price}) => {
    //Create a product object
    const product = {
        name,
        description,
        qty,
        price
    }
    //Call the Save method and pass the Product object
    return await save(product);
}
//Map the getAll() method
const getProducts = async ()=>{
    //
    return await getAll();
}
//Map the getById() method
const getProduct = async id =>{
    return await getById(id);
}
//Map the removeById() method
const deleteProduct = async id =>{
    return await removeById(id);
}
//Map the update method, Gets the id and Product object as parameters and the passes it to the
//update() method
const updateProduct = async (id,{name, description, qty, price})=>{
    return await update(id,{name, description, qty, price});
}
//Export the methods to be used in routes
module.exports = {
    createProduct,
    getProducts,
    getProduct,
    deleteProduct,
    updateProduct
}