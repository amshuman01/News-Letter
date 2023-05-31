import React from 'react';

function TimeDifference({ unixTime }: any) {
  const getCurrentTime = () => Math.floor(Date.now() / 1000); // Get current Unix timestamp in seconds

  const calculateDifference = () => {
    const currentTime = getCurrentTime();
    const differenceInSeconds = currentTime - unixTime;
    const differenceInHours = Math.floor(differenceInSeconds / 3600); // Convert seconds to hours

    return differenceInHours;
  };

  const difference = calculateDifference();

  return <span> {difference} hours ago</span>;
}

export default TimeDifference;
