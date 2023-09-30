'use client'
import { CalendarIcon, ChevronDownIcon } from "@heroicons/react/24/solid";
import React, { useState, useRef, useEffect } from "react";
import Datepicker from "tailwind-datepicker-react";

type DatePickerFilterProps = {
    placeholder: string,
    options?: Object
}

const DatePickerFilter = ({placeholder, options}: DatePickerFilterProps) => {
  const [show, setShow] = useState<boolean>(false);
  const [selectedDate, setSelectedDate] = useState<Date>();
  const InputRef = useRef<HTMLInputElement>(null);
  const DatePickerRef = useRef<HTMLDivElement>(null);

  const handleChange = (selectedDate: Date) => {
    setSelectedDate(selectedDate);
  };
  const handleClose = (state: boolean) => {
    setShow(state);
  };
  useEffect(() => {
    const handleClickOutside = (event: MouseEvent) => {
      if (!(InputRef?.current && DatePickerRef?.current)) return;
      if (
        !InputRef.current.contains(event.target as Node) &&
        !DatePickerRef.current.contains(event.target as Node)
      ) {
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
  }, [DatePickerRef, InputRef, setShow]);
  return (
    <div
      className="relative cursor-pointer"
      onClick={() => setShow(true)}
      ref={DatePickerRef}
    >
      <Datepicker
        options={options}
        onChange={handleChange}
        show={show}
        setShow={handleClose}
      >
        <div className="flex">
          <div className="">
            <CalendarIcon className="h-6 w-6" />
          </div>
          <input
            ref={InputRef}
            type="text"
            className="text-md border-0 font-quicksand pointer-events-none pl-2 p-0 w-[170px]"
            placeholder={placeholder}
            value={selectedDate?.toLocaleDateString("en-GB")}
            onFocus={() => setShow(true)}
            readOnly
          />
          <div className="pt-1"><ChevronDownIcon className="h-4 w-4 "/></div>
        </div>
      </Datepicker>
    </div>
  );
};

export default DatePickerFilter;
