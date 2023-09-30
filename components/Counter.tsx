"use client";
import { MinusCircleIcon, PlusCircleIcon } from "@heroicons/react/24/outline";
import React, { useEffect, useState } from "react";
type CounterProps = {
  min?: number;
  max?: number;
  onChangeValue: any;
};
const Counter = ({ min = 0, max = 20, onChangeValue }: CounterProps) => {
  const [count, setCount] = useState(0);

  useEffect(()=> {
    onChangeValue(count);
  },[count])

  const handleCount = (e: any) => {
    const { id } = e.target;
    if (id === "add") {
      if (count < max) {
        setCount(count + 1);
      }
    }

    if (id === "remove") {
      if (count > min) {
        setCount(count - 1);
      }
    }
  };

  return (
    <div className="flex justify-center">
      <div className="px-2 cursor-pointer hover:bg-gray-300">
        <MinusCircleIcon
          id="remove"
          className="w-5 h-5 "
          onClick={handleCount}
        />
      </div>
      <div className="px-2 w-10 text-center">{count}</div>
      <div className="px-2 cursor-pointer hover:bg-gray-300">
        <PlusCircleIcon id="add" className="w-5 h-5" onClick={handleCount} />
      </div>
    </div>
  );
};

export default Counter;
