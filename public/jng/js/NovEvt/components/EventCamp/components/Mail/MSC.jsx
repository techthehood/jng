import React from 'react';
import { MjmlSection, MjmlColumn, MjmlText } from '@luma-team/mjml-react';

const MSC = (props) => {

  const {
    children,
    section={},
    column={},
  } = props;

  return (
    <MjmlSection {...section}>
      <MjmlColumn {...column}>
        {children}
      </MjmlColumn>
    </MjmlSection>
  )
}

export default MSC
