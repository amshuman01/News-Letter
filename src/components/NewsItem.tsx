import React, { useEffect, useState } from 'react';
import { BASEurl } from '../utils/links';
import { getData } from '../api/fetchData';
import Styles from '../styles/Style.module.css';
import Spinner from '../styles/Spinner.module.css';
import SpinnerLoader from './SpinnerLoader';
import TimeDifference from './TimeConverter';
import Comments from './Comments';

type NewsItemParams = {
  item: number;
  // handler: () => void;
  index: number;
  // last: boolean;
  length: number;
};

type ItemData = {
  title: string;
  score: number;
  by: string;
  time: number;
  kids: number[];
  url: string;
};

const url = `${BASEurl}`;

export const NewsItem = ({ item, index, length }: NewsItemParams) => {
  const [itemData, setItemData] = useState<ItemData>({} as ItemData);
  const [loading, setLoading] = useState(true);

  const handleSpinner = () => {
    setLoading(false);
  };

  useEffect(() => {
    getData(`${BASEurl}/item/${item}.json`).then((newsData: any) => {
      setItemData(newsData);

      handleSpinner();
    });
  }, []);
  console.log(itemData);

  return (
    <div>
      {loading ? (
        <SpinnerLoader />
      ) : (
        <div>
          <span>{index + 1}. </span>
          <span className={Styles.triangle}></span>
          <a href={itemData.url} className={Styles.link}>
            {itemData.title}
          </a>
          <div className={Styles.newsAdditional}>
            <span>
              {itemData.score} points by {itemData.by}
            </span>
            <TimeDifference unixTime={itemData.time} />
            <span> | </span>
            <span>hide | </span>
            <Comments kids={itemData.kids}></Comments>
          </div>
        </div>
      )}
    </div>
  );
};
