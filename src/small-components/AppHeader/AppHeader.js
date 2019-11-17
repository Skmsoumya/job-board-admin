import React from 'react';

import "./AppHeader.css";


// Button has a special style. "primary"

function AppHeader(props) {
  return (
    <header>
        <span className="brandInfo">
            <a href={props.headerLogoLink ? props.headerLogoLink : "/" }>
                <span className="brandLogoImage">
                    <img src={props.logoLink} alt="Brand Logo"></img>
                </span>
                <h2 className="brandNameHolder non_bold desktop">
                    {props.brandName}
                </h2>
            </a>
        </span>

        <span className="linksHolder desktop">
            {props.children}
        </span>

        <span className="linksHolder mobile">
            {props.mobileNav}
        </span>
    </header>
  );
}

export default AppHeader;
