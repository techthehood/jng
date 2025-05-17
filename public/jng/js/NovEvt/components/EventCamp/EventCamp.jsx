import {Suspense} from 'react';
// import PropTypes from 'prop-types'

import template_selector from './components/template_selector';

const EventCamp = ({
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

// EventCamp.propTypes = {}
export default EventCamp

/**
 * NOTE: See /Components to see the different designs that make up this event page
 * ALso see /Components/DeferMe/DeferMe.js to see all the lazy loaded scripts and styles
 */

