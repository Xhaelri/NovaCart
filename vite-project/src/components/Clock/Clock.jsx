import React, { useEffect, useState, useRef } from "react";

function Clock() {
  const [days, setDays] = useState(0);
  const [hours, setHours] = useState(0);
  const [minutes, setMinutes] = useState(0);
  const [seconds, setSeconds] = useState(0);
  const [isTimeUp, setIsTimeUp] = useState(false);

  // Use useRef to store the interval ID for proper cleanup
  const intervalRef = useRef(null);

  const countDown = () => {
    const destination = new Date("Jul 1, 2025").getTime();

    intervalRef.current = setInterval(() => {
      const now = new Date().getTime();
      const difference = destination - now;

      if (difference < 0) {
        clearInterval(intervalRef.current);
        setIsTimeUp(true);
        setDays(0);
        setHours(0);
        setMinutes(0);
        setSeconds(0);
      } else {
        const calculatedDays = Math.floor(difference / (1000 * 60 * 60 * 24));
        const calculatedHours = Math.floor(
          (difference % (1000 * 60 * 60 * 24)) / (1000 * 60 * 60)
        );
        const calculatedMinutes = Math.floor(
          (difference % (1000 * 60 * 60)) / (1000 * 60)
        );
        const calculatedSeconds = Math.floor((difference % (1000 * 60)) / 1000);

        setDays(calculatedDays);
        setHours(calculatedHours);
        setMinutes(calculatedMinutes);
        setSeconds(calculatedSeconds);
      }
    }, 1000); 
  };

  useEffect(() => {
    countDown();

    return () => {
      if (intervalRef.current) {
        clearInterval(intervalRef.current);
      }
    };
  }, []);

  return (
    <div className="w-60 flex flex-row justify-between items-center text-black">
      {isTimeUp ? (
        <h1 className="text-lg font-bold">Time's Up!</h1>
      ) : (
        <>
          <div className="flex flex-col items-center">
            <h1 className="text-2xl font-bold">{days}</h1>
            <span className="text-xs">Days</span>
          </div>
          <span>:</span>
          <div className="flex flex-col items-center">
            <h1 className="text-2xl font-bold">{hours}</h1>
            <span className="text-xs">Hours</span>
          </div>
          <span>:</span>
          <div className="flex flex-col items-center">
            <h1 className="text-2xl font-bold">{minutes}</h1>
            <span className="text-xs">Minutes</span>
          </div>
          <span>:</span>
          <div className="flex flex-col items-center">
            <h1 className="text-2xl font-bold">{seconds}</h1>
            <span className="text-xs">Seconds</span>
          </div>
        </>
      )}
    </div>
  );
}

export default Clock;
