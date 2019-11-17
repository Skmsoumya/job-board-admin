import React from 'react';
import CssBaseline from '@material-ui/core/CssBaseline';


import CommonButton from './small-components/common-button/common-button';
import './App.css';

function App() {
  return (
    <div className="App">
      <React.Fragment>
        <CssBaseline />
        
        <CommonButton >Special Button</CommonButton>
        <CommonButton  type="large">Special Button</CommonButton>
        <CommonButton  type="extra_large">Special Button</CommonButton>

        <CommonButton  type="lite">Special Button</CommonButton>
        <CommonButton  type="lite_large">Special Button</CommonButton>
        <CommonButton  type="lite_extra_large">Special Button</CommonButton>

        <CommonButton  type="primary">Special Button</CommonButton>
        <CommonButton  type="primary_large">Special Button</CommonButton>
        <CommonButton  type="primary_extra_large">Special Button</CommonButton>

      </React.Fragment>
    </div>
  );
}

export default App;
