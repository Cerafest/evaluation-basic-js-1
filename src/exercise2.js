var input = {
  firstname: 'Jack',
  lastname: 'Smith',
  products: [{ label: 'shoes', price: 89 }, { label: 'book', price: 14 }, { label: 'smartphone', price: 499 }]
}

function filter(array) {
    for (i=0; i < array.lenght; i++) {
      var prix = prix + array.price
  }
  return prix
}

var mapCustomer = function(input) {
  var result = {
      firstname: input.firstname ,
      lastname: input.lastname,
      products: input.products,
      moneySpent: filter(input.products)
    }
}

module.exports = {
  title: 'Exercise 2',
  run: mapCustomer
}
