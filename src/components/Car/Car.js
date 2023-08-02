import { Component } from "react";

class Car extends Component {
  render() {
    const { id, brand, price, year } = this.props.car;
    return (
      <div>
        <h2>
          {id}. {brand}
        </h2>
        <p>Price :{price}</p>
        <p>Year :{year}</p>
      </div>
    );
  }
}

export { Car };
