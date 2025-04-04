import {useContext, useRef, useEffect, useState} from 'react';
import { observer } from 'mobx-react';

import Modal from '../../../../../elements/Modal';
import Snapper from '../Snapper/Snapper';
import Section from '../Snapper/Section';
import ErrorBoundary from '../Error';
import { useForm, useFieldArray } from 'react-hook-form';
import RForm from './lib/RForm';
import RSelect from './lib/RSelect';
import RStart from './lib/RStart';
import RPrev from './lib/RPrev';

import { JngContext } from '../../../../jngContext';
import { form_info } from '../../../../jng';
const {FSTART, FSELECT, FFORM, FSUCCESS, FFAIL} = form_info.pages;

require('./Register.scss');

const Register = observer(() => {
  
  const { control, register, unregister, getValues, setValue, handleSubmit, watch, errors, formState, setError, clearErrors, triggerValidation } = useForm({ mode: "onchange", criteriaMode: "all" });
  const { remove } = useFieldArray({control, name: "test"});
  const form_data = { register, unregister, getValues, handleSubmit, setValue, errors, formState, setError, clearErrors, triggerValidation, remove };
  
  const store = useContext(JngContext);

  const form_snapper = useRef();
  store.form_snapper = form_snapper;

  useEffect(() => {
    
  },[store.active_form])

  const close_panel = (e, obj) => {
    // close the modal
    store.resetPages();
    e.preventDefault();
    obj.close();
  }// close_panel

  const display_form = (form) => {
    // form_snapper.current.goto_section(1);
    // let rpi = document.querySelector(".register-profile-icon");
    store.setActiveForm(form);
    store.setPage(FFORM);
    // rpi.click();
  }// display_form


  let modal_data = {
    name: "register_view",
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
      addClass: "hide-scroll"
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

  // let right_ctrls = [
  //   <div className="snap_btn d3-ico d3-ico-btn icon-eye snap_core"
  //     title="preview"
  //     key={`snap_section_preview_extra`}
  //     onClick={(e) => {
  //       // console.warn("[options] clicked");
  //       e.preventDefault()
  //       let rpre = document.querySelector(".register-preview-icon");
  //       rpre.click();
  //     }}></div>
  //   ];

  let snap_data = {
    name: "snap_core",
    // icons: ["user","qrcode"],
    // labels: ["Div", "QRCode"],
    extras: {},
    add_options: true,// ctrls the left and right options area
    auto_adjust: false,
    // section_callback: update_section,
    align: "top",
    mode: "tabs",
    start_ndx: 0,
    ctrl: {
      justify: "left",//"dots"
      style: {
        width: "1.75rem",
        margin: "5px"
      },
      // main: { custom: "hide-scroll" },
      // left: { children: [<UserMenu key={`snap_user_menu_${state.main_IUN}`} />] },
      // right: { children: right_ctrls }
    }
  };

  // IDEA: i need a reliable way to activate/deactivate the go btn (disable)
  let page = store.page;

  return (
    <ErrorBoundary>
      <Modal data={modal_data} >
        { page == FSTART ?
        <RStart {...{callback: display_form, active_form: store.active_form}} />
        // <RStart {...{callback: display_form, active_form: store.active_form, mode: "success", countdown: true}} />
      : null}
      { page == FSELECT ?
        <RSelect {...{callback: display_form, active_form: store.active_form}} />
      : null}
      { page == FFORM ?
        <RForm {...{ form_data, active_form: store.active_form, mode: "email" }} />
      : null}
      { page == FSUCCESS ?
          <RStart {...{ callback: display_form, active_form: store.active_form, mode: "success", countdown: true }} />
      : null}
      { page == FFAIL ?
          <RStart {...{ callback: display_form, active_form: store.active_form, mode: "failure" }} />
      : null}
      </Modal>
    </ErrorBoundary>
  )
})// Register

export default Register

/**
 * 
  address-book
  file-text
  profile

  let snap_data = {
    name: "snap_core",
    // icons: ["user","qrcode"],
    // labels: ["Div", "QRCode"],
    extras: { },
    add_options: true,
      auto_adjust: false,
        // section_callback: update_section,
        align: "bottom",
          mode: "scroll",
            start_ndx: start_index,
              ctrl: {
      justify: "center",//"dots"
        style: {
        width: "1.75rem",
          margin: "5px"
      }
    }
  };


  <Snapper data={{ ...snap_data }}>
    <Section icon="user"><ProfileTree {...{ ...item, }} /></Section>
    <Section icon="qrcode"><QRC {...{ data: card_data }} /></Section>
  </Snapper>
 */