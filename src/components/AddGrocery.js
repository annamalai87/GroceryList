import React, { Component } from "react";
import { Navbar,Form, FormControl, Button } from "react-bootstrap";

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
      <Navbar bg="light" variant="light">
        <Form bg="outline" >
          <Form.Group>
            <FormControl
              ref={input => (this.text = input)}
              type="text"
              placeholder="What do you want to buy?"
              style={{ width: "250px", padding: "20px" }}
              onSubmit={e => {
                this.onSubmit(e);
              }}
            />
          </Form.Group>
          <Button
            type="submit"
            variant="outline-primary"
            onClick={this.onSubmit}
            style={{ width: "250px" }}
          >
            Add item
          </Button>
        </Form>
        </Navbar>
      </div>
    );
  }
}
