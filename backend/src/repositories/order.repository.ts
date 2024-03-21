import Order from "../models/order.model";

async function createNewOrder(newOrder) {
  await Order.create(newOrder);
}

async function getAllOrders() {
  const allOrders = await Order.find();
  return allOrders;
}

export { createNewOrder, getAllOrders }