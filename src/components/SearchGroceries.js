import React, { Component } from "react";

export default class SearchGroceries extends Component {
  constructor(props) {
    super(props);
    this.onKeyUp = this.onSubmit.bind(this);
  }

  onSubmit(e) {
    if (this.text.value !== null) this.props.search(this.text.value);
  }

  render() {
    return (
      <div className="search-align">
        <section>
          <div>
            <input
              onKeyUp={e => this.onSubmit(e)}
              ref={node => (this.text = node)}
              type="text"
              placeholder="Search groceries"
              style={{
                padding: "7px",
                width: "75%",
                marginBottom: ".5rem",
                borderRadius: "5px"
              }}
            ></input>
          </div>
          <div>
            <input type="checkbox" id="box1" name="box1" />
            {}{" "}
            <span style={{ fontSize: "85%", color: "brown" }}>
              Show only yet-to-buy items
            </span>
          </div>
        </section>
      </div>
    );
  }
}
