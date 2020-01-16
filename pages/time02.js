import React, { useState } from 'react';

const Time = () => {
  const [nowTime, setTime] = useState(Date.now());
  const changeTime = async () => {
    const moment = await import('moment');
    setTime(moment.default(Date.now()).format());
  };
  return (
    <div>
      <span>现在的时间点:{nowTime}</span>
      <button onClick={changeTime}>Click Change Time!</button>  
    </div>
  );
};

export default Time;