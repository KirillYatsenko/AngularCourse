import { Action } from "@ngrx/store"
import { Ingredient } from "src/app/shared/ingredient.model";

export const ADD_INGRIDIENT = "ADD_INGRIDIENT";

export class AddIngridient implements Action {
    constructor(public payload: Ingredient){}

    readonly type = ADD_INGRIDIENT;
}

export type ShoppingListActions = AddIngridient;