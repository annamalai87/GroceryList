import React from "react";
import "./App.css";
import ViewGrocery from "./components/ViewGrocery.js";
import NavBar from "./components/NavigationBar";
import AddGrocery from "./components/AddGrocery";

class App extends React.Component {
    render() {
        return (
            <div>
                <NavBar></NavBar>
                <AddGrocery></AddGrocery>
                <ViewGrocery></ViewGrocery>
            </div>
        );
    }
}

export default App
