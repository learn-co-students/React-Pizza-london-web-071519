import React, { Component } from 'react';
import Pizza from '../components/Pizza'

class PizzaList extends Component {

  // renderPizzas = (props) => {
  //   props.pizzas.map(pizza => < Pizza key={pizza.id} pizza={pizza}/>) 
  // }

  render() {
    // const {renderPizzas} = this
    const {updateSelectedPizza} = this.props
    return (
      <table className="table table-striped">
        <thead>
          <tr>
            <th scope="col">Topping</th>
            <th scope="col">Size</th>
            <th scope="col">Vegetarian?</th>
            <th scope="col">Edit</th>
          </tr>
        </thead>
        <tbody>
          {this.props.pizzas.map(pizza => < Pizza key={pizza.id} pizza={pizza} updateSelectedPizza={updateSelectedPizza} />) }
          {/* {renderPizzas(this.props)} */}
        </tbody>
      </table>
    );
  }

}

export default PizzaList;
