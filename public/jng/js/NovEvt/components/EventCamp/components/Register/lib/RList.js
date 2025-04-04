import React, {useState} from 'react';
import { observer } from 'mobx-react';
import { exists } from '../../../../../../tools/exists';
import RField from './RField';
const { form_info } = require('../../../../../jng');

const RList = observer((props) => {
  const {
    store,
    form_data,
    label,
    onChange,
    register,
    unregister,
    category,
    item1,
    item2
  } = props;

  let item_data = store.item_data;
  
  let opp_obj = form_info.form.list;
  let opp_label = opp_obj.label;

  let default_uIds = {}
  // default_uIds[`${Date.now()}`] = true;

  const get_uIds = () => {
    if (typeof item_data[`${category}`] == "undefined") item_data[`${category}`] = {};
    item_data[`${category}`];
    // debugger;
    if(typeof item_data[`${category}`] == "object" && 
    !Array.isArray(item_data[`${category}`]) && 
    Object.keys(item_data[`${category}`]).length > 0){
      // get the keys
      let keys = Object.keys(item_data[`${category}`]);
      // add the keys as props of default_uIds
      keys.forEach((key) => {
        default_uIds[`${key}`] = true;
      })
    }else{
      // temp value
      default_uIds[`${Date.now()}`] = true;
    }

    return { ...default_uIds};

  }// get_uIds
  
  // DOCS: total_keys creates a unique id to help group the options with type and description properties
  const [total_opps, setTotalOpps] = useState(get_uIds());
  let opportunities = [];

  let total_keys = Object.keys(total_opps);
  
  for (let y = 0; y < total_keys.length; y++) {
    // const element = array[y];
    
    // if (!exists(item_data[`${category}`][`${item1.name}${y}`])) store.setData(`${category}${item1.name}${y}`,"");
    // if (!exists(item_data[`${category}`][`${opp_obj["type"].attrib.name}${y}`])) store.setData(`${category}${opp_obj["description"].attrib.name}${y}`, "");

    // GOTCHA: figure out a way to make the opportunity data persistent throughout the session.
    // right now it will always start out as blank

    // let type_name = `${category}${total_keys[y]}.${opp_obj[`${"type"}`].attrib.name}${y}`;
    // let desc_name = `${category}${total_keys[y]}.${opp_obj[`${"description"}`].attrib.name}${y}`;

    if (typeof item_data[`${category}`] == "undefined") item_data[`${category}`] = {};
    if (typeof item_data[`${category}`][`${total_keys[y]}`] == "undefined") item_data[`${category}`][`${total_keys[y]}`] = {};
    
    // i don't want this to be untitled, it can be blank but not untitled.
    if (typeof item_data[`${category}`][`${total_keys[y]}`][`${item1.name}${y}`] == "undefined") item_data[`${category}`][`${total_keys[y]}`][`${item1.name}${y}`] = "";
    
    // item2.name
    if (typeof item_data[`${category}`][`${total_keys[y]}`][`${item2.name}${y}`] == "undefined") item_data[`${category}`][`${total_keys[y]}`][`${item2.name}${y}`] = "";


    let type_name = `${category}.${total_keys[y]}.${item1.name}${y}`;
    let desc_name = `${category}.${total_keys[y]}.${item2.name}${y}`;

    let opp_type_props = { 
      // variant: `${opp_obj[`${"type"}`].variant}`,
      variant: `${item1.variant}`,
      attrib: { 
        // ...opp_obj[`${"type"}`].attrib, 
        name: type_name,
        id: `${total_keys[y]}_${item1.name}${y}`,
        label: item1.name,
        type: item1.type || "text",
        placeholder: item1.placeholder || "",
        onChange, 
        register, 
        unregister,
        // defaultValue: `${item_data[`${category}`][`${opp_obj["type"].attrib.name}${y}`]}`,
        value: item_data[`${category}`][`${total_keys[y]}`][`${item1.name}${y}`],// i want to try this
        // defaultValue: ``,
      } 
    }// opp_type_props
    // NOTE: "type" used in opp_obj["type"] will also need come in as a prop - this also needs to become a single field 
    // process instead of dual fields

    let opp_desc_props = { 
      // variant: `${opp_obj[`${"description"}`].variant}`,
      variant: `${item2.variant}`,
      attrib: { 
        // ...opp_obj[`${"description"}`].attrib,
        name: desc_name,
        id: `${total_keys[y]}_${item2.name}${y}`,
        label: item2.name,
        type: item2.type || "text",
        placeholder: item2.placeholder || "",
        onChange, 
        register, 
        unregister,
        // defaultValue: `${item_data[`${category}`][`${opp_obj["description"].attrib.name}${y}`]}`
        value: item_data[`${category}`][`${total_keys[y]}`][`${item2.name}${y}`],
      } 
    }// opp_desc_props
    
    // GOTCHA: delete is failing to remove all the getValue data - try again later when we have more time
    opportunities.push(
      <div className="w3-row" key={`${total_keys[y]}`}>
        <RField {...opp_type_props} />
        <RField {...opp_desc_props} />
        {/* <div className="rList_delete icon-bin w3-col m1 s1" data-key={`${total_keys[y]}`}
          onClick={() => {
            setTotalOpps((prev) => {
              // let new_opps = prev.filter((entry) => {
              //   return entry == total_keys[y] ? false : true
              // })
              let new_opps = {...prev};
              // form_data.remove(type_name)
              // form_data.remove(desc_name);
              delete new_opps[`${total_keys[y]}`];
              return {...new_opps};
            });
          }}
        ></div> */}
      </div>
    );
  }

  return (
    <div className={`rList_wrapper`}>
      <div className="rForm_option">{label}</div>
      {opportunities}
      <div className="rList_add_cont">
        <button className="rList_add w3-btn icon-plus" 
        href="#"
          onClick={(e) => {
            e.preventDefault();
            setTotalOpps((prev) => {
              let key_array = Object.keys(prev);
              let next_opp = `${Date.now()}`;
              let final_opp = {...prev};
              final_opp[`${next_opp}`] = true;
              return { ...final_opp};
            });
          }}
        >Add</button>
      </div>
    </div>
  )
});

export default RList;
