import React from "react";

//context describes the data and functions that will exist in the store
//this contatins only definition, no implementation here

const StoreContext = React.createContext({
  cart: [],
  user: {},

  addProduct: () => {},
  removeProduct: () => {},
});

export default StoreContext;
