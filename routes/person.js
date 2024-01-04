const router = require("express").Router();

const Person = require("../models/Person");

router.post("/", async (req, res) => {
  const { name, salary, approved } = req.body;

  if (!name || !salary || !approved)
    return res.status(422).json({ error: "Campos obrigatório ausentes" });

  const person = {
    name,
    salary,
    approved,
  };

  try {
    await Person.create(person);
    res.status(201).json({ ...person });
  } catch (err) {
    res.status(500).json({ error: err });
  }
});

router.get("/", async (_req, res) => {
  try {
    const result = await Person.find();
    res.status(200).json(result);
  } catch (err) {
    res.status(500).json({ error: err });
  }
});

// /person/65970babab11eb13a9701e26
router.get("/:id", async (req, res) => {
  const { id } = req.params;
  try {
    const result = await Person.find({ _id: id });
    res.status(200).json(...result);
  } catch (err) {
    res.status(500).json({ error: err });
  }
});

module.exports = router;
