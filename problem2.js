// ==== Problem #2 ====
// The dealer needs the information on the last car in their inventory. Execute a function to find what the make and model of the last car in the inventory is?  Log the make and model into the console in the format of:
// ("Last car is a *car make goes here* *car model goes here*");

export function lastcar(inventory) {
  let lastCarInfo = inventory.filter((obj, index) => {
    if (index === inventory.length - 1) {
      return obj;
    }
  });
  return `Last car is a ${lastCarInfo[0].car_make} ${lastCarInfo[0].car_model}`;
}
