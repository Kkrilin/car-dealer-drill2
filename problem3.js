// ==== Problem #3 ====
// The marketing team wants the car models listed alphabetically on the website. Execute a function to Sort all the car model names into alphabetical order and log the results in the console as it was returned.

export function carmodel(inventory) {
  let carModelArr = inventory.map((carObj) => {
    return carObj.car_model;
  });
  return carModelArr.sort((a, b) =>
    a.localeCompare(b, "en", { sensitivity: "base" })
  );
}
