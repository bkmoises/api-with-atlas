import {
  getPersonController,
  updatePersonController,
  deletePersonController,
  getAllPersonController,
  createPersonController,
} from "../controllers/person.js";

export const getAll = async (_req, res) => {
  const { statusCode, body } = await getAllPersonController();
  return res.status(statusCode).json(body);
};

export const createPerson = async (req, res) => {
  const { name, mail, age } = req.body;
  const person = { name, mail, age };
  const { statusCode, body } = await createPersonController(person);
  return res.status(statusCode).json(body);
};

export const getPerson = async (req, res) => {
  const { id } = req.params;
  const { statusCode, body } = await getPersonController(id);
  return res.status(statusCode).json(body);
};

export const updatePerson = async (req, res) => {
  const { id } = req.params;
  const { name, mail, age } = req.body;
  const person = { name, mail, age };
  const { statusCode } = await updatePersonController(id, person);
  return res.status(statusCode).json();
};

export const deletePerson = async (req, res) => {
  const { id } = req.params;
  const { statusCode } = await deletePersonController(id);
  return res.status(statusCode).json();
};
