"use client";
import React, { useEffect, useState } from "react";
import { SelectFilter } from ".";

const EnquireForm = () => {
  const [checkInDate, setCheckInDate] = useState("");
  const [checkOutDate, setCheckOutDate] = useState("");
  const [adults, setAdultsValue] = useState(4);
  const [kids, setKidsValue] = useState(2);
  const [phone, setPhone] = useState("");
  const [name, setName] = useState("");
  const [guestCount, setGuestCount] = useState("");
  const [submitted, setSubmitted] = useState(false);

  const handleSubmit = (e: any) => {
    e.preventDefault();
    let data = {
      checkInDate,
      checkOutDate,
      phone,
      name,
      hotel: "Silvio Villa",
      guestCount,
      type: "enquire"
    };
    console.log(data);
    console.log("Sending");
    fetch("/api/contact", {
      method: "POST",
      headers: {
        Accept: "application/json, text/plain, */*",
        "Content-Type": "application/json",
      },
      body: JSON.stringify(data),
    }).then((res) => {
      console.log("Response received");
      if (res.status === 200) {
        console.log("Response succeeded!");
        setDefaultDates();
        setName("");
        setPhone("");
      }
    });
  };

  const padTo2Digits = (num: number) => {
    return num.toString().padStart(2, "0");
  };

  const formatDate = (date: Date = new Date()) => {
    return [
      date.getFullYear(),
      padTo2Digits(date.getMonth() + 1),
      padTo2Digits(date.getDate()),
    ].join("-");
  };

  const setDefaultDates = () => {
    const today = new Date();
    today.setDate(today.getDate() + 1);
    setCheckInDate(formatDate(today));
    today.setDate(today.getDate() + 2);
    setCheckOutDate(formatDate(today));
  };

  useEffect(() => {
    setDefaultDates();
  }, []);

  return (
    <div className="mt-4 hidden xl:block ">
      <div
        className="max-w-md bg-white p-6  dark:bg-neutral-700"
        style={{ boxShadow: "0 0 6px 1px rgba(0,0,0,.07)" }}
      >
        <form id="equire-form" noValidate className="group">
          <header className="pb-2">
            <div className="">
              <div>
                <span className="text-xs text-black-300">Starts from </span>
                {/* <span className="line-through text-gray-500">₹ 42000</span> */}
              </div>
              <div>
                <span className="font-semibold">₹ 37000</span>
                <span className="text-xs text-gray-500"> / night</span>
              </div>
              <div className="text-xs text-gray-500">*EXCLUSIVE OF TAXES</div>
            </div>
          </header>
          <div className="grid md:grid-cols-2 md:gap-6 mt-4">
            <div className="relative z-0 w-full mb-6 group ">
              <input
                type="date"
                name="floating_check_in"
                id="floating_check_in"
                className="block py-2.5 px-0 w-full text-sm text-gray-900 bg-transparent border-0 border-b-2 border-gray-300 appearance-none dark:text-white dark:border-gray-600 dark:focus:border-blue-500 focus:outline-none focus:ring-0 focus:border-blue-600 peer"
                placeholder=" "
                value={checkInDate}
                onChange={(e) => setCheckInDate(e.target.value)}
                required
              />
              <label
                htmlFor="floating_check_in"
                className="peer-focus:font-medium absolute text-sm text-gray-500 dark:text-gray-400 duration-300 transform -translate-y-6 scale-75 top-3 -z-10 origin-[0] peer-focus:left-0 peer-focus:text-blue-600 peer-focus:dark:text-blue-500 peer-placeholder-shown:scale-100 peer-placeholder-shown:translate-y-0 peer-focus:scale-75 peer-focus:-translate-y-6 after:content-['*'] after:ml-0.5 after:text-red-500"
              >
                Check In
              </label>
            </div>
            <div className="relative z-0 w-full mb-6 group">
              <input
                type="date"
                name="floating_check_out"
                id="floating_check_out"
                className="block py-2.5 px-0 w-full text-sm text-gray-900 bg-transparent border-0 border-b-2 border-gray-300 appearance-none dark:text-white dark:border-gray-600 dark:focus:border-blue-500 focus:outline-none focus:ring-0 invalid:[&:not(:placeholder-shown):not(:focus)]:border-red-600  peer"
                placeholder=" "
                value={checkOutDate}
                onChange={(e) => setCheckOutDate(e.target.value)}
                required
              />
              <label
                htmlFor="floating_check_out"
                className="peer-focus:font-medium absolute text-sm text-gray-500 dark:text-gray-400 duration-300 transform -translate-y-6 scale-75 top-3 -z-10 origin-[0] peer-focus:left-0 peer-focus:text-blue-600 peer-focus:dark:text-blue-500 peer-placeholder-shown:scale-100 peer-placeholder-shown:translate-y-0 peer-focus:scale-75 peer-focus:-translate-y-6 after:content-['*'] after:ml-0.5 after:text-red-500"
              >
                Check out
              </label>
            </div>
          </div>
          <div className="z-0 w-80 mb-6 group text-sm p-2 border-b-2 border-gray-300">
            <SelectFilter adults={adults} kids={kids} onValueChange={setGuestCount}/>
          </div>
          <div className="grid md:gap-6">
            <div className="relative z-0 w-full mb-6 group">
              <input
                type="text"
                name="floating_first_name"
                id="floating_first_name"
                minLength={3}
                className="block py-2.5 px-0 w-full text-sm text-gray-900 bg-transparent border-0 border-b-2 border-gray-300 appearance-none dark:text-white dark:border-gray-600 dark:focus:border-blue-500  invalid:[&:not(:placeholder-shown):not(:focus)]:border-red-600 focus:outline-none focus:ring-0 focus:border-blue-600 peer valid:border-lime-500"
                placeholder=" "
                value={name}
                required
                onChange={(e) => {
                  setName(e.target.value);
                }}
              />
              <span className="mt-2 hidden text-sm text-red-500 peer-[&:not(:placeholder-shown):not(:focus):invalid]:block">
                Your full name should at least have 3 letters
              </span>
              <label
                htmlFor="floating_first_name"
                className="peer-focus:font-medium absolute text-sm text-gray-500 dark:text-gray-400 duration-300 transform -translate-y-6 scale-75 top-3 -z-10 origin-[0] peer-focus:left-0 peer-focus:text-blue-600 peer-focus:dark:text-blue-500 peer-placeholder-shown:scale-100 peer-placeholder-shown:translate-y-0 peer-focus:scale-75 peer-focus:-translate-y-6 after:content-['*'] after:ml-0.5 after:text-red-500 peer-focus:invalid:border-red-600 "
              >
                Full Name (min 3 letters)
              </label>
            </div>
          </div>
          <div className="relative z-0 w-full mb-6 group">
            <input
              type="tel"
              name="floating_phone"
              id="floating_phone"
              pattern="[0-9]{10}"
              maxLength={10}
              className="block py-2.5 px-0 w-full text-sm text-gray-900 bg-transparent border-0 border-b-2 border-gray-300 appearance-none dark:text-white dark:border-gray-600 dark:focus:border-blue-500 focus:outline-none invalid:[&:not(:placeholder-shown):not(:focus)]:border-red-600  valid:border-lime-500 focus:ring-0 focus:border-blue-600 peer"
              placeholder=""
              value={phone}
              required
              onChange={(e) => {
                setPhone(e.target.value);
              }}
            />
            <span className="mt-2 hidden text-sm text-red-500 peer-[&:not(:placeholder-shown):not(:focus):invalid]:block">
              Your mobile number should be 10 digit only
            </span>

            <label
              htmlFor="floating_email"
              className="peer-focus:font-medium absolute text-sm text-gray-500 dark:text-gray-400 duration-300 transform -translate-y-6 scale-75 top-3 -z-10 origin-[0] peer-focus:left-0 peer-focus:text-blue-600 peer-focus:dark:text-blue-500 peer-placeholder-shown:scale-100 peer-placeholder-shown:translate-y-0 peer-focus:scale-75 peer-focus:-translate-y-6 after:content-['*'] after:ml-0.5 after:text-red-500"
            >
              Mobile No. (10 digit)
            </label>
          </div>
          <button
            type="button"
            className="text-white uppercase bg-teal-500 hover:bg-teal-800 focus:ring-4 focus:outline-none focus:ring-teal-300 font-medium text-sm w-full px-5 py-2.5 text-center dark:bg-teal-600 dark:hover:bg-teal-500 dark:focus:ring-teal-800 group-invalid:pointer-events-none group-invalid:opacity-50"
            onClick={handleSubmit}
          >
            Submit
          </button>
        </form>
      </div>
    </div>
  );
};

export default EnquireForm;
