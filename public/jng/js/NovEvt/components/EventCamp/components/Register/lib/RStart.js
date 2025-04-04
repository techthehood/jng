import { observer } from 'mobx-react';
import React, {useContext, useState, useEffect, useRef} from 'react';
import SimpleTree from '../../../../../../elements/SimpleTree';
import RHead from './RHead';
import { JngContext } from '../../../../../jngContext';

const { form_info, form_types } = require('../../../../../jng');
const { FSTART, FSELECT, FFORM, FSUCCESS, FFAIL } = form_info.pages;
const { CONTRACTOR, AGENCY, GENERAL, APPLICANT} = form_types;

let dl_btns = `rStart_dnld w3-btn w3-card`;
let link_prefix = `forms`;// `${location.origin}/forms`

const RStart = observer((props) => {

  const {
    mode = "start",
    countdown,
  } = props;

  const store = useContext(JngContext);

  const {callback, active_form = ""} = props;
  const start = form_info.start;
  const [count, setCount] = useState(start.timer);
  const timer_ref = useRef();
  const btn_ref = useRef();

  
  
  const start_countdown = () => {
    let interval = start.interval * 200;
      timer_ref.current = setInterval(() => {
        setCount((prev) => {
        return prev - 1;
      });
    }, interval);
  }
  
  useEffect(() => {
    if(!countdown) return;
    if(count < 1){
      clearInterval(timer_ref.current);
      if(typeof btn_ref.current != "undefined") btn_ref.current.click();
    }// if
  }, [count]);
  
  useEffect(() => {
    if(countdown) start_countdown();
    return () => {
      // cleanup
      clearInterval(timer_ref.current);
    }
  }, [])
  
  
  const vendor_ary = [CONTRACTOR, AGENCY];
  let access_key;
  let special_access = false;
  
  let step1_class, intro_text;
  switch (mode) {
    case "start":
      step1_class = `step_icon step1_icon icon-${start.step1.icon}`
      intro_text = start.intro_text;
      
      break;
      
      case "success":
        access_key = vendor_ary.includes(store.active_form) ? "JNGVEND" : "";
        step1_class = `icon_btn svg-icon-check-mark ${!access_key.includes("JNG") ? "heartbeat" : ""}`;
        intro_text = start.success_text;
        special_access = access_key.includes("JNG") ? true : false;
        break;
        
        default:
        // failure
        step1_class = `icon_btn svg-icon-nope-mark heartbeat`;
        intro_text = start.fail_text;
        break;
      }
      
      const button_text = mode == "start" ? start.button.text : start.button.text2;
      const Custom_tag = mode == start ? "button" : "a";
      
      const redirect = {href: start.button.url, target: "_blank"};
      const wizard = {onClick: (e) => {
        e.preventDefault();
        store.setPage(FSELECT);
      }}
      const attrib = mode == "start" ? {...wizard} : {...redirect};

      return (
        <div className={`rStart_wrapper ${active_form}`}>
      <RHead {...{image: form_info.info.image, title: form_info.info.title}}/>
      <div className="rStart_inner">
        <p className={`intro ${mode}`}>{intro_text}</p>
        <div className="step_cont step1_cont">
          <label htmlFor="" className="step_label">{start.step1.title}</label>
          <div className={`step_icon step1_icon ${step1_class}`}></div>
          <p className="step_info step1_info">{start.step1.text}</p>
        </div>
        <div className="step_cont step2_cont">
          <label htmlFor="" className="step_label">{start.step2.title}</label>
          { !special_access ? <div className={`step_icon step1_icon icon-${start.step2.icon}`}></div>
            : (<div className="step_access heartbeat">
                  <p>Your access key is:</p>
                  <h3 >{access_key}</h3>
              </div>)
          }
          <p className="step_info step1_info">{start.step2.text}</p>
        </div>
        {mode != "failure" ? 
        <>
          <Custom_tag className="start-btn w3-btn" ref={btn_ref}
            {...attrib}
          >{button_text}</Custom_tag>
          {mode != "start" ?
          <>
          <p className="foot_txt countdown">{`${start.button.count_text} ${count}`}</p>
          { count < 2 ? <p className="foot_txt otherwise d3-fade-in">{`${start.button.otherwise}`}</p> : null}
          </>
          : null}
        </>
         : null}
      </div>
    </div>
  )
});

export default RStart
