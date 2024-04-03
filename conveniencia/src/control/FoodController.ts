import Datacenter from "../db/Datacenter";
import FoodProduct from "../model/FoodProduct";

export default class FoodController{

    private datacenter: Datacenter = new Datacenter(); 

    public getNewFood(): FoodProduct{
        return new FoodProduct();
    }

    public registerNewFood(food: FoodProduct){
       this.datacenter.addNewFood(food);
    }

    public listAllFoods(): void{
        console.log(this.datacenter.foodProducts);
    }

}