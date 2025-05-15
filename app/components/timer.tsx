"use client";
// import frame from "@/public/images/flower.png";
// import Image from "next/image";
import { useState, useEffect } from "react";

export default function Timer() {
  const [timeLeft, setTimeLeft] = useState<{
    months: number;
    days: number;
    hours: number;
    minutes: number;
    seconds: number;
  }>({
    months: 0,
    days: 0,
    hours: 0,
    minutes: 0,
    seconds: 0,
  });

  useEffect(() => {
    const targetDate = new Date("2025-05-22");

    const calculateTimeLeft = () => {
      const difference = targetDate.getTime() - Date.now();
      const days = Math.floor(difference / (1000 * 60 * 60 * 24));
      const hours = Math.floor(
        (difference % (1000 * 60 * 60 * 24)) / (1000 * 60 * 60)
      );
      const minutes = Math.floor((difference % (1000 * 60 * 60)) / (1000 * 60));
      const seconds = Math.floor((difference % (1000 * 60)) / 1000);

      setTimeLeft({
        months: 0,
        days,
        hours,
        minutes,
        seconds,
      });
    };

    const interval = setInterval(() => {
      calculateTimeLeft();
    }, 1000);

    return () => clearInterval(interval);
  }, []);

  return (
    <div className="w-full mx-auto rounded text-base bg-black text-white p-4 flex justify-center items-center gap-x-3">
      {/* <TimerItem
        timer={timeLeft.months}
        value={timeLeft.months == 1 ? "Month" : "Months"}
      /> */}
    {/* <hr className="border-r border-white w-5 rotate-z-90"/> */}
      <TimerItem
        timer={timeLeft.days}
        value={timeLeft.days == 1 ? "Day" : "Days"}
      />
      <span className="border-1  h-8 border-white"></span>
      <TimerItem
        timer={timeLeft.hours}
        value={timeLeft.hours == 1 ? "Hour" : "Hours"}
      />
      <span className="border-1  h-8 border-white"></span>
      <TimerItem
        timer={timeLeft.minutes}
        value={timeLeft.minutes == 1 ? "Minute" : "Minutes"}
      />
      <span className="border-1  h-8 border-white"></span>
      <TimerItem
        timer={timeLeft.seconds}
        value={timeLeft.seconds == 1 ? "Second" : "Seconds"}
      />
    </div>
  );
}

function TimerItem({ timer, value }: { timer: any; value: string }) {
  return (
    // <div className="">
      <div className="w-full flex justify-center items-center gap-x-1">
        <div className="">
          {timer}
        </div>
        <div className="text-sm ">{value}</div>
      </div>
    // </div>
  );
}
