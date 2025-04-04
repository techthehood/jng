import React from 'react';
import { MjmlSection, MjmlColumn, MjmlText } from '@luma-team/mjml-react';

const MSCT = (props) => {

  const {
    children,
    section={},
    column={},
    text={},
  } = props;

  return (
    <MjmlSection {...section}>
      <MjmlColumn {...column}>
        <MjmlText {...text}>
          {children}
        </MjmlText>
      </MjmlColumn>
    </MjmlSection>
  )
}

export default MSCT
