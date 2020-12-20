import {v4 as uuid} from "uuid";
import * as groceryActions from "../actions/GroceryActionTypes"


export default function reducer(state = {
    showOnlyYetToBuy : false,
    groceries : []
}, action) {

    switch (action.type) {
        case groceryActions.GROCERY_ADDED:
            let added = [
                {
                    key: uuid(),
                    name: action.payload.name,
                    isBought: false
                },
                ...state.groceries
            ]
            return Object.assign({}, state, state.groceries = added)

        case groceryActions.GROCERY_DELETED:
            let deleted = state.groceries.filter(grocery => grocery.key != action.payload.key)
            return Object.assign({}, state, state.groceries = deleted)

        case groceryActions.GROCERY_FILTERED:
            return Object.assign({}, state, state.showOnlyYetToBuy = action.payload.showOnlyYetToBuy)

        case groceryActions.GROCERY_BOUGHT:
            let updated = state.groceries.map(grocery => {
                var newGrocery = Object.assign({}, grocery)
                if (newGrocery.key === action.payload.key) {
                    newGrocery.isBought = action.payload.isBought
                }
                return newGrocery
            })
            return Object.assign({}, state, state.groceries = updated)


        default:
            return state
    }
}
