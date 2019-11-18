import React from 'react';
// import TextField from '@material-ui/core/TextField';

import "./AppContent.css";
// import CommonButton from '../small-components/CommonButton/CommonButton';


// Button has a special style. "primary"

function AppContent(props) {
  return (
    <div className="appContentHolder">
        {props.children}
    </div>
  );
}

export default AppContent;
