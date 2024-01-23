const router = require("express").Router();
const Person = require("../models/person");

router.route("/").get((_req, res) => {
  return Person.find().then((result) => {
    if (result.length) return res.status(200).json(result);
    res.status(204).json();
  });
});
router.route("/:id");

module.exports = router;
