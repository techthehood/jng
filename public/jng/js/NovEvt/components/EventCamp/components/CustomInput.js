import React, {Component, createRef} from 'react';

export default class CustomInput extends Component {

  constructor(props){
    super(props);
    this.inputRef = createRef();
  }

  componentWillUnmount(){
    if(this.props.unregister) this.props.unregister(this.props.name)
  }

  render(){
    const { value = "", check_mode = false, checked, onChange, name, variant = "", register = ()=>{}, unregister, reg_data = {} } = this.props;

    const attrib = {};
    if(onChange) attrib.onChange = (e) => {
      onChange({e,name})
    };

    if(onChange){ 
      if(check_mode){
        // GOTCHA: checked workd in all instances except if you want to clone and use an exact copy of the form
        // with accurate checked attributes. somehow the controlled component fails to update the DOM with the 
        // newly checked attribute if it started out as false (? who knows?)
        // attrib.checked = checked;
        attrib.defaultChecked = checked;// works (also uses onChange to update state)
      }else{
        attrib.value = value;
      }
    }else{
      if (check_mode){
        attrib.defaultChecked = checked;
      }else{
        attrib.defaultValue = value;
      }
    }

    let label_el = <label htmlFor={this.props.id} >{this.props.label}</label>;

    let top_label = typeof checked == "undefined" ? label_el : null;
    let bot_label = typeof checked != "undefined" ? label_el : null;

    return (
      <div className={`form-group ${name.replace(".","_")} ${variant}`}>
      {top_label}
      <input name={name}
      id={this.props.id}
      // ref={register}
      ref={(el) => {
        register(el,reg_data);
        this.inputRef.current = el;
      }}
      placeholder={this.props.placeholder}
      className="form-control"
      type={this.props.type}
      {...attrib}
      // {...register(this.inputRef)}
      onClick={() => {
        this.inputRef.current.select();
      }}
      // onChange={onChange}
      />
      {bot_label}
      </div>
    );
  }// render
}

//<input name={this.props.name}

/**
  <form className={`pTree_form`} onSubmit={handleSubmit(onSubmit)}>
    <fieldset>
      <CustomInput
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
  <CustomInput
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
