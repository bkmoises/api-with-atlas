const db = require("../models/person");

const get = async () => {
  return db.find();
};

const getOne = async (obj) => {
  return db.findOne(obj);
};

const create = async (person) => {
  return db.create(person);
};

const update = async (obj, person) => {
  return db.updateOne(obj, person);
};

const deleteOne = async (obj) => {
  return db.deleteOne(obj);
};

module.exports = { get, getOne, create, update, deleteOne };
