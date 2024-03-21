import mongoose from "mongoose";
import Salad from "../../models/products/salad.model";
import BadRequestError from "../../errors/bad-request.error";
import { ErrorMessage } from "../../errors/error-consts";

async function getSaladsFromRepository(limit) {
  return await Salad.find().limit(limit);
}

async function getSaladbyName(name) {
  const salad = await Salad.findOne({ name: name })
  return salad;
}

async function createNewSalad(saladData) {
  await Salad.create(saladData);
}

async function editSaladByName(saladData) {
  const salad = await Salad.findOne({ name: saladData.name });

  if (!salad) throw new BadRequestError(ErrorMessage.saladDoesntExist);

  if (saladData.description) {
    salad.description = saladData.description;
  }

  if (saladData.sizeAndPrice) {
    salad.sizeAndPrice = saladData.sizeAndPrice;
  }

  await salad.save();
}

async function deleteSalad(name) {
  const result = await Salad.deleteOne({ name: name });

  if (result.deletedCount === 0) {
    throw new BadRequestError(ErrorMessage.saladDoesntExist);
  }
}

export { getSaladsFromRepository, getSaladbyName, createNewSalad, editSaladByName, deleteSalad };