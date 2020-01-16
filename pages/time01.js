import React, { useState } from 'react';
import moment from 'moment';

const Time = () => {
  const [nowTime, setTime] = useState(Date.now());
  const changeTime = () => {
    setTime(moment(Date.now()).format());
  };
  return (
    <div>
      <div>现在的时间为:{nowTime}</div>
      <button onClick={changeTime}>Click Change Time!</button>  
    </div>
  );
};

export default Time;
