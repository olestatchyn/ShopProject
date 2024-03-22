import { createNewOrder, getAllOrders } from "../repositories/order.repository";

async function createOrder(pizzaData) {
  await createNewOrder(pizzaData);
}

async function getOrders() {
  const allOrders = await getAllOrders();
  return allOrders;
}

export { createOrder,getOrders }