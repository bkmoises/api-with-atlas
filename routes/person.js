const router = require("express").Router();
const Person = require("../models/person");

router
  .route("/")
  .get(async (_req, res) => {
    const result = await Person.find();
    if (result.length) return res.status(200).json(result);
    return res.status(204).json();
  })
  .post(async (req, res) => {
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
  });

router.route("/:id");

module.exports = router;
