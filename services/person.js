const {
  getPersonController,
  updatePersonController,
  deletePersonController,
  getAllPersonController,
  createPersonController,
} = require("../controllers/person");

const getAll = async (_req, res) => {
  const { statusCode, body } = await getAllPersonController();
  return res.status(statusCode).json(body);
};

const createPerson = async (req, res) => {
  const { name, mail, age } = req.body;
  const person = { name, mail, age };
  const { statusCode, body } = await createPersonController(person);
  return res.status(statusCode).json(body);
};

const getPerson = async (req, res) => {
  const { id } = req.params;
  const { statusCode, body } = await getPersonController(id);
  return res.status(statusCode).json(body);
};

const updatePerson = async (req, res) => {
  const { id } = req.params;
  const { name, mail, age } = req.body;
  const person = { name, mail, age };
  const { statusCode } = await updatePersonController(id, person);
  return res.status(statusCode).json();
};

const deletePerson = async (req, res) => {
  const { id } = req.params;
  const { statusCode } = await deletePersonController(id);
  return res.status(statusCode).json();
};

module.exports = {
  getAll,
  createPerson,
  getPerson,
  updatePerson,
  deletePerson,
};
