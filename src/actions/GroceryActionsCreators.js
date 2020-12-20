import {GROCERY_FILTERED, GROCERY_BOUGHT, GROCERY_DELETED} from "./GroceryActionTypes"

export const filterAction = (showOnlyYetToBuy) => {
    return {
        type: GROCERY_FILTERED,
        payload: {
            showOnlyYetToBuy: showOnlyYetToBuy
        }
    }
};

export const completeAction = (grocery) => {
    return {
        type: GROCERY_BOUGHT,
        payload: {
            key: grocery.key,
            isBought: !grocery.isBought
        }
    }
};

export const deleteAction = (key) => {
    return {
        type: GROCERY_DELETED,
        payload: {
            key: key
        }
    }
}
