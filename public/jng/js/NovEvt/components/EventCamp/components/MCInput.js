import React, {Component, createRef} from 'react';

export default class CustomMI extends Component {

  constructor(props){
    super(props);
    this.dummyRef = createRef();
  }

  render(){
    const { 
    value = "", 
    check_mode = false, 
    checked, 
    wrap_style = {},
    label_style = {},
    input_style = {},
  } = this.props;

    const attrib = {};

    let label_el = <label style={label_style} >{this.props.label}</label>;

    let top_label = typeof checked == "undefined" ? label_el : null;
    let bot_label = typeof checked != "undefined" ? label_el : null;

    let display = check_mode ? (
      <div style={{padding: ".25rem", display:"inline-block"}}>
        <input style={{...input_style}}
        type={"checkbox"}
          defaultChecked={checked}
          disabled={true}
          />
      </div>
    ) : (
      <p style={input_style} >{value}</p>
    );

    return (
      <div style={{...wrap_style}}>
        {top_label}
        {display}
        {bot_label}
      </div>
    );
  }// render
}

//<input name={this.props.name}

/**
  <form className={`pTree_form`} onSubmit={handleSubmit(onSubmit)}>
    <fieldset>
      <CustomMI
        name="title"
        type="text"
        id="title"
        label="Add a link title"
        placeholder="Enter title text..."
        // {...register("email")}
        register={register}
        {...title_data}
      />
    </fieldset>
  </form>

  // or add onchange and a state value for a controlled component
  
  const updateInput = (uI) => {
    let {name} = uI;
    let values = form_data.getValues();
    let item_update = {};
    item_update[`${name}`] = values[name];
    setItemData(item_update);
    debugger;
  }

  let title_data = {};
  title_data.value = item_data.title;
  ...
  <CustomMI
      name="title"
      type="text"
      id="title"
      label="Add a link title"
      placeholder="Enter title text..."
      onChange={updateInput}
      // {...register("email")}
      register={register}
      {...title_data}
    />
 */
