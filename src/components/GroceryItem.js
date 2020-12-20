import React, {Component} from "react";
import img from "../images/delete.png";

export default class GroceryItem extends Component {

    render() {
        return (
            <div>
                <section>
                    <input type="checkbox"
                        checked={
                            this.props.grocery.isBought
                        }
                        className="grocery-item"
                        onChange={
                            this.props.complete.bind(this.props.grocery, this.props.grocery)
                        }/>{" "}
                    {}
                    <label className={
                        "grocery-" + (
                        this.props.grocery.isBought ? "bought" : "unbought"
                    )
                    }>
                        {
                        this.props.grocery.name
                    } </label>
                    <img src={img}
                        alt=""
                        className="grocery-image"
                        onClick={
                            this.props.delete.bind(this.props.grocery, this.props.grocery.key)
                    }></img>
                </section>
            </div>
        );
    }
}
