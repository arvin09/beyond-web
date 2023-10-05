"use client";
import React from "react";
import Image from "next/image";
import { ChevronLeftIcon, ChevronRightIcon } from "@heroicons/react/24/solid";
import { LockClosedIcon, MusicalNoteIcon, PuzzlePieceIcon,  TrashIcon, UserGroupIcon, WifiIcon} from "@heroicons/react/24/outline";
import { BreadSlice, Swimmer, CalendarCheck, Soap, MugHotAlt, Bed } from "react-flaticons";
import { EnquireForm } from "@/components";

const details = () => {
  const handleNavClick = (button: string) => {
    const carousal = document.querySelector(".carousal");
    const images = document.querySelectorAll(".carousal .card-container");
    const scrollWidth = images[0].clientWidth + 50;

    if (carousal) {
      if (button === "next") {
        carousal.scrollLeft += scrollWidth;
      } else {
        carousal.scrollLeft -= scrollWidth;
      }
    }
  };

  return (
    <div>
      <div
        className="banner"
        style={{
          backgroundImage: 'url("/hero.jfif")',
          backgroundPosition: "center center",
          backgroundSize: "cover",
          width: "100%",
          height: "350px",
        }}
      ></div>
      <div className="flex flex-wrap justify-around">
        <div className="p-4 w-full xl:w-2/3">
          <div className="border-b">
            <h1 className="font-semibold font-quicksand text-3xl">
              Silvio Villa
            </h1>
            <div className="text-sm">Assagaon, Goa, India</div>
            <div className="flex text-md py-3 border-b">
              <div className="border-r-2 pr-2">Up to 8 guest</div>
              <div className="border-r-2 px-2">3 Bedroom</div>
              <div className="border-r-2 px-2">3 Bathroom</div>
              <div className="pl-2">1 Pool</div>
            </div>
          </div>
          {/* House Activities  */}
          <div className="py-3 border-b">
            <ul className="grid grid-cols-2 gap-8 px-4 py-6 lg:py-8 md:grid-cols-3">
              
              <li className="flex justify-start">
                <span className="p-1 mr-2"><BreadSlice  size='16px' color="gray" /></span>
                <span>Complimentary Breakfast</span>
              </li>
              <li className="flex justify-start">
                <span className="p-1 mr-2"><WifiIcon className="h-4 w-4 text-black" /></span>
                <span>Unlimited WiFi</span>
              </li>
              <li className="flex justify-start">
                <span className="p-1 mr-2"><Swimmer size='16px' color="gray" /></span>
                <span>Private Pool</span>
              </li>
              <li className="flex justify-start w-full">
                <span className="p-1 mr-2"><CalendarCheck size='16px' color="gray" /></span>
                <span className="absolute pl-8">Check In - 2 PM | Check Out - 11 AM</span>
              </li>
            </ul>
          </div>
          {/* Bedroom Details */}
          <div className="py-3 border-b">
            <div className="pb-2 flex justify-between">
              <div className="text-2xl ">Bedroom Details</div>
              <div className="text-lg">
                <button
                  className="mr-8 shadow-lg rounded-3xl bg-teal-500 p-2 hover:bg-teal-800"
                  onClick={() => handleNavClick("prev")}
                >
                  <ChevronLeftIcon
                    title="Previous"
                    className="h-5 w-5 text-white"
                  />
                </button>
                <button
                  className="shadow-lg rounded-3xl bg-teal-500 p-2 hover:bg-teal-800"
                  onClick={() => handleNavClick("next")}
                >
                  <ChevronRightIcon title="Next" className="h-5 w-5 text-white">
                    Next
                  </ChevronRightIcon>
                </button>
              </div>
            </div>
            <div className="flex justify-between overflow-x-hidden gap-4 scroll-smooth carousal">
              <div className="card-container bg-white border border-gray-200 rounded-lg shadow-lg md:basis-1/3 shrink-0">
                <Image
                  className="object-cover rounded-t-lg md:h-64 md:rounded-none md:rounded-all p-4 w-full"
                  src="/hero.jfif"
                  width={0}
                  height={0}
                  sizes="100vw"
                  //   style={{ width: '100%', height: 'auto' }} // optional
                  alt=""
                />
              </div>
              <div className="card-container bg-white border border-gray-200 rounded-lg shadow-lg md:basis-1/3 shrink-0">
                <Image
                  className="object-cover rounded-t-lg md:h-64 md:rounded-none md:rounded-all p-4 w-full"
                  src="/hero.jfif"
                  width={0}
                  height={0}
                  sizes="100vw"
                  alt=""
                />
              </div>
              <div className="card-container bg-white border border-gray-200 rounded-lg shadow-lg md:basis-1/3 shrink-0">
                <Image
                  className="object-cover rounded-t-lg md:h-64 md:rounded-none md:rounded-all p-4 w-full"
                  src="/hero.jfif"
                  width={0}
                  height={0}
                  sizes="100vw"
                  alt=""
                />
              </div>
              <div className="card-container bg-white border border-gray-200 rounded-lg shadow-lg md:basis-1/3 shrink-0">
                <Image
                  className="object-cover rounded-t-lg md:h-64 md:rounded-none md:rounded-all p-4 w-full"
                  src="/hero.jfif"
                  width={0}
                  height={0}
                  sizes="100vw"
                  alt=""
                />
              </div>
            </div>
          </div>
          {/* House Activities  */}
          <div className="py-3 border-b">
            <h1 className="text-2xl">In House Activities</h1>
            <ul className="grid grid-cols-2 gap-8 px-4 py-6 lg:py-8 md:grid-cols-4">
              
              <li className="flex justify-start">
                <span className="border border-gray-950 rounded-3xl p-1 mr-2"><PuzzlePieceIcon className="h-4 w-4 text-black" /></span>
                <span>Board Games</span>
              </li>
              <li className="flex justify-start">
                <span className="border border-gray-950 rounded-3xl p-1 mr-2"><MusicalNoteIcon className="h-4 w-4 text-black" /></span>
                <span>Music Player</span>
              </li>
              <li className="flex justify-start">
                <span className="mr-2">
                    <Image 
                     src="/oven.svg" 
                     alt=""
                     width={26}
                     height={26}
                    />
                </span>
                <span>Oven</span>
              </li>
              <li className="flex justify-start">
                <span className="border border-gray-950 rounded-3xl p-1 mr-2"><LockClosedIcon className="h-4 w-4 text-black" /></span>
                <span>Security</span>
              </li>
              <li className="flex justify-start">
              <span className="border border-gray-950 rounded-3xl p-1 mr-2">
                    <Bed  size='16px' color="gray" />
                </span>
                <span>Sheets & Towels</span>
              </li>
              <li className="flex justify-start">
                <span className="border border-gray-950 rounded-3xl p-1 mr-2"><TrashIcon className="h-4 w-4 text-black" /></span>
                <span>Housekeeping</span>
              </li>
              <li className="flex justify-start">
                <span className="mr-2">
                    <Image 
                     src="/gas-hob.svg" 
                     alt=""
                     width={26}
                     height={26}
                    />
                </span>
                <span>Gas Hob</span>
              </li>
              <li className="flex justify-start">
              <span className="border border-gray-950 rounded-3xl p-1 mr-2">
                    <MugHotAlt  size='16px' color="gray" />
                </span>
                <span>Coffee Machine</span>
              </li>
              <li className="flex justify-start">
                <span className="border border-gray-950 rounded-3xl p-1 mr-2"><UserGroupIcon className="h-4 w-4 text-black" /></span>
                <span>Caretaker</span>
              </li>
              <li className="flex justify-start">
                <span className="border border-gray-950 rounded-3xl p-1 mr-2">
                    <Soap  size='16px' color="gray" />
                </span>
                <span>Toiletries</span>
              </li>

            </ul>
          </div>
          {/* House Policy */}
          <div className="py-3 border-b">
            <h1 className="text-2xl pb-2">House rules</h1>
            <ul className="text-sm">
              <li className="pl-4 py-1.5 -indent-4 before:contents before:content-['-'] tracking-wide">
                &nbsp;&nbsp;Lost and found items are held for 14 days while we
                attempt to contact the guest. If guest contact information is
                incorrect or cell phone mailbox is full and we are unable to
                contact the guest during the 14-day holding period, the
                unclaimed item(s) are thrown away, given to local organisations,
                or disposed of as deemed fit by the management.
              </li>
              <li className="pl-4 py-1.5 -indent-4 before:contents before:content-['-'] tracking-wide">
                &nbsp;&nbsp;Our staff would be happy to purchase any additional
                items that guests may need
              </li>
              <li className="pl-4 py-1.5 -indent-4 before:contents before:content-['-'] tracking-wide   ">
                &nbsp;&nbsp;Breakfast is complimentary
              </li>
              <li className="pl-4 py-1.5 -indent-4 before:contents before:content-['-'] tracking-wide   ">
                &nbsp;&nbsp;Check-in time will be 02:00 pm on the arrival date
                and check-out time will be 11.00 am on the departure date.
                Requests for early check-in or late check-out would be subject
                to availability and at the discretion of Goabeyond Stays, with
                additional charges.
              </li>
              <li className="pl-4 py-1.5 -indent-4 before:contents before:content-['-'] tracking-wide   ">
                &nbsp;&nbsp;Access to the kitchen is on prior request only and
                as per discretion of Goabeyond stays
              </li>
              <li className="pl-4 py-1.5 -indent-4 before:contents before:content-['-'] tracking-wide   ">
                &nbsp;&nbsp;Guests are kindly advised that stag bookings are not
                permitted at this property.
              </li>
            </ul>
          </div>
          {/* Cancellation Policy */}
          <div className="py-3">
            <h1 className="text-2xl pb-2">Cancellation policy</h1>
            <ul className="text-sm">
              <li className="pl-4 py-1 -indent-4 before:contents before:content-['-'] tracking-wide">
                &nbsp;&nbsp;For cancellations made up to 15 days prior to the
                check-in date, 80%* of the booking amount will be refunded via
                the original payment mode or 100% in the form of a future credit
                note, which can be redeemed at the originally booked Goabeyond
                Villa.
              </li>
              <li className="pl-4 py-1.5 -indent-4 before:contents before:content-['-'] tracking-wide">
                &nbsp;&nbsp;For cancellations made 8-14 days prior to the
                check-in date, 50%* of the booking amount will be refunded.
              </li>
              <li className="pl-4 py-1.5 -indent-4 before:contents before:content-['-'] tracking-wide   ">
                &nbsp;&nbsp;For cancellations made within 7 days prior to the
                check-in date, the booking amount will be non-refundable
              </li>
              <li className="pl-4 py-1.5 -indent-4 before:contents before:content-['-'] tracking-wide   ">
                &nbsp;&nbsp;Standard Cancellation Policy does not apply to peak
                or blackout dates. Refunds are only available if 100% payment
                has been made. Partial payments are non-refundable.
              </li>
              <li className="pl-4 py-1.5 -indent-4 before:contents before:content-['-'] tracking-wide   ">
                &nbsp;&nbsp;For additional information please refer to our Terms
                and Conditions
              </li>
              <li className="pl-4 py-1.5 -indent-4 before:contents before:content-['-'] tracking-wide   ">
                &nbsp;&nbsp;Guests are kindly advised that stag bookings are not
                permitted at this property.
              </li>
            </ul>
          </div>
        </div>
        {/* Enquire form */}
        <EnquireForm />
      </div>
    </div>
  );
};

export default details;
