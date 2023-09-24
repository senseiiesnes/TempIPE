// src/DigitalClock.js

import React, { useState, useEffect } from 'react';

function DigitalClock() {
  const [time, setTime] = useState(new Date());

  useEffect(() => {
    const intervalId = setInterval(() => {
      setTime(new Date());
    }, 1000);

    return () => {
      clearInterval(intervalId);
    };
  }, []);

  const formattedTime = time.toLocaleTimeString();

  return (
    <div className="digital-clock">
      <h1>Digital Clock</h1>
      <h1>{formattedTime}</h1>
    </div>
  );
}

export default DigitalClock;
