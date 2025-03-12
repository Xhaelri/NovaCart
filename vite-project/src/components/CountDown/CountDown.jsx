import React, { useState, useEffect } from "react";

const CountdownTimer = ({ targetDate }) => {
  const calculateTimeLeft = () => {
    const difference = targetDate - new Date();
    if (difference <= 0) {
      return { days: 0, hours: 0, minutes: 0, seconds: 0 };
    }
    return {
      days: Math.floor(difference / (1000 * 60 * 60 * 24)),
      hours: Math.floor((difference / (1000 * 60 * 60)) % 24),
      minutes: Math.floor((difference / 1000 / 60) % 60),
      seconds: Math.floor((difference / 1000) % 60),
    };
  };

  const [timeLeft, setTimeLeft] = useState(calculateTimeLeft());

  useEffect(() => {
    const timer = setInterval(() => {
      setTimeLeft(calculateTimeLeft());
    }, 1000);
    return () => clearInterval(timer);
  }, []);

  return (
    <div className="flex items-center space-x-3 text-black">
      {Object.entries(timeLeft).map(([label, value], index, array) => (
        <div key={label} className="flex items-center">
          <div className="flex flex-col items-center">
            <span className="text-sm text-gray-500">{label}</span>
            <span className="text-3xl font-bold">
              {String(value).padStart(2, "0")}
            </span>
          </div>
          {index < array.length - 1 && (
            <span className="text-3xl pt-2 text-red-500 mx-2">:</span>
          )}
        </div>
      ))}
    </div>
  );
};

export default CountdownTimer;
