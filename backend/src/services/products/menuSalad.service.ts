import BadRequestError from '../../errors/bad-request.error';
import { ErrorMessage } from '../../errors/error-consts';
import { getSaladsFromRepository, getSaladbyName, createNewSalad, editSaladByName, deleteSalad } from '../../repositories/products/menuSalad.repository';

async function getSaladLimited(limit, page) {
  const offset = (page - 1) * limit;

  const salads = await getSaladsFromRepository(limit, offset);

  return salads;
}

async function createSalad(saladData) {
  const salad = await getSaladbyName(saladData.name);

  if (salad) throw new BadRequestError(ErrorMessage.saladExists);

  await createNewSalad(saladData);
}

async function editSalad(saladData) {
  await editSaladByName(saladData);
}

async function deleteSaladByName(name) {
  await deleteSalad(name);
}

export { getSaladLimited, createSalad, editSalad, deleteSaladByName };