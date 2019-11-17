import React from 'react';

import "./AdminDashboard.css";
import CommonButton from '../small-components/CommonButton/CommonButton';


// Button has a special style. "primary"

function AdminDashboard(props) {
  return (
        <div>
            <h2>Admin Dashboard</h2>
            <div>
                <CommonButton>View Jobs To Moderate</CommonButton>
                <CommonButton>View All Jobs</CommonButton>
                <CommonButton>See All Refund Requests</CommonButton>
                <CommonButton>Add New Job Post</CommonButton>
            </div>
        </div>
  );
}

export default AdminDashboard;
