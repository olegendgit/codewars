function createCalcFunction(n) {
  return function() {
    console.log(1000 * n)
  }
}

const calc = createCalcFunction(42)
calc()