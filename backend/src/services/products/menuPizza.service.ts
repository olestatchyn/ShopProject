import BadRequestError from '../../errors/bad-request.error';
import { ErrorMessage } from '../../errors/error-consts';
import { createNewPizza, editPizzaByName, getPizzabyName, getPizzasFromRepository, deletePizza } from '../../repositories/products/menuPizza.repository';

async function getPizzaLimited(limit, page) {
  const offset = (page - 1) * limit;

  const pizzas = await getPizzasFromRepository(limit, offset);

  return pizzas;
}

async function createPizza(pizzaData) {
  const pizza = await getPizzabyName(pizzaData.name);

  if (pizza) throw new BadRequestError(ErrorMessage.pizzaExists);
  
  await createNewPizza(pizzaData);
}

async function editPizza(pizzaData) {
  await editPizzaByName(pizzaData);
}

async function deletePizzaByName(name) {
  await deletePizza(name);
}

export { getPizzaLimited, createPizza, editPizza, deletePizzaByName };