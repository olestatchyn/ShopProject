import BadRequestError from "../../errors/bad-request.error";
import { ErrorMessage } from "../../errors/error-consts";
import Drink from "../../models/products/drink.model";

async function getDrinksFromRepository(limit) {
  return await Drink.find().limit(limit);
}

async function getAllDrinksFromRepository() {
  return await Drink.find();
}

async function getDrinkbyName(name) {
  const drink = await Drink.findOne({ name: name })
  return drink;
}

async function createNewDrink(drinkData) {
  await Drink.create(drinkData);
}

async function editDrinkByName(drinkData) {
  const drink = await Drink.findOne({ name: drinkData.name });

  if (!drink) throw new BadRequestError(ErrorMessage.drinkDoesntExist);

  if (drinkData.description) {
    drink.description = drinkData.description;
  }

  if (drinkData.sizeAndPrice) {
    drink.sizeAndPrice = drinkData.sizeAndPrice;
  }

  await drink.save();
}

async function deleteDrink(name) {
  const result = await Drink.deleteOne({ name: name });

  if (result.deletedCount === 0) {
    throw new BadRequestError(ErrorMessage.drinkDoesntExist);
  }
}

async function increaseOneDrinkPopularity(drinkName, popularityIncrease) {
  const drink = await Drink.findOne({ name: drinkName })

  drink.popularity += popularityIncrease;

  await drink.save();
}

export { getDrinksFromRepository, getAllDrinksFromRepository, getDrinkbyName, createNewDrink, editDrinkByName, deleteDrink, increaseOneDrinkPopularity };