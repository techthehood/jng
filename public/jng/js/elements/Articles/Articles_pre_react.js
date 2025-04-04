import { Suspense } from 'react';
import MainMenu from '../MainMenu';
import Four04 from '../Four04';

import { SOME_CONST } from './paths';

import htmlContent from './Articles.hbs';

// import './style.css';
import './agency.css';// NOTE: also controls loader - needs to run as early as possible
// import './Articles.scss';// see ArticleDefer
import Loader from './Loader';
import DelayDefer from '../DeferMe/DelayDefer';

const Articles = (props) => {

  let alias = props?.match?.params?.article;
  alias = alias.toLowerCase();

  let data = {};
  data.url = "jng/"
  
  const h_cont = htmlContent(data);

  let display;

  switch (alias) {
    case SOME_CONST:
      
        display = (
          <>
            <Loader />
            {/* <Suspense fallback={<div className="loader_modal w3-modal active"><div className="loader">Loading...</div></div>} > */}
              <DelayDefer filename="ArticleDefer" />
            {/* </Suspense> */}
            <div dangerouslySetInnerHTML={{ __html: h_cont }} />
          </>
        );
      break;
  
    default:
      display = (<><Four04 /></>);
      break;
  }// switch

  return display;
  
}// Articles

export default Articles

/** 
 * {
  title,
  alias,
  text,
  }
  *
*/
