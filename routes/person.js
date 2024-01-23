const router = require("express").Router();
const {
  getAll,
  createPerson,
  getPerson,
  updatePerson,
  deletePerson,
} = require("../services/person");

router.route("/").get(getAll).post(createPerson);
router.route("/:id").get(getPerson).put(updatePerson).delete(deletePerson);

module.exports = router;
