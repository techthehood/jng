import {useRef} from 'react';

const MCTextArea = (props) => {
  const {
    id = "",
    value = "",
    name,
    label,
    variant = ""
    wrap_style = {},
    label_style = {},
    text_style = {},
  } = props;

  return (
    <div style={...wrap_style} >
      <label style={...label_style}>
        {label}
      </label>
      <p 
        id={id} 
        name={name}
        style={...text_style}
       >{value}</p>
    </div>
  );
}

export default MCTextArea

