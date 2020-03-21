import React, { Component } from "react";

export default class AddTodos extends Component {
  constructor(props) {
    super(props);
    this.onSubmit = this.onSubmit.bind(this);
  }

  onSubmit(e) {
    e.preventDefault();
    this.props.add(this.text.value);
    this.text.value = "";
  }

  render() {
    return (
      <div className="add-align">
        <section>
          <form>
            <input
              ref={input => (this.text = input)}
              type="text"
              placeholder="What do you want to buy?"
              style={{
                padding: "16px 32px",
                width: "75%",
                marginBottom: ".5rem",
                borderRadius: "5px",
                border: "0.5px solid #008CBA"
              }}
              onSubmit={e => {
                this.onSubmit(e);
              }}
            ></input>
            {" "}
            <button
              type="submit"
              variant="outline-primary"
              onClick={this.onSubmit}
              style={{ width: "75%", alignContent: "center" }}
            >
              Add item
            </button>
          </form> 
        </section>
      </div>
    );
  }
}
