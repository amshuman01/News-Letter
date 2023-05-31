import React from 'react';
import { Header } from '../components/Header';
import Footer from '../components/Footer';
import { NewsContent } from '../components/NewsContent';
import Styles from '../App.module.css';
const Landing = () => {
  return (
    <div className={Styles.container}>
      <Header />
      <NewsContent />
      <Footer />
    </div>
  );
};

export default Landing;
