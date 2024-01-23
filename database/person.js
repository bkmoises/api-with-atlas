const Person = require("../models/person");

const get = async () => {
  return await Person.find();
};

const getOne = async (obj) => {
  return await Person.findOne(obj);
};

const create = async (person) => {
  return await Person.create(person);
};

const update = async (obj, person) => {
  return await Person.updateOne(obj, person);
};

const deleteOne = async (obj) => {
  return await Person.deleteOne(obj);
};

module.exports = { get, getOne, create, update, deleteOne };
