import {useEffect} from 'react'
import './Survey.scss';
import SDiv2 from './SDiv2';
import LinkList from './LinkList';

const Survey = () => {
  return (
    <div className={`survey_container`} data-comp="Survey">
      <div className="survey_text_cont">
        <h1>Ward 1 Summit And Recruitment Fair</h1>
        <h3>July 27, 2022</h3>
        {/* <div className="nav_btns">
          <a href={`#`} className={`learn w3-btn`}>Explore</a>
          <a 
            className={`register w3-btn`} 
            href={`https://www.eventbrite.com/e/ward-1-jobs-not-guns-summit-and-recruitment-fair-tickets-348993608277`} 
            target={`_blank`}
          >Register</a>
        </div> */}
      </div>
      <div className={`survey_img_cont`}>
        <img className={`dad_job`} src="jng/MegaOne/digital-agency/img/dad_job2.png" />
      </div>
      <div className={`date-saver`}>
        {/* <img className={`flyer_img`} src="jng/MegaOne/digital-agency/img/jng-w1-savethedate_og.png" /> */}
        <LinkList />
      </div>
      <SDiv2 />
    </div>

  )
}

export default Survey