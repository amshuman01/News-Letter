import { type } from 'os';
import React from 'react';
import { BASEurl } from '../utils/links';

type apiData = {}[];

// const fetchNews = async (id: number) => {
//   const res = await fetch(`${BASEurl}/item/${id}.json`);
//   const data = await res.json();
//   // console.log(data);
//   return data;
// };

const sliceData = (arr: []) => {
  return arr.slice(0, 20);
};

export const getData = async (url: string) => {
  try {
    const res = await fetch(url);
    let data = await res.json();
    if (data.length > 20) {
      data = sliceData(data);
    }

    return data;
  } catch (error) {
    console.log(`Issue with API ${error}`);
  }
};
