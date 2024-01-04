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

    if (!result.length)
      return res.status(422).json({ message: "Usuário não encontrado" });

    return res.status(200).json(...result);
  } catch (err) {
    res.status(500).json({ error: err });
  }
});

router.put("/:id", async (req, res) => {
  const { id } = req.params;
  const { name, salary, approved } = req.body;

  const person = {
    name,
    salary,
    approved,
  };

  try {
    const updatedPerson = await Person.updateOne({ _id: id }, person);

    if (!updatedPerson.matchedCount)
      return res.status(422).json({ message: "Usuário não encontrado" });

    res.status(200).json(person);
  } catch (err) {
    res.status(500).json({ error: err });
  }
});

router.delete("/:id", async (req, res) => {
  const { id } = req.params;

  try {
    const result = await Person.findOne({ _id: id });

    if (!result)
      return res.status(422).json({ message: "Usuário não encontrado" });

    try {
      await Person.deleteOne({ _id: id });
      return res.status(200).json({});
    } catch (err) {
      res.status(500).json({ message: err });
    }
  } catch (err) {
    res.status(500).json({ message: err });
  }
});

module.exports = router;
