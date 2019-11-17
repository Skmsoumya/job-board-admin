import React from 'react';
import CssBaseline from '@material-ui/core/CssBaseline';
import MenuRounded from '@material-ui/icons/MenuRounded';
import CloseRounded from '@material-ui/icons/CloseRounded';


import './App.css';
import AppHeader from './small-components/AppHeader/AppHeader';
import CommonButton from './small-components/CommonButton/CommonButton';
import MobileNavbar from './small-components/MobileNavbar/MobileNavbar';
import AdminLoginHolder from './AdminLoginHolder/AdminLoginHolder';

function App() {
  return (
    <div className="App">
      <React.Fragment>
        <CssBaseline />


        <AppHeader  logoLink="/logo192.png" 
                    brandName="Remote Jobs"
                    mobileNav={
                      <CommonButton className="mobileNavButton">
                        <MenuRounded></MenuRounded>
                      </CommonButton>
                    }>

          <CommonButton type="lite">Login</CommonButton>
        </AppHeader>

        <AdminLoginHolder></AdminLoginHolder>

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
