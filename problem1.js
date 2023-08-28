// ==== Problem #1 ====
// The dealer can't recall the information for a car with an id of 33 on his lot. Help the dealer find out which car has an id of 33 by calling a function that will return the data for that car. Then log the car's year, make, and model in the console log in the format of:
// ("Car 33 is a *car year goes here* *car make goes here* *car model goes here*");

export function carInfobyID(inventory) {
  let targetCar = inventory.reduce((targetObj, curObj) => {
    if (curObj.id === 33) {
      targetObj = curObj;
    }
    return targetObj;
  }, {});
  return `Car 33 is a ${targetCar.car_year} ${targetCar.car_make} ${targetCar.car_model}`;
}
