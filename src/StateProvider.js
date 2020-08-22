//setup data layer
// we need to do this to track the bascket

import React ,{ createContext, useContext, useReducer, Children} from 'react';

//This is the data layer

export const StateContext = createContext();

//Build a provider
export const StateProvider = ({ reducer, initialState, children}) => (    
    <StateContext.Provider value={useReducer(reducer, initialState)}>
    {children}
    </StateContext.Provider>
    
    )

    // Use inside the component

    export const useStateValue = () => useContext(StateContext)
  