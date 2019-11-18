import React from 'react';

import "./MultipleCardsRenderer.css";
import JobCard from "../JobCard/JobCard";

// Button has a special style. "primary"

function MultipleCardsRenderer(props) {
  return (
        <div className="MultipleCardsRenderer">
            {
                props.jobs ? 
                props.jobs.map(job => {
                    console.log("here");
                    return (
                        <JobCard    key={job._jobId}
                                    companyImage={job.company.companyLogo}
                                    companyName={job.company.companyName}
                                    jobTitle={job.jobTitle}
                                    jobType={job.jobType}
                                    timeOverlap={job.timeOverlap}
                                    jobPostDate={job.jobPostDate}
                        ></JobCard>);
                }) :
                <h3>{props.noJobPresentMessage}</h3>
            }
        </div>
  );
}

export default MultipleCardsRenderer;
