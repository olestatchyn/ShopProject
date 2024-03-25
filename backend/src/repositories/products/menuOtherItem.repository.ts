import Other from "../../models/products/other.model";
import BadRequestError from "../../errors/bad-request.error";
import { ErrorMessage } from "../../errors/error-consts";

async function getOtherItemsFromRepository(limit, offset) {
  return await Other.find().skip(offset).limit(limit);
}

async function getAllOtherItemsFromRepository() {
  return await Other.find();
}

async function getOtherItembyName(name) {
  const otherItem = await Other.findOne({ name: name })
  return otherItem;
}

async function createNewOtherItem(otherItemData) {
  await Other.create(otherItemData);
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

async function increaseOneOtherItemPopularity(otherItemName, popularityIncrease) {
  const otherItem = await Other.findOne({ name: otherItemName })
  
  otherItem.popularity += popularityIncrease;

  await otherItem.save();
}

export { getOtherItemsFromRepository, getAllOtherItemsFromRepository, getOtherItembyName, createNewOtherItem, editOtherItemByName, deleteOtherItem, increaseOneOtherItemPopularity };