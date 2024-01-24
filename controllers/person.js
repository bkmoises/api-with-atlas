const HttpResponse = require("../helpers/httpResponse");
const {
  create,
  get,
  getOne,
  update,
  deleteOne,
} = require("../database/person");

const createPersonController = async (person) => {
  const requiredFields = Object.keys(person);
  for (const field of requiredFields) {
    if (!person[field] || !person[field].length)
      return HttpResponse.missingParam(field);
  }

  const emailVerify = await getOne({ mail: person.mail });
  if (emailVerify) return HttpResponse.alreadyExist("mail");

  const createdPerson = await create(person);
  return HttpResponse.created(createdPerson);
};

const getAllPersonController = async () => {
  const result = await get();
  if (result.length) return HttpResponse.success(result);
};

const getPersonController = async (id) => {
  try {
    const result = await getOne({ _id: id });
    if (result) return HttpResponse.success(result);
  } catch (err) {
    return HttpResponse.notFound();
  }
};

const updatePersonController = async (id, person) => {
  try {
    const updatedPerson = await update({ _id: id }, person);
    if (updatedPerson.matchedCount) return HttpResponse.success();
    return HttpResponse.notFound();
  } catch (err) {
    return HttpResponse.notFound();
  }
};

const deletePersonController = async (id) => {
  try {
    await deleteOne({ _id: id });
    return HttpResponse.deleted();
  } catch (err) {
    return HttpResponse.notFound();
  }
};

module.exports = {
  createPersonController,
  getAllPersonController,
  getPersonController,
  updatePersonController,
  deletePersonController,
};
