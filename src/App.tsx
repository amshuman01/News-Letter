import React from 'react';
import logo from './logo.svg';
import Landing from './Page/Landing';
// import './App.css';
import Styles from './App.module.css';

function App() {
  return (
    <div className={Styles.body}>
      <Landing></Landing>
    </div>
  );
}

export default App;
