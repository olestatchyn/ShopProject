import mongoose from "mongoose";
import Pizza from "../../models/products/pizza.model";
import BadRequestError from "../../errors/bad-request.error";
import { ErrorMessage } from "../../errors/error-consts";

async function getPizzasFromRepository(limit) {
  return await Pizza.find().limit(limit);
}

async function getPizzabyName(name) {
  const pizza = await Pizza.findOne({ name: name })
  return pizza;
}

async function createNewPizza(pizzaData) {
  await Pizza.create(pizzaData);
}

async function editPizzaByName(pizzaData) {
  const pizza = await Pizza.findOne({ name: pizzaData.name });

  if (!pizza) throw new BadRequestError(ErrorMessage.pizzaDoesntExists);

  if (pizzaData.description) {
    pizza.description = pizzaData.description;
  }

  if (pizzaData.sizeAndPrice) {
    pizza.sizeAndPrice = pizzaData.sizeAndPrice;
  }

  await pizza.save();
}

async function deletePizza(name) {
  const result = await Pizza.deleteOne({ name: name });

  if (result.deletedCount === 0) {
    throw new BadRequestError(ErrorMessage.pizzaDoesntExists);
  }
}

export { getPizzasFromRepository, getPizzabyName, createNewPizza, editPizzaByName, deletePizza };