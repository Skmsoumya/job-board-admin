import React from 'react';
import Paper from '@material-ui/core/Paper';

import "./JobCard.css";


function JobCard(props) {
  return (
    <Paper  className="jobWideCard"
            elevation={0}
            square
    >
        <div className="companyIdentity">
            {
                props.companyImage && 
                <div className="companyLogoHolder">
                    <img    className="companyImage"
                            src={props.companyImage} 
                            alt={`${props.companyName ? props.companyName : "company"}'s Logo`}></img>
                </div>
            }
            
        </div>


        <div className="CompanyDetailsHolder">
            <p className="companyName non_bold">{props.companyName}</p>
            <div className="titleAndDetailsHolder">
                <h4 className="jobTitle">{props.jobTitle}</h4>
                <div className="PostAdditionalAction">
                    <span className="additionalDetailsHolder dateHolder">
                        {props.jobPostDate}
                    </span>
                    <span className="additionalDetailsHolder newTag">
                        <span>New</span>
                    </span>
                </div>
            </div>
            
            <div className="JobAdditionalDetails">
                <p>{props.jobType}</p> 
                <p>{`${props.timeOverlap} overlap`}</p>
            </div>
        </div>
        
    </Paper>
  );
}

export default JobCard;
