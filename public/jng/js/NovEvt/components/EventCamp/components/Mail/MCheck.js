import React from 'react';
import { MjmlSection, MjmlColumn, MjmlText } from '@luma-team/mjml-react';
import RField from '../Register/lib/RField';
import MCT from './MCT';
import MSC from './MSC';
const { form_info } = require('../../../../jng');

const MCheck = (props) => {

  const {
    label,
    sub,
    items,
    variant,
    category,
    type,
    children,
    item_data
  } = props;

  debugger;

  const check_els_fin = items.map((entry, ct) => {

    let check_els = entry.map((item,ndx) => {
      if (typeof item_data[`${category}`] == "undefined") item_data[`${category}`] = {};

      // i don't want this to be untitled, it can be blank but not untitled.
      if (typeof item_data[`${category}`][`${item}`] == "undefined") item_data[`${category}`][`${item}`] = false;

      let check_name = `${category}.${item}`;

      let check_props = {
        // variant: `${opp_obj[`${"type"}`].variant}`,
        no_form: true,
        variant: `${variant}`,
        attrib: {
          // ...opp_obj[`${"type"}`].attrib, 
          name: check_name,
          id: `${category}_${item}_${ndx}`,
          label: `${item}`,
          type: type || "checkbox",
          check_mode: true,
          checked: item_data[`${category}`][`${item}`]
        }
      }

      return <MCT key={check_name} column={{ width: "33%" }}>< RField {...check_props} /></MCT>;
    });

    return <MjmlSection key={`check_els_fin${ct}`}>{check_els}</MjmlSection>
  })

  const resource = form_info.form.resource;

  return (
    <>
      <MSC>
        <MjmlText>
        <div className="rRes_label" style={{padding: "1rem 0 .25rem", fontSize: "1rem"}}>{label}</div>
        </MjmlText>
        <MjmlText>
        <div className="rRes_sub" style={{padding: ".25rem 0 1.5rem", fontSize: ".8rem"}}>{sub}</div>
        </MjmlText>
      </MSC>
        {check_els_fin}
        {children}
    </>
  )
};

export default MCheck;
