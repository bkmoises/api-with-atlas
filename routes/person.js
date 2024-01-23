const router = require("express").Router();
const Person = require("../models/person");

router
  .route("/")
  .get((_req, res) => {
    return Person.find().then((result) => {
      if (result.length) return res.status(200).json(result);
      res.status(204).json();
    });
  })
  .post((req, res) => {
    const { name, mail, age } = req.body;
    const person = { name, mail, age };
    const requiredFields = ["name", "mail", "age"];

    for (const field of requiredFields) {
      if (!req.body[field] || !req.body[field].length)
        return res.status(400).json({ error: `field ${field} is required` });
    }

    return Person.create(person).then((result) => {
      res.status(201).json(result);
    });
  });

router.route("/:id");

module.exports = router;
