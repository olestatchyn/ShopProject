import BadRequestError from '../../errors/bad-request.error';
import { ErrorMessage } from '../../errors/error-consts';
import { getOtherItemsFromRepository, getOtherItembyName, createNewOtherItem, editOtherItemByName, deleteOtherItem } from '../../repositories/products/menuOtherItem.repository';

async function getOtherItemLimited(limit) {

  const otherItems = await getOtherItemsFromRepository(limit);

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

export { getOtherItemLimited, createOtherItem, editOtherItem, deleteOtherItemByName };