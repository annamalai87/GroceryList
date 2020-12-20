import React, {Component} from "react";

export default class FilterGrocery extends Component {
    handleCheckbox(e) {
        this.props.filter(e.target.checked);
    }

    render() {
        return (
            <div className="search-align">
                <section>
                    <div>
                        <input type="checkbox" id="box1" name="box1"
                            onChange={
                                e => this.handleCheckbox(e)
                            }/> {" "}
                        <span className="search-text">
                            Show yet to buy items
                        </span>
                    </div>
                </section>
            </div>
        );
    }
}
