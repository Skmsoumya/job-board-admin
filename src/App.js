import React from 'react';
import CssBaseline from '@material-ui/core/CssBaseline';
import MenuRounded from '@material-ui/icons/MenuRounded';


import './App.css';
import AppHeader from './small-components/AppHeader/AppHeader';
import CommonButton from './small-components/CommonButton/CommonButton';

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

          <CommonButton type="lite">Find a remote job</CommonButton>
          <CommonButton type="lite">Categories</CommonButton>
          <CommonButton type="primary">Post a job</CommonButton>
        </AppHeader>
      </React.Fragment>
    </div>
  );
}

export default App;
