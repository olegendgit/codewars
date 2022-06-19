const zeroFuel = (distanceToPump, mpg, fuelLeft) => {
  let distanceLeftWithAvailableFuel = mpg * fuelLeft;

  if ((distanceToPump - distanceLeftWithAvailableFuel) > 0) {
    return false;
  } else {
    return true;
  }
};

// const zeroFuel = (distanceToPump, mpg, fuelLeft) => (distanceToPump - (mpg * fuelLeft) <= 0);

console.log(zeroFuel(50, 25, 2), true);
console.log(zeroFuel(100, 50, 1), false);
