"use client";
import React, { forwardRef, useEffect, useImperativeHandle, useRef, useState } from "react";
import { Counter } from ".";
import { ChevronDownIcon } from "@heroicons/react/24/solid";

type SelectFilterProps = {
  placeHolder?: string;
  adults?: number;
  kids?: number;
  onValueChange?: any;
};

/* eslint-disable react/display-name */
const SelectFilter = forwardRef(({
  placeHolder = "Select Guests",
  adults,
  kids,
  onValueChange,
}: SelectFilterProps, ref) => {
  const [show, setShow] = useState(false);
  const [adult, setAdultValue] = useState(adults);
  const [kid, setKidValue] = useState(kids);
  const InputRef = useRef<HTMLDivElement>(null);
  const AdultCounterRef = useRef<any>(null);
  const KidCounterRef = useRef<any>(null);

  useImperativeHandle(ref, () => ({
    resetGuestFilter () {
        AdultCounterRef.current.resetCounter(adults);
        KidCounterRef.current.resetCounter(kids);
    }
  }));

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

  const updateData = (name: string, value: number) => {
    if (name == "Adults") {
      setAdultValue(value);
      onValueChange(`${value} Adults, ${kid} Kids`);
    } else {
      setKidValue(value);
      onValueChange(`${adult} Adults, ${value} Kids`);
    }
  };

  return (
    <div className=" relative">
      <div
        ref={InputRef}
        onClick={() => setShow(true)}
        className="cursor-pointer flex justify-between peer"
      >
        <div>
          {!adult && !kid ? placeHolder : `${adult} Adults, ${kid} Kids`}
        </div>
        <div className="pt-1">
          <ChevronDownIcon className="h-4 w-4" />
        </div>
      </div>
      <div className={show ? "block" : "hidden"}>
        <div
          ref={InputRef}
          className="flex-col absolute bg-white p-5 border border-gray-200 shadow-lg z-10 w-full mt-6  rounded-b-lg"
        >
          <div className="flex border-b justify-between pb-2">
            <div className="font-semibold">Adults</div>
            <Counter
              ref={AdultCounterRef}
              value={adult}
              onChangeValue={(val: number) => updateData("Adults", val)}
            />
          </div>
          <div className="flex justify-between pt-2">
            <div className="font-semibold">Kids</div>
            <Counter
              ref={KidCounterRef}
              value={kid}
              onChangeValue={(val: number) => updateData("Kids", val)}
            />
          </div>
          <div className="text-[10px] text-gray-400 pointer-events-none">
            (Below the age of 5)
          </div>
        </div>
      </div>
    </div>
  );
});

export default SelectFilter;
