const pizzasUrl = ' http://localhost:3000/pizzas'

const pizzaUrl = ' http://localhost:3000/pizzas/'

const getPizzas = () => {
    return fetch(pizzasUrl)
        .then(resp => resp.json())
}

const updatePizza = pizza => {
    return fetch(`${pizzaUrl}${pizza.id}`, {
        method: 'PATCH',
        headers: {'Content-Type': 'application/json'},
        body: JSON.stringify(pizza)
        })
        .then(resp => resp.json())
}

export default {getPizzas, updatePizza}