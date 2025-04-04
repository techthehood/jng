import React, {useEffect} from "react";
import ReactDOM from "react-dom";

import "./Team.scss";

import htmlContent from './Team.hbs';// works as template fn
import { true_target } from "../../../../../../tools/true_target";
import Modal from '../../../../../../elements/Modal';
import TeamBio from "./TeamBio";

const Team = (props) => {

  const {
    data = {},
  } = props;

  const close_panel = (e, obj) => {
    // close the modal
    e.preventDefault();
    obj.close();
  }// close_panel

  const view_bio = (e) => { 

    // get the event target
    let target = e.target;

    // search for the targets parent if not element being listened to
    target = true_target(target, "tag-team", "class");

    // get the listeners data value
    let alt = target.dataset.alt;

    // find the correct member data
    let member;
    data.members.forEach((entry) => { 
      if(entry.alt == alt){
        member = {...entry};
      }
    });// WORKS

    // add the member data to the popup component

    // render the modal
    let modal_data = {
      name: "team_view",
      tag: "",
      // hasWrapper: true,
      wrapper: {
        // style:{
        //   zIndex: modal_z
        // },
      addClass: "some-class hide-scroll"
      },
      modal: {
        addClass: "UserCard"
      },
      content: {
        addClass: "hide-scroll container"
      },
      // go:{
      // 	show: true,
      // 	callback: close_panel
      // },
      close: {
        show: true,
        //addClass:"pp_btn svg-icon-cross",
        // hide: modal_close_hide,// deprecated
        // hide: true,// it will probably never be hide
        callback: close_panel
      },
      // cancel: {
      //   show: true,
      //   icon: true,
      //   //addClass:"pp_btn svg-icon-cross",
      //   // hide: modal_close_hide,// deprecated
      //   // hide: true,// it will probably never be hide
      //   callback: close_panel
      // }
    }// modal_data
    

    ReactDOM.render(
      <Modal data={modal_data}>
        <TeamBio {...{...member}}/>
      </Modal>,
      document.querySelector('.modal_home')
    );

    return;
    
  }// view_bio

  const initialize = () => {

    // window.onload = (event) => { // FAIL
    window.addEventListener('load', (event) => { // WORKS
      console.log('[team] page is fully loaded');
      // return;
      let team_btns = document.querySelectorAll(".tag-team");// NodeList []
      team_btns.forEach((entry) => {
        entry.addEventListener('click', view_bio);
      });
    });
  };// initialize

  useEffect(() => {
    initialize();
    return () => {
      
    }
  }, [])
  

  const h_cont = htmlContent(data);

  return (
    <div className="Team">
      <div dangerouslySetInnerHTML={{ __html: h_cont }} />
    </div>
  );
}

export default Team

/**
 * 
  {{#each member}}
    <div class="item text-center wow fadeInUp">
      <div class="image-holder">
        <img src="{{src}}" alt="{{alt}}">
      </div>
      <h3 class="team-name">{{name}}</h3>
    </div>
  {{/each}}
 */