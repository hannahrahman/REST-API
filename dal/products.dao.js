//Require the MongoDB connection created in index.js and then mention the db name
//within db() and mention the collection name within collection()
const products = require('./index').db('store').collection('products');

//Require ObjectId in order to access documents based on the _id
const ObjectId = require('mongodb').ObjectId;

//Create
//This method accepts a Product object with name, description, qty and price as parameter
//and inserts it to the product collection using the insertOne() method
const save = async ({name, description, qty, price}) => {
    const result = await products.insertOne({name, description, qty, price});
    //returns the inserted data
    return result.ops[0];
}

//Read All
//This method will retrieve all the products from the database
const getAll = async () =>{
    const cursor = await products.find();
    //Converts the result into an array
    return cursor.toArray();
}

//Read Specific Products
//This method will retrieve a specific product from the database based on the id
const getById = async (id) =>{
    return await products.findOne({_id:ObjectId(id)});
}
//Update
//This method accepts an id and a Product object with name, description, qty and price as parameter
//The id is the id of the product to edit and the product object is the product that has been edited
//The replaceOne() method is used to update the product
const update = async (id, {name,description,qty,price}) =>{
    console.log(id);
    const result = await products.replaceOne({_id:ObjectId(id)}, {name,description,qty,price});
    return result.ops[0];
}
//Remove
//This method accept the id of the product to be removed
//deleteOne() method is used to delete the product from the database
const removeById = async id =>{
    await products.deleteOne({_id:ObjectId(id)});
}
//Export the functions
module.exports = {getAll,getById,removeById,save,update};



