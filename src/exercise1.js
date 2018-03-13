var input = [34, -5, 9, 18, 0, -7, 32]

var removeNegativeValue = function(input) {
  var result = input.filter(function(number) {
  return number > 0
  })
}

module.exports = {
  title: 'Exercise 1',
  run: removeNegativeValue
}
