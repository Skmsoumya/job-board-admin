import React from 'react';

import "./MobileNavbar.css";


// Button has a special style. "primary"

function MobileNavbar(props) {
  return (
    <div className="mobileNavbarBackdrop">
        <div className="mobileNavbar">
            <div className="navbarHeader">
                {props.moblileNavCloseBtn}
            </div>

            {props.children}
        </div>
    </div>
  );
}

export default MobileNavbar;
