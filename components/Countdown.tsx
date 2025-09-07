
import React, { useState, useEffect } from 'react';

interface CountdownTimerProps {
  targetDate: string;
}

interface TimeLeft {
  days: number;
  hours: number;
  minutes: number;
  seconds: number;
}

const calculateTimeLeft = (targetDate: string): TimeLeft | null => {
  const difference = +new Date(targetDate) - +new Date();
  if (difference <= 0) {
    return null;
  }

  return {
    days: Math.floor(difference / (1000 * 60 * 60 * 24)),
    hours: Math.floor((difference / (1000 * 60 * 60)) % 24),
    minutes: Math.floor((difference / 1000 / 60) % 60),
    seconds: Math.floor((difference / 1000) % 60),
  };
};

const TimerBox: React.FC<{ value: number; label: string }> = ({ value, label }) => (
    <div className="flex flex-col items-center justify-center bg-white/20 backdrop-blur-sm rounded-lg w-24 h-24 p-2">
        <span className="font-playfair text-4xl">{String(value).padStart(2, '0')}</span>
        <span className="font-lato text-sm uppercase tracking-wider">{label}</span>
    </div>
);


export const CountdownTimer: React.FC<CountdownTimerProps> = ({ targetDate }) => {
  const [timeLeft, setTimeLeft] = useState<TimeLeft | null>(calculateTimeLeft(targetDate));

  useEffect(() => {
    const timer = setInterval(() => {
      setTimeLeft(calculateTimeLeft(targetDate));
    }, 1000);

    return () => clearInterval(timer);
  }, [targetDate]);

  if (!timeLeft) {
    return <div className="font-playfair text-2xl p-4 bg-white/20 rounded-lg">The special day has arrived!</div>;
  }

  return (
    <div className="flex gap-4 md:gap-8">
      <TimerBox value={timeLeft.days} label="Days" />
      <TimerBox value={timeLeft.hours} label="Hours" />
      <TimerBox value={timeLeft.minutes} label="Minutes" />
      <TimerBox value={timeLeft.seconds} label="Seconds" />
    </div>
  );
};
