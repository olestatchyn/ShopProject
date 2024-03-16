import Pizza from "../../models/products/pizza.model";

async function getPizzasFromRepository(params: { skip: number, limit: number }) {
  const { skip, limit } = params;
  return await Pizza.find().skip(skip).limit(limit);
}

export { getPizzasFromRepository };