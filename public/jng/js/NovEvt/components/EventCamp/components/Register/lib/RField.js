import React from 'react'
import MCInput from '../../MCInput';
import CustomInput from '../../CustomInput';
import CustomTextArea from '../../CustomTextarea';

const RField = (props) => {
  const {
    attrib,
    variant,
    children,
    mode = "input",
    no_form = false
  } = props;
  

  const form_fin = no_form ? (
    <>
      <MCInput {...attrib} />
      {children}
    </>
  ) : (
    <fieldset className = {`${variant}`}>
      { mode == "input" ?
      <CustomInput {...attrib} />
      :
      <CustomTextArea {...attrib} />}
      { children }
    </fieldset >
  )
  return form_fin;
}

export default RField
