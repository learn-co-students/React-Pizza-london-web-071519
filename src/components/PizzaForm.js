import React from "react"

class PizzaForm extends React.Component {

  state = {
    id: '',
    topping: '',
    size: '',
    vegetarian: null,
  }
  
  componentDidUpdate (prevProps) {
    if (this.props.selectedPizza.topping !== prevProps.selectedPizza.topping) {
      this.setState({
        id: this.props.selectedPizza.id,
        topping: this.props.selectedPizza.topping,
        size: this.props.selectedPizza.size,
        vegetarian: this.props.selectedPizza.vegetarian,
      })
    }
  }

  handleToppingChange = event => {
    this.setState({topping: event.target.value})
  }

  handleSizeChange = event => {
    this.setState({size: event.target.value})
  }

  handleVegeChange = event => {
    this.setState({vegetarian: !this.state.vegetarian})
  }

  handleClick = () => {
    this.props.updatePizza(this.state)
  }


  render() {
    const {topping, size, vegetarian} = this.state
    const {handleToppingChange, handleSizeChange, handleVegeChange, handleClick} = this
    
    return (
        <div className="form-row">
          <div className="col-5">
              <input type="text" className="form-control" placeholder="Pizza Topping" value={topping} onChange={handleToppingChange}/>
          </div>
          <div className="col">
            <select value={size} className="form-control" onChange={handleSizeChange}>
              <option value="Small">Small</option>
              <option value="Medium">Medium</option>
              <option value="Large">Large</option>
            </select>
          </div>
          <div className="col">
            <div className="form-check">
              <input className="form-check-input" type="radio" value="Vegetarian" checked={vegetarian === true ? true : null} onChange={handleVegeChange} />
              <label className="form-check-label">
                Vegetarian
              </label>
            </div>
            <div className="form-check">
              <input className="form-check-input" type="radio" value="Not Vegetarian" checked={vegetarian === false ? true : null} onChange={handleVegeChange} />
              <label className="form-check-label">
                Not Vegetarian
              </label>
            </div>
          </div>
          <div className="col">
            <button type="submit" className="btn btn-success" onClick={handleClick}>Submit</button>
          </div>
        </div>
    )
  }
}

export default PizzaForm
