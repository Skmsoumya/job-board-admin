import React from 'react';
import CssBaseline from '@material-ui/core/CssBaseline';
import MenuRounded from '@material-ui/icons/MenuRounded';
import CloseRounded from '@material-ui/icons/CloseRounded';


import './App.css';
import AppHeader from './small-components/AppHeader/AppHeader';
import CommonButton from './small-components/CommonButton/CommonButton';
import MobileNavbar from './small-components/MobileNavbar/MobileNavbar';
import AdminLoginHolder from './AdminLoginHolder/AdminLoginHolder';
import AdminDashboard from './AdminDashboard/AdminDashboard';
import AppContent from './AppContent/AppContent';

import AdminJobsToModerate from './AdminJobsToModerate/AdminJobsToModerate';

function App() {

  let jobsToModerate = [
    {
      company: {
        companyLogo: "/logo192.png",
        companyName: "Super Company",
      },
      jobTitle: "Senior React Developer",
      jobType: "Fulltime",
      timeOverlap: "5 hours",
      jobPostDate: "15th November 2019",
      _jobId: "1"
    },
    {
      company: {
        companyLogo: "/logo192.png",
        companyName: "Super Company",
      },
      jobTitle: "Senior React Developer",
      jobType: "Fulltime",
      timeOverlap: "5 hours",
      jobPostDate: "15th November 2019",
      _jobId: "2"
    },
    {
      company: {
        companyLogo: "/logo192.png",
        companyName: "Super Company",
      },
      jobTitle: "Senior React Developer",
      jobType: "Fulltime",
      timeOverlap: "5 hours",
      jobPostDate: "15th November 2019",
      _jobId: "3"
    },
    {
      company: {
        companyLogo: "/logo192.png",
        companyName: "Super Company",
      },
      jobTitle: "Senior React Developer",
      jobType: "Fulltime",
      timeOverlap: "5 hours",
      jobPostDate: "15th November 2019",
      _jobId: "4"
    },
  ];


  return (
    <div className="App">
      <React.Fragment>
        <CssBaseline />


        <AppHeader  className="appHeader"
                    logoLink="/logo192.png" 
                    brandName="Remote Jobs"
                    mobileNav={
                      <CommonButton className="mobileNavButton">
                        <MenuRounded></MenuRounded>
                      </CommonButton>
                    }>

          <CommonButton type="lite">Login</CommonButton>
        </AppHeader>
        
        <AppContent>
          {/* <AdminLoginHolder></AdminLoginHolder> */}
          {/* <AdminDashboard></AdminDashboard> */}

          <AdminJobsToModerate jobs={jobsToModerate}></AdminJobsToModerate>
        </AppContent>
        


        {/* <MobileNavbar 
          moblileNavCloseBtn={
            <CommonButton className="mobileNavButton">
              <CloseRounded></CloseRounded>
            </CommonButton>
          }
        >
          <CommonButton type="lite" className="navbarButtons">Login</CommonButton>
          <CommonButton type="lite" className="navbarButtons">Admin Dashboard</CommonButton>
          <CommonButton type="lite" className="navbarButtons">Privacy</CommonButton>
        </MobileNavbar> */}
      </React.Fragment>
    </div>
  );
}

export default App;
