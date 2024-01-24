import { Router } from "express";

const router = Router();

import {
  getAll,
  createPerson,
  getPerson,
  updatePerson,
  deletePerson,
} from "../services/person.js";

router.route("/").get(getAll).post(createPerson);
router.route("/:id").get(getPerson).put(updatePerson).delete(deletePerson);

export default router;
