"use client";

import Link from "next/link";
import React, { useEffect, useState } from "react";

interface TimerProps {
  targetDate: string; // The target date in ISO format, e.g., "2024-12-31T23:59:59Z"
}

interface TimeBoxProps {
  label: string;
  value: number;
}

const TimeBox = ({ label, value }: TimeBoxProps) => {
  return (
    <div className="flex flex-col items-center justify-center p-3 sm:p-4 gap-2 rounded-lg">
      <span className="text-3xl font-bold text-black">{value}</span>
      <span className="text-sm text-grey_dark">{label}</span>
    </div>
  );
};

export const Timer = ({ targetDate }: TimerProps) => {
  const [timeLeft, setTimeLeft] = useState({
    days: 0,
    hours: 0,
    minutes: 0,
    seconds: 0,
  });

  useEffect(() => {
    const interval = setInterval(() => {
      const now = new Date().getTime();
      const countdownTime = new Date(targetDate).getTime();
      const difference = countdownTime - now;

      if (difference > 0) {
        const days = Math.floor(difference / (1000 * 60 * 60 * 24));
        const hours = Math.floor(
          (difference % (1000 * 60 * 60 * 24)) / (1000 * 60 * 60)
        );
        const minutes = Math.floor(
          (difference % (1000 * 60 * 60)) / (1000 * 60)
        );
        const seconds = Math.floor((difference % (1000 * 60)) / 1000);

        setTimeLeft({ days, hours, minutes, seconds });
      } else {
        clearInterval(interval); // Stop the timer when it reaches the target date
      }
    }, 1000);

    return () => clearInterval(interval); // Clean up the interval on component unmount
  }, [targetDate]);

  return (
    <section className="w-full bg-[#ffe8e8] rounded-[30px]">
      <div className="w-[90%] xl:w-[85%] mx-auto flex flex-col py-10 md:py-6">
        <div className="w-full flex flex-col md:flex-row items-center justify-center md:justify-around gap-4">
          <p className="text-red-500 font-bold text-md">
            Registration Deadline:
          </p>

          <div className="flex md:space-x-4 text-center text-white">
            <TimeBox label="Days" value={timeLeft.days} />
            <TimeBox label="Hours" value={timeLeft.hours} />
            <TimeBox label="Minutes" value={timeLeft.minutes} />
            <TimeBox label="Seconds" value={timeLeft.seconds} />
          </div>

          <Link
            href="register"
            className="text-[14px] bg-white hover:bg-primary_blue text-primary_blue hover:text-white font-bold duration-500 rounded-[30px] px-16 md:px-6 lg:px-16 py-4"
          >
            Enroll Now
          </Link>
        </div>
      </div>
    </section>
  );
};
