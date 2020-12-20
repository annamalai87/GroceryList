import React from "react";
import GroceryItem from "./GroceryItem";
import FilterGrocery from "./FilterGrocery";
import {connect} from "react-redux";
import * as creators from "../actions/GroceryActionsCreators"


class ViewGrocery extends React.Component {

    complete = (grocery) => {
        this.props.dispatcher(creators.completeAction(grocery))
    }

    filter = (grocery) => {
        this.props.dispatcher(creators.filterAction(grocery))
    }

    delete = (grocery) => {
        this.props.dispatcher(creators.deleteAction(grocery))
    }

    render() {
        const {groceries} = this.props
        return (
            <div>
                <FilterGrocery filter={
                    this.filter
                }></FilterGrocery>
                {
                groceries.filter(grocery => !grocery.isBought || !this.props.showOnlyYetToBuy).map(grocery => (
                    <div key={
                        grocery.key
                    }>
                        <GroceryItem grocery={grocery}
                            complete={
                                this.complete
                            }
                            delete={
                                this.delete
                        }></GroceryItem>
                    </div>
                ))
            } </div>
        );
    }
}

const mapStateToProps = (state) => {
    return {showOnlyYetToBuy: state.showOnlyYetToBuy, groceries: state.groceries}
};


const mapDispatchToProps = (dispatch) => {
    return({
        dispatcher: (action) => {
            dispatch(action)
        }
    })
};


export default connect(mapStateToProps, mapDispatchToProps)(ViewGrocery)
