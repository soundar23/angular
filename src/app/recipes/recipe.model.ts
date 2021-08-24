import { Ingredient } from "../shared/ingredient.model";

export class Recipe {
    public name: string;
    public description: string;
    public imgpath: string;
    public ingredients:Ingredient[];

    constructor(name: string, description: string, imgpath: string,ingredients:Ingredient[]) {
        this.name=name;
        this.description=description;
        this.imgpath=imgpath;
        this.ingredients=ingredients;
    }
}
