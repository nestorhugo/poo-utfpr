import CleaningProduct from "../model/CleaningProduct";
import FoodProduct from "../model/FoodProduct";

//lei da responsabilidade unica.
//cabe ao Datacenter guardar, acessar e manipular os dados de 
// FoodProduct e CleaningProduct
export default class Datacenter{


    public foodProducts: FoodProduct[] = [];
    private cleanProducts: CleaningProduct[] = [];

 
    public addNewFood(food: FoodProduct): void {
       this.foodProducts.push(food);
    }

    public removeFood(id: number): void{
        this.foodProducts.splice(id, 1);
    }

    public getFoodProductSize(): number{
        return this.foodProducts.length;
    }

}