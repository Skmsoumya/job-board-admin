import React from 'react';

import "./CommonButton.css";


// Button has a special style. "primary"

function CommonButton(props) {
  return (
    <button className={`appCommonButton ${props.type ? props.type : ""} ${props.className ? props.className : ""}`} style={props.overrideStyles}>
        {props.children}
    </button>
  );
}

export default CommonButton;
