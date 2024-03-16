import { getPizzasFromRepository } from '../../repositories/products/pizza.repository';

async function getPizzaArray(pizzaParams) {
  const { page, limit } = pizzaParams;
  const skip = (page - 1) * limit;
  const pizzas = await getPizzasFromRepository({ skip, limit });

  return pizzas;
}

export { getPizzaArray };