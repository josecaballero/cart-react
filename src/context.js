import React, { useState, useContext, useReducer, useEffect } from "react";
import cartItems from "./data";
import reducer from "./reducer";
// ATTENTION!!!!!!!!!!
// I SWITCHED TO PERMANENT DOMAIN
const url = "https://course-api.com/react-useReducer-cart-project";
const AppContext = React.createContext();

const initialState = {
  loading: false,
  cart: cartItems,
  total: 0,
  amount: 0,
};

/* Una vez terminado el setup básico, para montar las funcionalidades
seguiremos 3 pasos:
1º En el context dentro de AppProvider montamos la función que contiene un dispatch({type: "XXXXX_XXXXX"})
2º En el context pasamos la función a través del value del Provider
3º Recibimos la función en el componente que la va a usar
4º Utilizamos la función en el sitio que corresponda del JSX
4º En el reducer cambiamos el estado en base al tipo de acción
*/

const AppProvider = ({ children }) => {
  const [state, dispatch] = useReducer(reducer, initialState);

  const clearCart = () => {
    dispatch({ type: "CLEAR_CART" });
  };

  return (
    <AppContext.Provider
      value={{
        ...state,
        clearCart,
      }}
    >
      {children}
    </AppContext.Provider>
  );
};
// make sure use
export const useGlobalContext = () => {
  return useContext(AppContext);
};

export { AppContext, AppProvider };
