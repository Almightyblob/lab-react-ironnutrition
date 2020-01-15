import React, { Component } from "react";
import "bulma/css/bulma.css";
import foods from "./foods.json";
import Foodbox from "./components/Foodbox.js";
import AddFoodMenu from "./components/AddFoodMenu";

export class App extends Component {
  constructor(props) {
    super(props);

    this.openAddFood = this.openAddFood.bind(this);
    this.handleAddFood = this.handleAddFood.bind(this);
    this.handleFormSubmit = this.handleFormSubmit.bind(this);

    this.state = {
      food: foods,
      hiddenMenu: true,
      name: "",
      calories: "",
      image: ""
    };
  }

  openAddFood() {
    console.log(this.state.hiddenMenu);
    this.setState({
      hiddenMenu: false
    });
  }

  handleAddFood(e) {
    console.log(this.state.name);
    const { name, value } = e.target;
    this.setState({ [name]: value });
  }

  handleFormSubmit(e) {
    console.log(this.state.name);
    e.preventDefault();
    var foodCopy = [...this.state.food];
    foodCopy.push({
      name: this.state.name,
      calories: this.state.calories,
      image: this.state.image,
      quantity: 0
    });
    this.setState({
      food: foodCopy,
      hiddenMenu: true
    });
  }

  render() {
    return (
      <div className="container">
        <AddFoodMenu
          hidden={this.state.hiddenMenu}
          openAddFood={this.openAddFood}
          name={this.state.name}
          image={this.state.image}
          calories={this.state.calories}
          handleAddFood={this.handleAddFood}
          handleFormSubmit={this.handleFormSubmit}
        />
        {this.state.food.map(item => (
          <Foodbox
            name={item.name}
            image={item.image}
            calories={item.calories}
          />
        ))}
      </div>
    );
  }
}

export default App;
