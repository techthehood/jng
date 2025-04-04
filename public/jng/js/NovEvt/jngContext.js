import {useState} from 'react';
import JngStore from "./jngStore";

const JngContext = React.createContext();

const JngProvider = (props) => {
  return (
    <JngContext.Provider value={props.store ? props.store : JngStore} JngStore={props.store ? props.store : JngStore} >
      {props.children}
    </JngContext.Provider>
  );
}

export {
  JngProvider,
  JngContext
}