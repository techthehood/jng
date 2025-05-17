import React from 'react';
import { MjmlSection, MjmlColumn, MjmlText } from '@luma-team/mjml-react';

const MCT = (props) => {

  const {
    children,
    column = {},
    text = {},
  } = props;

  return (
    <MjmlColumn {...column}>
      <MjmlText {...text}>
        {children}
      </MjmlText>
    </MjmlColumn>
  )
}

export default MCT
