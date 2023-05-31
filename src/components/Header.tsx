import React from 'react';
import Style from '../styles/Style.module.css';

export const Header = () => {
  return (
    <div className={`${Style.orange} ${Style.header}`}>
      <div className={Style.title} onClick={() => window.location.reload()}>
        Hacker News
      </div>
    </div>
  );
};
