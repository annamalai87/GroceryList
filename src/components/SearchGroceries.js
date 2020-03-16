import React, { Component } from "react";
import { Form, FormControl, Navbar } from "react-bootstrap";

export default class SearchGroceries extends Component {
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
      <div className="search-align">
      <Navbar bg="light" variant="light">
        <Form>
          <Form.Group>
            <FormControl
              ref={input => (this.text = input)}
              type="text"
              style={{ width: "250px", padding: "20px" }}
              placeholder="Search grocery list"
              onSubmit={e => {
                this.onSubmit(e);
              }}
            />
          </Form.Group>
          <label>
            <input type="checkbox" id="box1" name="box1" />
            { } <span style={{"fontSize":"85%"}}>Show only yet-to-buy items</span>
          </label>
          </Form>
          </Navbar>
      </div>
    );
  }
}
