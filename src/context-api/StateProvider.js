import React, { createContext, useContext, useReducer } from "react";

//1. create context
export const CreateContext = createContext();

//2. provide the context
export const ContextProvider = ({ reducer, initialState, children }) => {
  return (
    <CreateContext.Provider value={useReducer(reducer, initialState)}>
      {children}
    </CreateContext.Provider>
  );
};

//3. consume or use context
export const ConsumeContext = () => useContext(CreateContext);
