import React, { createContext, useReducer } from "react";

import auth from "./reducers/auth.js";
import contacts from "./reducers/contacts.js";
import contactsInitialState from "./initialStates/contactsInÄ±tialState.js";
import authInitialState from "./initialStates/authState.js";



export const GlobalContext = createContext({}); // React.createContext(), every Context object comes with Provider React component
// Provider component accept a value prop

const GlobalProvider = ( {children} ) => {
  const [authState, authDispatch] = useReducer(auth, authInitialState) //authState is initial state here
  const [contactsState, contactsDispatch] = useReducer(
    contacts, 
    contactsInitialState
  ); 

  return (
    <GlobalContext.Provider value={{authState,contactsState,authDispatch,contactsDispatch}}>
      {children}

    </GlobalContext.Provider>
  )
}

export default GlobalProvider;