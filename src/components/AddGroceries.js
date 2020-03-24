import React, { Component } from "react";

export default class AddGroceries extends Component {
  constructor(props) {
    super(props);
    this.onSubmit = this.onSubmit.bind(this);
    this.componentDidMount = this.componentDidMount.bind(this);
  }

  componentDidMount(){
    this.text.focus();
  }

  onSubmit(e) {
    e.preventDefault();
    this.props.add(this.text.value);
    this.text.value = "";
    this.componentDidMount();
  }

  render() {
    return (
      <div id="add-align">
        <section>
          <form>
            <input
              ref={input => (this.text = input)}
              type="text"
              placeholder="What do you want to buy?"
              onSubmit={e => {
                this.onSubmit(e);
              }}
            ></input>
            {" "}
            <button
              type="submit"
              variant="outline-primary"
              onClick={e => {
                this.onSubmit(e);
              }}
            >
              Add item
            </button>
          </form> 
        </section>
      </div>
    );
  }
}
