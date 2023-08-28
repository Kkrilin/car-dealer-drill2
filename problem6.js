// A buyer is interested in seeing only BMW and Audi cars within the inventory.  Execute a function and return an array that only contains BMW and Audi cars.  Once you have the BMWAndAudi array, use JSON.stringify() to show the results of the array in the console.

export function filterByCarMakefn(inventory) {
  let filterByCarMake = inventory.filter((carObj) => {
    return carObj.car_make === "BMW" || carObj.car_make === "Audi";
  });
  return filterByCarMake;
}
