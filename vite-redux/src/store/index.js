import { createStore } from "redux";
const INITIAL_VALUE = {
  counter: 0,
  toDisplay: false,
};

const counterReducer = (store = INITIAL_VALUE, action) => {
  let newStore = store;

  if (action.type == "INCREMENT") {
    newStore = { ...store, counter: store.counter + 1 };
  } else if (action.type == "DECREMENT") {
    newStore = { ...store, counter: store.counter - 1 };
  } else if (action.type == "RESET") {
    newStore = { ...store, counter: (store.counter = 0) };
  } else if (action.type == "TOGGLE") {
    newStore = { ...store, toDisplay: !store.toDisplay };
    // console.log(newStore);
  } else if (action.type == "ADD") {
    newStore = {
      ...store,
      counter: store.counter + Number(action.payload.num),
    };
  } else if (action.type == "SUBSTRACT") {
    newStore = {
      ...store,
      counter: store.counter - Number(action.payload.num),
    };
  }
  return newStore;
};

const counterStore = createStore(counterReducer);

export default counterStore;
