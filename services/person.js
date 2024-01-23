const Person = require("../models/person");

const getAll = async (_req, res) => {
  const result = await Person.find();
  if (result.length) return res.status(200).json(result);
  return res.status(204).json();
};

const createPerson = async (req, res) => {
  const { name, mail, age } = req.body;
  const person = { name, mail, age };
  const requiredFields = Object.keys(person);

  for (const field of requiredFields) {
    if (!req.body[field] || !req.body[field].length)
      return res.status(400).json({ error: `field ${field} is required` });
  }

  const emailVerify = await Person.findOne({ mail });
  if (emailVerify)
    return res.status(409).json({ message: "email already exist" });

  const createdPerson = await Person.create(person);
  return res.status(201).json(createdPerson);
};

const getPerson = async (req, res) => {
  const { id } = req.params;
  try {
    const result = await Person.findOne({ _id: id });
    if (result) return res.status(200).json(result);
  } catch (err) {
    return res.status(204).json();
  }
};

const updatePerson = async (req, res) => {
  const { id } = req.params;
  const { name, mail, age } = req.body;
  const person = { name, mail, age };
  try {
    const updatedPerson = await Person.updateOne({ _id: id }, person);
    if (updatedPerson.matchedCount) return res.status(200).json();
    return res.status(204).json();
  } catch (err) {
    return res.status(500).json();
  }
};

const deletePerson = async (req, res) => {
  const { id } = req.params;
  try {
    await Person.deleteOne({ _id: id });
    res.status(204).json();
  } catch (err) {
    res.status(404).json();
  }
};

module.exports = {
  getAll,
  createPerson,
  getPerson,
  updatePerson,
  deletePerson,
};