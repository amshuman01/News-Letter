import React, { useEffect, useState } from 'react';
import { getData } from '../api/fetchData';
import { BASEurl } from '../utils/links';
import { NewsItem } from './NewsItem';
import Spinner from '../styles/Spinner.module.css';
import Styles from '../styles/Style.module.css';

const url = `${BASEurl}/topstories.json`;

export const NewsContent = () => {
  const [News, setNews] = useState([]);
  // const [spinner, setSpinner] = useState(true);
  const [newsLength, setLength] = useState(0);
  useEffect(() => {
    getData(url).then((data: any) => {
      setNews(data);
      setLength(data.length);
      console.log(data);
    });
  }, []);

  const renderNews = News.map((ele: number, index, arr) => {
    return (
      <li key={index} className={Styles.newsItem}>
        <NewsItem
          item={ele}
          // handler={handleSpinner}
          index={index}
          length={newsLength}
        ></NewsItem>
      </li>
    );
  });

  return (
    <div className={Styles.contentContainer}>
      <ul className={Styles.list}>{renderNews}</ul>
    </div>
  );
};
