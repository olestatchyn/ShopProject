import BadRequestError from '../../errors/bad-request.error';
import { ErrorMessage } from '../../errors/error-consts';
import { getOtherItemsFromRepository, getOtherItembyName, createNewOtherItem, editOtherItemByName, deleteOtherItem, increaseOneOtherItemPopularity } from '../../repositories/products/menuOtherItem.repository';

async function getOtherItemLimited(limit, page) {
  const offset = (page - 1) * limit;

  const otherItems = await getOtherItemsFromRepository(limit, offset);

  return otherItems;
}

async function createOtherItem(otherItemData) {
  const otherItem = await getOtherItembyName(otherItemData.name);

  if (otherItem) throw new BadRequestError(ErrorMessage.otherItemExists);

  await createNewOtherItem(otherItemData);
}

async function editOtherItem(otherItemData) {
  await editOtherItemByName(otherItemData);
}

async function deleteOtherItemByName(name) {
  await deleteOtherItem(name);
}

async function increaseOtherItemPopularity(name, popularity) {
  await increaseOneOtherItemPopularity(name, popularity);
}

export { getOtherItemLimited, createOtherItem, editOtherItem, deleteOtherItemByName, increaseOtherItemPopularity };