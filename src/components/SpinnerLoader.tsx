import React from 'react';
import Spinner from '../styles/Spinner.module.css';

const SpinnerLoader = () => {
  return (
    <div className={Spinner.spinnerContainer}>
      <div className={Spinner.spinner}></div>
    </div>
  );
};

export default SpinnerLoader;
