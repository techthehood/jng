import React, {useState, useContext} from 'react';
import { observer } from 'mobx-react';

import CustomInput from '../../CustomInput'
import CustomTextarea from '../../CustomTextarea'
import RHead from './RHead';
import RInfo from './RInfo';
import RawHide from '../../RawHide';
import RField from './RField'; 
import RList from './RList';
import RCheck from './RCheck';
// import { render, Mjml, MjmlHead, MjmlBody, MjmlSection, MjmlColumn, MjmlDivider, MjmlText } from 'mjml-react';


import { obj_exists } from '../../../../../../tools/exists';
import { JngContext } from '../../../../../jngContext';
import { get_value } from '../../../../../../tools/get_value';
import { mail_template } from '../../Mail/mail_template';

import RPrev from './RPrev';
const { form_info, agency_items, edu_items, gen_items, html_parts } = require('../../../../../jng');
const { FSTART, FSELECT, FFORM, FSUCCESS, FFAIL } = form_info.pages;
const dev_mode = true;

const RForm = observer((props) => {
  
  const {
    form_data,
    active_form,
    id = Date.now(),
    mode = "default"// full form duplicate
  } = props;
  
  const store = useContext(JngContext);

  const form_test = store.form_test;

  const { register, unregister, handleSubmit, errors } = form_data;
  const [name_error, setNameError] = useState({ error: false, message: "" });
  
  // const [item_data, setItemData] = useState({
  //   id,
  //   title: "",// faker.internet.email()
  //   // description: props.description || "",
  //   // image: props.image || ""
  // });

  if(store.item_data.id == ""){
    store.setData("id", Date.now());
  }

  const updateInput = (uI) => {
    let { name } = uI;
    let values = form_data.getValues();
    // debugger;

    if (name == "title") {
      if (values[name] == "") {
        setNameError({ error: true, message: "value is required" })
      } else {
        setNameError({ error: false, message: "" })
      }
    }

    // setItemData((prev) => {
    //   let item_update = { ...prev };
    //   item_update[`${name}`] = values[name];
    //   return item_update;
    // });
    let final_value = (name.includes(".")) ? get_value(values, `${name}`) : values[name];

    store.setData(`${name}`, final_value);
  }// updateInput

  const prepData = (data) => {
    const select_props = form_info.select;
    const form_filter = [...select_props.shared, ...select_props[active_form].info, ...select_props[active_form].custom];

    const send_data = {};

    form_filter.forEach((entry) => {

      if(obj_exists(data,`${entry}`)){
        // do something
        if (!Array.isArray(data[entry])){
          // if its not an array do use it.
          send_data[entry] = data[entry];

        }else{
          // extract the object data from the array
          let data_keys = Object.keys(data[entry]);
          data_keys.forEach((key, ndx) => {
            send_data[`${entry} ${ndx}`] = data[entry][key];
            // send_data[`${entry}`] = data[entry][key];
          })
        }
      }else{
        // do nothing
      }// else
    })// forEach

    sendData(send_data);

  }// prepData

  const transform_to_elements = (key, value) => {
    return `<p>${key}: ${value}</p>`;
  }// transform_to_elements

  const prep_message = (obj) => {
    let m_ary = Object.keys(obj);
    let result = m_ary.map((entry) => {
      if(typeof obj[entry] == "string"){
        return transform_to_elements(entry, obj[entry]);
      }else{
        const custom_keys = Object.keys(obj[entry]);
        let new_els = [];
        const parsed_items = custom_keys.reduce((total, key) => {
          let tf = transform_to_elements(key, obj[entry][key]);
            total.push(tf);
          return total;
        }, []);

        return `<p><strong>${entry}</strong></p>${parsed_items.join("")}`;
      }
    })

    return result.join("");
  }// prep_message

  const prep_preview = () => {
    const rForm = document.querySelector('.rForm_wrapper');

    const h_cont = rForm.cloneNode(true);
    // return h_cont.innerHTML;
    return html_parts.pre + h_cont.outerHTML + html_parts.post;
  }// prep_preview

  const sendData = (data) => {

    // let formData = {
    //   from: from.value,
    //   email: email.value,
    //   subject: subject.value,
    //   message: message.value
    // }

    let formData = {};

    formData.subject = `${form_info.select[`${active_form}`].title} Form Submission`;
    formData.email = data.email;
    formData.active_form = active_form;
    // formData.message = prep_message({...data});
    switch (mode) {
      case "raw":
        formData.message = {...data};
        formData.format = "text";
        break;

      case "email":
        // email template
        const values = form_data.getValues();
        // formData.message = { ...data };
        formData.message = { ...values };
        const mjml_template = mail_template({...formData});
        formData.message = mjml_template.html;
        formData.format = "email";

        console.log(mjml_template);
        break;
      
      case "basic":
        // basic html display
        formData.message = prep_message({ ...data });
        break;
    
      default:
        // full html duplicate of form
        formData.message = prep_preview();
        break;
    }

    console.log(formData.message);

    if (form_test) return;

    let xhr = new XMLHttpRequest();
    xhr.open('POST', '/api/mail/sendMail');
    xhr.setRequestHeader('content-type', 'application/json');
    xhr.onload = () => {
      console.log(xhr.responseText);
      if (xhr.responseText == 'success') {
        // alert('Email sent');
        store.setPage(FSUCCESS);

        if (dev_mode) {
          // do nothing
        } else {
          // this doesn't work as is
          // from.value = "";
          // email.value = "";
          // subject.value = "";
          // message.value = "";
        }
      } else {
        // alert('An error occured!');
        store.setPage(FFAIL);
      }// else
    }

    xhr.send(JSON.stringify(formData));
  };// sendData

  const onSubmit = () => {

    // e.preventDefault();

    const values = form_data.getValues();

    prepData(values)//
    // sendData(values)


    console.log(`[RForm] values`,values);
  }// onSubmit

  const show_preview = () => {

    const rPrev = document.querySelector('.rPrev_root');
    // if(rPrev) rPrev.innerHTML = "";// clear the last preview display
    ReactDOM.unmountComponentAtNode(rPrev);// this works

    const rPrev_root = document.querySelector('.rPrev_root');

    ReactDOM.render(
      <RPrev />,
      rPrev_root
    );
  }

  // i don't need a preview
  // let preview_ctrls = (
  //   <div className="snap_btn d3-ico d3-ico-btn icon-eye snap_core rForm_display_preview_btn"
  //     title="preview"
  //     key={`snap_section_preview_extra`}
  //     onClick={(e) => {
  //       // console.warn("[options] clicked");
  //       e.preventDefault()
  //       let rpre = document.querySelector(".register-preview-icon");
  //       show_preview();
  //       // let values = form_data.getValues();
  //       // store.setPreview(values);
  //       rpre.click();
  //     }}></div>
  // );

  let menu_ctrls = (
    <div className="snap_btn d3-ico d3-ico-btn icon-menu snap_core rForm_display_select_btn"
      title="menu"
      key={`snap_section_select_extra`}
      onClick={(e) => {
        e.preventDefault()
        store.setPage(FSELECT);
      }}></div>
  );

  let item_data = store.item_data;

  let name_data = {};
  name_data.value = item_data.name;
  name_data.reg_data = { required: true };

  const form_title = obj_exists(form_info,`select.${active_form}.title`) ? form_info.select[`${active_form}`].title : "";

  return (
    <div className={`rForm_wrapper rForm`}>
      <RHead {...{image: form_info.info.image, title: form_info.info.title}}/>
      {menu_ctrls}
      {/* {preview_ctrls} */}
      <RawHide {...{ title: "more info", hr: false, is_open: false,/*top_hr:true,*/ custom: "rInfo_info_menu", icon_up: "circle-up", icon_down: "info", disc: false }}>
        <RInfo {...form_info.info} />
      </RawHide>
      <form className={`rForm_form hide-scroll`} onSubmit={handleSubmit(onSubmit)}>
      <div className="rForm_active">{form_title}</div>
        <div className="w3-row">
          <RField {...{ variant: `${form_info.form[`${"name"}`].variant}`, attrib:{...form_info.form[`${"name"}`].attrib, onChange: updateInput, register, ...name_data}}} >
            {name_error.error ? (
              <p className={`name_error`}>{name_error.message}</p>
            ) : null}
          </RField>
          {["contractor", "agency"].includes(active_form) ?
          <RField {...{ variant: `${form_info.form[`${"title"}`].variant}`, attrib:{...form_info.form[`${"title"}`].attrib, onChange: updateInput, register, value: item_data[`${form_info.form["title"].attrib.name}`]}}} />
          : null}
        </div>
        {["contractor","agency"].includes(active_form) ? 
          <div className="w3-row">
            <fieldset className={`w3-col m8`}>
            <CustomInput
              name="company"
              type="text"
              id="company"
              label="Company"
              placeholder="Enter company name..."
              onChange={updateInput}
              // {...register("email")}
              register={register}
              value={item_data.company}
            />
          </fieldset> 
            <fieldset className={`w3-col m4`}>
            <CustomInput
              name="type"
              type="text"
              id="type"
              label="Type"
              placeholder="Type of company..."
              onChange={updateInput}
              // {...register("email")}
              register={register}
              value={item_data.type}
            />
          </fieldset>
          </div>
        : null}
        <div className="w3-row">
          <fieldset className={`w3-col m8`}>
            <CustomInput
              name="address"
              type="text"
              id="address"
              label="address"
              placeholder=""
              onChange={updateInput}
              // {...register("email")}
              register={register}
              value={item_data.address}
            />
            {name_error.error ? (
              <p className={`name_error`}>{name_error.message}</p>
            ) : null}
          </fieldset>
          <fieldset className={`w3-col m4`}>
            <CustomInput
              name="suite"
              type="text"
              id="suite"
              label="suite"
              placeholder=""
              onChange={updateInput}
              // {...register("email")}
              register={register}
              value={item_data.suite}
            />
          </fieldset>
        </div>
        <div className="w3-row">
          <fieldset className={`w3-col m7 s8`}>
            <CustomInput
              name="city"
              type="text"
              id="city"
              label="city"
              placeholder=""
              onChange={updateInput}
              // {...register("email")}
              register={register}
              value={item_data.city}
            />
          </fieldset>
          <fieldset className={`w3-col m2 s4`}>
            <CustomInput
              name="state"
              type="text"
              id="state"
              label="state"
              placeholder=""
              onChange={updateInput}
              // {...register("email")}
              register={register}
              value={item_data.state}
            />
          </fieldset>
          <fieldset className={`w3-col m3`}>
            <CustomInput
              name="zip"
              type="text"
              id="zip"
              label="zip code"
              placeholder=""
              onChange={updateInput}
              // {...register("email")}
              register={register}
              value={item_data.zip}
            />
          </fieldset>
        </div>
        <div className="w3-row">
          <fieldset className={`w3-col m6`}>
            <CustomInput
              name="telephone"
              type="phone"
              id="telephone"
              label="telephone"
              placeholder=""
              onChange={updateInput}
              // {...register("email")}
              register={register}
              value={item_data.telephone}
            />
            {name_error.error ? (
              <p className={`name_error`}>{name_error.message}</p>
            ) : null}
          </fieldset>
          <fieldset className={`w3-col m6`}>
          { ["contractor", "agency"].includes(active_form) ?
            <CustomInput
              name="fax"
              type="phone"
              id="fax"
              label="fax"
              placeholder=""
              onChange={updateInput}
              // {...register("email")}
              register={register}
              value={item_data.fax}
            /> : 
            <CustomInput
              name="mobile"
              type="phone"
              id="mobile"
              label="mobile"
              placeholder=""
              onChange={updateInput}
              // {...register("email")}
              register={register}
              value={item_data.mobile}
            /> }
          </fieldset>
          {["contractor", "agency"].includes(active_form) ?
            <fieldset className={``}>
              <CustomInput
                name="email"
                type="email"
                id="email"
                label="email"
                placeholder=""
                onChange={updateInput}
                // {...register("email")}
                register={register}
                value={item_data.email}
              />
            </fieldset>
            : null}
        </div>
        {["contractor"].includes(active_form) ?
          <RList {...{ store, form_data, onChange: updateInput, register, unregister, label: "job opportunities", category: "opportunities",
          item1:{name: "type", variant: "w3-col m6", placeholder: "opportunity type"}, 
          item2:{name:"description", variant:"w3-col m6", placeholder: "describe the opportunity..."}}} />
        : null}
        {["agency"].includes(active_form) ?
          <RCheck {...{ store, form_data, onChange: updateInput, register, unregister, items: agency_items, category: "resources",
            label: "Resource Information", sub: "(Please check the services or information you will provide)", variant: "res_check"
        }} >
            < RField {...{
              variant:"w3-col res_txt", 
              mode: "textarea", 
              attrib:{
                name: "resources.skill",
                id: `resource_skill`,
                label: "Skill Training",
                register,
                placeholder: "List type...",
                onChange: updateInput,
                value: item_data.resources?.skill
              },
            }} />
            < RField {...{
              variant: "w3-col res_txt", 
              mode: "textarea", 
              attrib: {
                name: "resources.additional",
                id: `resource_additional`,
                label: "Additional Services",
                register,
                placeholder: "Please provide additional service(s) not included above:",
                onChange: updateInput,
                value: item_data.resources?.additional
              }
            }} />
        </RCheck>
          : null}
        {["applicant"].includes(active_form) ?
          <RList {...{
            store, form_data, onChange: updateInput, register, unregister, label: "work experience", category: "experience",
            item1: { name: "type", variant: "w3-col m6", placeholder: "job type" },
            item2: { name: "duties", variant: "w3-col m6", placeholder: "" }
          }} />
        : null}
        {["applicant"].includes(active_form) ?
          <RCheck {...{
            store, form_data, onChange: updateInput, register, unregister, items: edu_items, category: "education",
            label: "Education", sub: "(Please check your highest level of education)", variant: "edu_check"
          }} >
            < RField {...{
              variant: "w3-col edu_txt", 
              mode: "textarea", 
              attrib: {
                name: "education.list",
                id: `education_list`,
                label: "school list",
                register,
                placeholder: "list name of school or training ",
                onChange: updateInput,
                value: item_data.education?.list
              }
            }} />
          </RCheck>
          : null}
        {["general"].includes(active_form) ?
          <RCheck {...{
            store, form_data, onChange: updateInput, register, unregister, items: gen_items, category: "general",
            label: "General Information", sub: "Brief description of your attendance:", variant: "gen_check"
          }} >
            < RField {...{
              variant: "w3-col gen_txt", 
              mode: "textarea", 
              attrib: {
                name: "general.other",
                id: `general`,
                label: "other",
                register,
                placeholder: "",
                onChange: updateInput,
                value: item_data.general?.other
              }
            }} />
          </RCheck>
          : null}
        <div className={`rForm_mask`} >{form_info.info.notice}</div>
        <div className="rForm_submit_cont">
          <button className={`rForm_submit w3-btn icon-checkmark`} type="submit"></button>
        </div>
      </form>
    </div>
  )
})

export default RForm

// variant: "w3-col m5",
//   variant: "w3-col m6 s11",

 