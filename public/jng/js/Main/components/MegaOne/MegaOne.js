import {Suspense} from 'react';
// import PropTypes from 'prop-types'

import "./MegaOne.scss";

import template_selector from './components/template_selector';

const MegaOne = ({
  component,
  ...rest
}) => {
  
  let Comp = template_selector[component];

  return (
    <Suspense fallback={<div className="loader_modal w3-modal active"><div className="loader">Loading...</div></div>} >
      <Comp {...rest} />
    </Suspense>
  );
}

// MegaOne.propTypes = {}
export default MegaOne



