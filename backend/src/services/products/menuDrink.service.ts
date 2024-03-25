import BadRequestError from '../../errors/bad-request.error';
import { ErrorMessage } from '../../errors/error-consts';
import { getDrinksFromRepository, getDrinkbyName, createNewDrink, editDrinkByName, deleteDrink, increaseOneDrinkPopularity } from '../../repositories/products/menuDrink.repository';

async function getDrinkLimited(limit, page) {
  const offset = (page - 1) * limit;

  const drinks = await getDrinksFromRepository(limit, offset);

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

async function increaseDrinkPopularity(name, popularity) {
  await increaseOneDrinkPopularity(name, popularity);
}

export { getDrinkLimited, createDrink, editDrink, deleteDrinkByName, increaseDrinkPopularity };