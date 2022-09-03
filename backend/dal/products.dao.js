const products = require("./index").db("store").collection("products");

//Require ObjectId in order to access documents based on the _id
const ObjectId = require("mongodb").ObjectId;

//Create method
const save = async ({ name, description, qty, price }) => {
  const result = await products.insertOne({ name, description, qty, price });
  //returns the inserted data
  return result.ops[0];
};

//Read All Products method
const getAll = async () => {
  const cursor = await products.find();
  //Converts the result into an array
  return cursor.toArray();
};

//Read Specific Products Method
const getById = async (id) => {
  return await products.findOne({ _id: ObjectId(id) });
};
//Update method
const update = async (id, { name, description, qty, price }) => {
  console.log(id);
  const result = await products.replaceOne(
    { _id: ObjectId(id) },
    { name, description, qty, price }
  );
  return result.ops[0];
};
//Remove/Delete Method
const removeById = async (id) => {
  await products.deleteOne({ _id: ObjectId(id) });
};
//Export the functions
module.exports = { getAll, getById, removeById, save, update };
