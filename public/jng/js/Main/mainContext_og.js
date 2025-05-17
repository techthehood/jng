import React from 'react';
import MainStore from "./mainStore";

const MainContext = React.createContext();

const MainProvider = (props) => {
  return (
    <MainContext.Provider value={props.store ? props.store : MainStore} MainStore={props.store ? props.store : MainStore} >
      {props.children}
    </MainContext.Provider>
  );
}

export {
  MainProvider,
  MainContext
}