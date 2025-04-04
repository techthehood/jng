import { observer } from 'mobx-react';
import React from 'react';
import SimpleTree from '../../../../../../elements/SimpleTree';
import RHead from './RHead';

const { form_info } = require('../../../../../jng');

let dl_btns = `rSelect_dnld w3-btn w3-card`;
let link_prefix = `forms`;// `${location.origin}/forms`

const RSelect = observer((props) => {

  const {callback, active_form = ""} = props;

  return (
    <div className={`rSelect_wrapper ${active_form}`}>
      <RHead {...{image: form_info.info.image, title: form_info.info.title, sub: form_info.info.sub}}/>
      <div className="rSelect_inner">
        <SimpleTree {...{ title: form_info.select.contractor.title, description: "click to register online", hTag: "h6", variant: `${active_form == "contractor" ? "active" : ""} contractor`, callback: () => {
          callback(form_info.select.contractor.form)
        }}} />
        <a className={`${dl_btns} cont-dl icon-cloud-download`} 
        title={`download ${form_info.select.contractor.title}`}
          href={`${link_prefix}/${form_info.select.contractor.pdf}`}
          target="_blank"
        ><p>pdf</p></a>
        <SimpleTree {...{
          title: form_info.select.agency.title, description: "click to register online", hTag: "h6", variant: `${active_form == "agency" ? "active" : ""} agency`, callback: () => {
            callback(form_info.select.agency.form)
          }}} />
        <a className={`${dl_btns} agen-dl icon-cloud-download`} 
        title={`download ${form_info.select.agency.title}`}
          href={`${link_prefix}/${form_info.select.agency.pdf}`}
          target="_blank"
        ><p>pdf</p></a>
        <SimpleTree {...{ title: form_info.select.general.title, description: "click to register online", hTag: "h6", variant: `${active_form == "general" ? "active" : ""} general`, callback: () => {
          callback(form_info.select.general.form)
        }}} />
        <a className={`${dl_btns} gen-dl icon-cloud-download`} 
        title={`download ${form_info.select.general.title} form`}
        href={`${link_prefix}/${form_info.select.general.pdf}`}
        target="_blank"
        ><p>pdf</p></a>
        <SimpleTree {...{
          title: form_info.select.applicant.title, description: "click to register online", hTag: "h6", variant: `${active_form == "applicant" ? "active" : ""} applicant`, callback: () => {
          callback(form_info.select.applicant.form)
        }}} />
        <a className={`${dl_btns} app-dl icon-cloud-download`} 
        title={`download ${form_info.select.applicant.title} form`}
        href={`${link_prefix}/${form_info.select.applicant.pdf}`}
        target="_blank"
        ><p>pdf</p></a>
      </div>
    </div>
  )
});

export default RSelect
