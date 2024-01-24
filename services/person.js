const {
  getPersonController,
  updatePersonController,
  deletePersonController,
  getAllPersonController,
  createPersonController,
} = require("../controllers/person");

const getAll = async (_req, res) => {
  const response = await getAllPersonController();
  return res.status(response.statusCode).json(response.body);
};

const createPerson = async (req, res) => {
  const { name, mail, age } = req.body;
  const person = { name, mail, age };
  const response = await createPersonController(person);
  return res.status(response.statusCode).json(response.body);
};

const getPerson = async (req, res) => {
  const { id } = req.params;
  const response = await getPersonController(id);
  return res.status(response.statusCode).json(response.body);
};

const updatePerson = async (req, res) => {
  const { id } = req.params;
  const { name, mail, age } = req.body;
  const person = { name, mail, age };
  const response = await updatePersonController(id, person);
  return res.status(response.statusCode).json();
};

const deletePerson = async (req, res) => {
  const { id } = req.params;
  const response = await deletePersonController(id);
  return res.status(response.statusCode).json();
};

module.exports = {
  getAll,
  createPerson,
  getPerson,
  updatePerson,
  deletePerson,
};
