"use client";
import { MinusCircleIcon, PlusCircleIcon } from "@heroicons/react/24/outline";
import React, { forwardRef, useImperativeHandle, useState } from "react";
type CounterProps = {
  min?: number;
  max?: number;
  value?: number;
  onChangeValue: any;
};

/* eslint-disable react/display-name */
const Counter = forwardRef(
  ({ min = 0, max = 20, value = 0, onChangeValue }: CounterProps, ref) => {
    const [count, setCount] = useState(value);

    useImperativeHandle(ref, () => ({
      resetCounter(val:number) {
        setCount(val);
        onChangeValue(val);
      },
    }));

    const handleCount = (e: any) => {
      const { id } = e.target;
      if (id === "add") {
        if (count < max) {
          setCount(count + 1);
          onChangeValue(count + 1);
        }
      }

      if (id === "remove") {
        if (count > min) {
          setCount(count - 1);
          onChangeValue(count - 1);
        }
      }
    };

    return (
      <div className="flex justify-center">
        <div
          className="px-2 cursor-pointer hover:bg-gray-300"
          onClick={handleCount}
        >
          <MinusCircleIcon id="remove" className="w-5 h-5 " />
        </div>
        <div className="px-2 w-10 text-center">{count}</div>
        <div
          className="px-2 cursor-pointer hover:bg-gray-300"
          onClick={handleCount}
        >
          <PlusCircleIcon id="add" className="w-5 h-5" />
        </div>
      </div>
    );
  }
);

export default Counter;
