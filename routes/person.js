const router = require("express").Router();
const Person = require("../models/person");

router.route("/").get((_req, res) => {
  return Person.find().then((result) => {
    res.status(200).json(result);
  });
});
router.route("/:id");

module.exports = router;
