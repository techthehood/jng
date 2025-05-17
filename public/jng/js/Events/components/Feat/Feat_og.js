import {useEffect} from 'react'
import './Feat.scss';
import SDiv2 from './SDiv2';

import htmlContent from './Feat.hbs';// works as template fn

const Feat = ({
  data = {},
}) => {
  const h_cont = htmlContent({...data});

  return (
    <div className={`Events-Feat`}  data-comp="Feat">
      <div className={`feat_container`} dangerouslySetInnerHTML={{ __html: h_cont }} />
      {/* <SDiv2 /> */}
    </div>
  )
}

export default Feat