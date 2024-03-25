import CleaningProduct from "../model/CleaningProduct";
import FoodProduct from "../model/FoodProduct";

// Lei da responsabilidade unica
// Datacenter é responsável por armazenar os dados da aplicação
// Datacenter não deve ser responsável por manipular os dados
export default class Datacenter {
  private foods: FoodProduct[] = [];
  private cleaningProducts: CleaningProduct[] = [];

  public addNewFood(food: FoodProduct): void {
    this.foods.push(food);
  }

  public removeFood(food: FoodProduct): void {
    const index = this.foods.indexOf(food);
    this.foods.splice(index, 1);
  }

  public getFoodProductSize(): number {
    return this.foods.length;
  }
}
