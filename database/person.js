import db from "../models/person.js";

export const get = async () => {
  return db.find();
};

export const getOne = async (obj) => {
  return db.findOne(obj);
};

export const create = async (person) => {
  return db.create(person);
};

export const update = async (obj, person) => {
  return db.updateOne(obj, person);
};

export const deleteOne = async (obj) => {
  return db.deleteOne(obj);
};
