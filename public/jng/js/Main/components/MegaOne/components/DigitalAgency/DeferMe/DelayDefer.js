import {useEffect, Suspense} from 'react';
import getDeferMe from './getDeferMe';

/**
 * @docs DOCS: the imports were loading before page finished loading so some of the functions which were designed to detect
 * html elements and alter their classnames was runnning before the elements existed.  using this component i was 
 * able to delay the loading of the import scripts until after all the page elements are loaded.
 * @returns 
 */

const DelayDefer = () => {

  const run_defer = () => { 

    let DeferMe = getDeferMe['DeferMe'];

    ReactDOM.render(
      <Suspense fallback={<div className="loader_modal w3-modal active"><div className="loader">Loading...</div></div>} >
        <DeferMe />
      </Suspense>,
      document.querySelector('.deferMe')
    );
   }

  useEffect(() => {
    
    run_defer();
  
    return () => {
      
    }
  }, [])
  

  return null;
}

export default DelayDefer