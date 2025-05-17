import React from 'react';
// import ReactDOM from 'react-dom';
import {createRoot} from 'react-dom/client';// vite

const use_root = (elements, root) => {

  root = typeof root == "string" ? document.querySelector(`${root}`) : root;
  

    // vite
    const rootDOM = createRoot(root);

    rootDOM.render(
        elements,
    );

    
    // // webpack
    // ReactDOM.render(
    //   elements,
    //   root
    // );

      // if(ReactDOM.hasOwnProperty("createRoot")){
      // }else{
      // }// else
    

  return;
}

export default use_root