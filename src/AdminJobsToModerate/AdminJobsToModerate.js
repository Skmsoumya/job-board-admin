import React from 'react';
import Paper from '@material-ui/core/Paper';

import "./AdminJobsToModerate.css";
import MultipleCardsRenderer from '../small-components/MultipleCardsRenderer/MultipleCardsRenderer';

// Button has a special style. "primary"

function AdminJobsToModerate(props) {
  return (
        <div className="adminModerateJobsPage">
            <Paper  className="contentPaper"
                    elevation={0}
                    square
            >
                <h2>New Jobs To Moderate</h2>
            </Paper>

            <Paper  className="contentPaper"
                    elevation={0}
                    square
            >
                <MultipleCardsRenderer  noJobPresentMessage="No Jobs to moderate." 
                                        jobs={props.jobs}
                ></MultipleCardsRenderer>
            </Paper>
            
        </div>
  );
}

export default AdminJobsToModerate;
