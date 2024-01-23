const db = require("../models/person");

const get = async () => {
  return await db.find();
};

const getOne = async (obj) => {
  return await db.findOne(obj);
};

const create = async (person) => {
  return await db.create(person);
};

const update = async (obj, person) => {
  return await db.updateOne(obj, person);
};

const deleteOne = async (obj) => {
  return await db.deleteOne(obj);
};

module.exports = { get, getOne, create, update, deleteOne };
