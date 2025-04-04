import React from 'react';
import { observer } from 'mobx-react';
import RField from './RField';
const { form_info } = require('../../../../../jng');

const RCheck = observer((props) => {

  const {
    store,
    label,
    sub,
    items,
    variant,
    category,
    type,
    register,
    unregister,
    onChange,
    children
  } = props;

  debugger;
  let item_data = store.item_data;

  const check_els = items.map((item, ndx) => {

    if (typeof item_data[`${category}`] == "undefined") item_data[`${category}`] = {};

    // i don't want this to be untitled, it can be blank but not untitled.
    if (typeof item_data[`${category}`][`${item}`] == "undefined") item_data[`${category}`][`${item}`] = false;

    let check_name = `${category}.${item}`;

    let check_props = {
      // variant: `${opp_obj[`${"type"}`].variant}`,
      variant: `${variant}`,
      attrib: {
        // ...opp_obj[`${"type"}`].attrib, 
        name: check_name,
        id: `${category}_${item}_${ndx}`,
        label: `${item}`,
        type: type || "checkbox",
        onChange, 
        register,
        unregister,
        check_mode: true,
        checked: item_data[`${category}`][`${item}`]
      }
    }

      return < RField { ...check_props } />;

  })

  const resource = form_info.form.resource;

  return (
    <div className={`rRes_wrapper`}>
      <div className="rForm_option rRes_option">
        <div className="rRes_label">{label}</div>
        <div className="rRes_sub">{sub}</div>
      </div>
      <div className="rRes_cont">
        {check_els}
        {children}
      </div>
    </div>
  )
});

export default RCheck;
