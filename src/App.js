import React, { Component, Fragment } from 'react';
import Header from './components/Header'
import PizzaForm from './components/PizzaForm'
import PizzaList from './containers/PizzaList'
import API from './api'


class App extends Component {

  state = {
    pizzas: [],
    selectedPizza: {},
  }

  componentDidMount() {
    API.getPizzas()
    .then(pizzas => this.setState({pizzas}))
  }

  updateSelectedPizza = selectedPizza => {
    this.setState({selectedPizza})
  }

  updatePizza = pizza => {
    API.updatePizza(pizza)
    .then(pizza => {
      const index = this.state.pizzas.findIndex(findPizza => findPizza.id === pizza.id)
      const newPizzas = [...this.state.pizzas]
      newPizzas.splice(index, 1, pizza)
      this.setState({
        pizzas: newPizzas
      })
    })
  }

  render() {
    const {pizzas, selectedPizza} = this.state
    const {updateSelectedPizza, updatePizza} = this
    return (
      <Fragment>
        <Header/>
        <PizzaForm selectedPizza={selectedPizza} updatePizza={updatePizza}/>
        <PizzaList pizzas={pizzas} updateSelectedPizza={updateSelectedPizza}/>
      </Fragment>
    );
  }
}

export default App;
