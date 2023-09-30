"use client";
import React, { useEffect, useRef, useState } from "react";
import { Counter } from ".";
import { ChevronDownIcon } from "@heroicons/react/24/solid";
type SelectFilterProps = {
  placeHolder?: string;
};

const SelectFilter = ({}: SelectFilterProps) => {
  const [show, setShow] = useState(false);
  const [adult, setAdultValue] = useState(0);
  const [kid, setKidValue] = useState(0);
  const InputRef = useRef<HTMLDivElement>(null);

  useEffect(() => {
    const handleClickOutside = (event: MouseEvent) => {
      if (!InputRef?.current) return;
      if (!InputRef.current.contains(event.target as Node)) {
        setShow(false);
      }
    };

    document.addEventListener("mousedown", (event) =>
      handleClickOutside(event)
    );

    return () => {
      document.removeEventListener("mousedown", (event) =>
        handleClickOutside(event)
      );
    };
  }, [InputRef, setShow]);

  return (
    <div className=" relative">
      <div
        ref={InputRef}
        onClick={() => setShow(true)}
        className="cursor-pointer flex justify-between"
      >
        <div>{!adult && !kid ? "Select Guest" : `${adult} Adults, ${kid} Kids`}</div>
        <div className="pt-1"><ChevronDownIcon className="h-4 w-4"/></div>
      </div>
      <div className={show ? "block" : "hidden"}>
        <div
          ref={InputRef}
          className="flex-col absolute bg-white p-5 border border-gray-200 shadow-lg z-10 w-64 mt-6 -ml-5 rounded-b-lg"
        >
          <div className="flex border-b justify-between pb-2">
            <div className="font-semibold">Adults</div>
            <Counter onChangeValue={(val: number) => setAdultValue(val)} />
          </div>
          <div className="flex justify-between pt-2">
            <div className="font-semibold">Kids</div>
            <Counter onChangeValue={(val: number) => setKidValue(val)} />
          </div>
          <div className="text-[10px] text-gray-400 pointer-events-none">(Below the age of 5)</div>
          
        </div>
      </div>
    </div>
  );
};

export default SelectFilter;
