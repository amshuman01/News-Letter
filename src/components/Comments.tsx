import React from 'react';

const Comments = ({ kids }: any) => {
  const numKids = kids ? kids.length : 0;
  return <span>{numKids} comments</span>;
};

export default Comments;
