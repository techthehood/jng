// import {} from 'react';
import NovEvt from '../../NovEvt';
import {NOV2021, NOV2021_FULL} from './paths';
import Four04 from '../Four04';

import './Archives.scss';
import MainMenu from '../MainMenu';

const Archives = (props) => {

  let alias = props?.match?.params?.date;
  alias = alias.toLowerCase();// test any case against a lowercase version

  let display;

  switch (alias) {
    case NOV2021:
    case NOV2021_FULL:
        display = <NovEvt />;
      break;
  
    default:

        display = (<MainMenu {...props}><Four04 /></MainMenu>);
        // display = (<MainMenu {...props}><div style={styles}><div>404</div><p style={p_styles}>this page is not a page...</p></div></MainMenu>);
      break;
  }

  return display;
}

export default Archives