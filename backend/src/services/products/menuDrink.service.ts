import BadRequestError from '../../errors/bad-request.error';
import { ErrorMessage } from '../../errors/error-consts';
import { getDrinksFromRepository, getDrinkbyName, createNewDrink, editDrinkByName, deleteDrink } from '../../repositories/products/menuDrink.repository';

async function getDrinkLimited(limit) {

  const drinks = await getDrinksFromRepository(limit);

  return drinks;
}

async function createDrink(drinkData) {
  const drink = await getDrinkbyName(drinkData.name);

  if (drink) throw new BadRequestError(ErrorMessage.drinkExists);
  
  await createNewDrink(drinkData);
}

async function editDrink(drinkData) {
  await editDrinkByName(drinkData);
}

async function deleteDrinkByName(name) {
  await deleteDrink(name);
}

export { getDrinkLimited, createDrink, editDrink, deleteDrinkByName };