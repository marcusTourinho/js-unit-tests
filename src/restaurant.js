/* eslint-disable max-len */
// Siga as orientações do README!

const createMenu = (object) => {
  const fetchMenu = () => object;
  const consumption = [];
  const order = (string) => {
    if (object.drinks[string]) {
      consumption.push(string);
    }
    if (object.food[string]) {
      consumption.push(string);
    }
    return 'Item indisponível';
  }
  const pay = () => {
    let tip = 0;
    for (let key of consumption) {
      if (object.drinks[key]) {
        tip += object.drinks[key];
      }
      if (object.food[key]) {
        tip += object.food[key];
      }
    }
    return tip * 1.1;
  }
  return {fetchMenu, consumption, order, pay};
};

module.exports = createMenu;
