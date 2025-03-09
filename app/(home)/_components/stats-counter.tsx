"use client";

import CountUp from "react-countup";

interface StatCounterProps {
  value: number;
  label: string;
}

export const StatCounter = ({ value, label }: StatCounterProps) => {
  return (
    <div className="w-full md:w-1/4 flex flex-col items-center justify-center min-h-[9em]">
      <div className="text-center md:text-left">
        <h2 className="text-4xl md:text-3xl lg:text-4xl font-bold text-white">
          <CountUp end={value} duration={2} />
          <span>+</span>
        </h2>
        <span className="-mt-1 text-[#FF7389]">{label}</span>
      </div>
    </div>
  );
};
