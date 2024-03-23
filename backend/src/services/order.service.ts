import { createNewOrder, getAllOrders } from "../repositories/order.repository";
import { increaseDrinkPopularity } from "./products/menuDrink.service";
import { increaseOtherItemPopularity } from "./products/menuOtherItem.service";

async function createOrder(orderInfo) {
  updatePopularity(orderInfo);
  await createNewOrder(orderInfo);
}

async function getOrders() {
  return await getAllOrders();
}

async function updatePopularity(orderInfo) {
  const drinks = orderInfo.order.drink;
  const otherItems = orderInfo.order.other;
  if(drinks){
    for (const drink of drinks) {
      increaseDrinkPopularity(drink.name, drink.quantity)
    }
  }
  if(otherItems){
    for (const otherItem of otherItems) {
      increaseOtherItemPopularity(otherItem.name, otherItem.quantity)
    }
  }
}

export { createOrder,getOrders }