import {useEffect} from 'react'
import './Feat.scss';
import SDiv2 from './SDiv2';

const Feat = () => {
  return (
    <div className={`feat_container`} data-comp="Feat">
      <div className="feat_text_cont">
        <h1>Ward 5 Recruitment Fair</h1>
        <h3>November 16, 2022</h3>
        <div className="nav_btns">
          <a href={`#`} className={`learn w3-btn`}>Explore</a>
          <a 
            className={`register w3-btn`} 
            // href={`https://www.eventbrite.com/e/ward-1-jobs-not-guns-summit-and-recruitment-fair-tickets-348993608277`} 
            target={`_blank`}
          >Register</a>
        </div>
      </div>
      <div className={`feat_img_cont`}>
        <img className={`dad_job`} src="jng/MegaOne/digital-agency/img/dad_job2.png" />
      </div>
      <div className={`date-saver`}>
        <img className={`flyer_img`} src="jng/MegaOne/digital-agency/img/jng-w5-savethedate-fall-2022_og.png" />
      </div>
      <SDiv2 />
    </div>

  )
}

export default Feat