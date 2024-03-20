import mongoose from "mongoose";
import Other from "../../models/products/other.model";
import BadRequestError from "../../errors/bad-request.error";
import { ErrorMessage } from "../../errors/error-consts";

async function getOtherItemsFromRepository(limit) {
  return await Other.find().limit(limit);
}

async function getOtherItembyName(name) {
  const otherItem = await Other.findOne({ name: name })
  return otherItem;
}

async function createNewOtherItem(otherItemData) {
  await Other.create({
    _id: new mongoose.Types.ObjectId(),
    name: otherItemData.name,
    description: otherItemData.description,
    sizeAndPrice: otherItemData.sizeAndPrice
  });
}

async function editOtherItemByName(otherItemData) {
  const otherItem = await Other.findOne({ name: otherItemData.name });

  if (!otherItem) throw new BadRequestError(ErrorMessage.otherItemDoesntExist);

  if (otherItemData.description) {
    otherItem.description = otherItemData.description;
  }

  if (otherItemData.sizeAndPrice) {
    otherItem.sizeAndPrice = otherItemData.sizeAndPrice;
  }

  await otherItem.save();
}

async function deleteOtherItem(name) {
  const result = await Other.deleteOne({ name: name });

  if (result.deletedCount === 0) {
    throw new BadRequestError(ErrorMessage.otherItemDoesntExist);
  }
}

export { getOtherItemsFromRepository, getOtherItembyName, createNewOtherItem, editOtherItemByName, deleteOtherItem };