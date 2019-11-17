import React from 'react';

import "./common-button.css";


// Button has a special style. "primary"

function CommonButton(props) {
  return (
    <button className={"appCommonButton " + props.type} style={props.overrideStyles}>
        {props.buttonText}
    </button>
  );
}

export default CommonButton;
