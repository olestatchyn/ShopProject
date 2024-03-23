import { getAllDrinksFromRepository } from "../../repositories/products/menuDrink.repository";
import { getAllOtherItemsFromRepository } from "../../repositories/products/menuOtherItem.repository";

async function getMostPopularDrinksAndOtherItems() {
  const allDrinks = await getAllDrinksFromRepository()
  const allOtherItems = await getAllOtherItemsFromRepository()

  let mergedArray = allDrinks.concat(allOtherItems);

  mergedArray.sort((a, b) => b.popularity - a.popularity);

  const topSixElements = mergedArray.slice(0, 6);

  return topSixElements;
}

export { getMostPopularDrinksAndOtherItems }