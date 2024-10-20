// components/IncrementingNumber.tsx
import React, { useEffect, useState } from "react";

interface IncrementingNumberProps {
  targetValue: number; // The value to reach
  duration?: number; // Optional duration for the increment effect
  showPercentage?: boolean; // Optional prop to determine if '%' should be shown
  showGreaterThan?: boolean; // Optional prop to determine if '>' should be shown
}

const IncrementingNumber: React.FC<IncrementingNumberProps> = ({
  targetValue,
  duration = 2000,
  showPercentage = false,
  showGreaterThan = false,
}) => {
  const [value, setValue] = useState<number>(0);

  useEffect(() => {
    let startValue = 0; // Starting value
    const endValue = targetValue; // Target value
    const incrementTime = Math.abs(Math.floor(duration / endValue)); // Time to increment each step

    const timer = setInterval(() => {
      if (startValue < endValue) {
        setValue((prev) => Math.min(prev + 1, endValue)); // Increment by 1
        startValue++;
      } else {
        clearInterval(timer); // Clear interval when target is reached
      }
    }, incrementTime);

    return () => clearInterval(timer); // Cleanup on component unmount
  }, [targetValue, duration]);

  return (
    <span>
      {showGreaterThan && value > 0 ? ">" : ""}
      {value}
      {showPercentage ? "%" : ""}
    </span>
  );
};

export default IncrementingNumber;
