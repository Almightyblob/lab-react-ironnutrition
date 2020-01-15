import React, { Component } from "react";

export class AddFoodMenu extends Component {
  render() {
    if (this.props.hidden == true) {
      return (
        <div>
          <button className="button" onClick={this.props.openAddFood}>
            Add Food
          </button>
        </div>
      );
    } else {
      return (
        <div>
          <form onSubmit={this.props.handleFormSubmit}>
            <input
              type="text"
              name="name"
              placeholder="name"
              onChange={this.props.handleAddFood}
            />
            <input
              type="text"
              name="calories"
              placeholder="calories"
              value={this.props.calories}
              onChange={this.props.handleAddFood}
            />
            <input
              type="text"
              name="image"
              placeholder="image URL"
              value={this.props.image}
              onChange={this.props.handleAddFood}
            />
            <input type="submit" value="Submit" />
          </form>
        </div>
      );
    }
  }
}

export default AddFoodMenu;
