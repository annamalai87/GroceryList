import React, {Component} from "react";
import {connect} from "react-redux";
import {GROCERY_ADDED} from "../actions/GroceryActionTypes";

class AddGrocery extends Component {

    componentDidMount() {
        this.text.focus();
    }

    onSubmit = (e) => {
        e.preventDefault();
        this.add(this.text.value);
        this.text.value = "";
        this.componentDidMount();
    }

    add = (name) => {
        if (name !== null && name !== "") {
            const addAction = {
                type: GROCERY_ADDED,
                payload: {
                    name: name
                }
            }

            this.props.dispatcher(addAction)
        }
    }

    render() {
        return (
            <div id="add-align">
                <section>
                    <form>
                        <input ref={
                                input => (this.text = input)
                            }
                            type="text"
                            placeholder="What do you want to buy?"
                            onSubmit={
                                e => {
                                    this.onSubmit(e);
                                }
                        }></input>
                    {" "}
                    <button type="submit" variant="outline-primary"
                        onClick={
                            e => {
                                this.onSubmit(e);
                            }
                    }>
                        Add item
                    </button>
                </form>
            </section>
        </div>
        );
    }
}

const mapDispatchToProps = (dispatch) => {
    return({
        dispatcher: (action) => {
            dispatch(action)
        }
    })
};

export default connect(null, mapDispatchToProps)(AddGrocery)
