import PrimaryScreen from "../view/PrimaryScreen";
import FoodController from "./FoodController";

export default class BasicController{

    private primaryScreen: PrimaryScreen = new PrimaryScreen(new FoodController());
    
    public startSystem():void {
       this.primaryScreen.getFirstScreen();
    }

}