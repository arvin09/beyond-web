import React from "react";
import Image from "next/image";
import { LockClosedIcon, MusicalNoteIcon, PuzzlePieceIcon, TrashIcon, UserGroupIcon, WifiIcon, CalendarDaysIcon, FireIcon } from "@heroicons/react/24/outline";
import { Carousal, EnquireForm } from "@/app/components";

const details = () => {
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
                <span className="mr-2 mt-1">
                  <Image
                    src="/bread-slice.svg"
                    alt=""
                    width={16}
                    height={16}
                  />
                </span>
                <span>Complimentary Breakfast</span>
              </li>
              <li className="flex justify-start">
                <span className="p-1 mr-2"><WifiIcon className="h-4 w-4 text-black" /></span>
                <span>Unlimited WiFi</span>
              </li>
              <li className="flex justify-start">
                <span className="mr-2 mt-1">
                  <Image
                    src="/swimmer.svg"
                    alt=""
                    width={16}
                    height={16}
                  />
                </span>
                <span>Private Pool</span>
              </li>

            </ul>
            <div className="flex justify-start w-full pl-4">
              <span className="py-1 pr-2"><CalendarDaysIcon className="h-4 w-4 text-black" /></span>
              <span >Check In - 2 PM | Check Out - 11 AM</span>
            </div>
          </div>
          {/* Bedroom Details */}
          <Carousal />
          {/* House Activities  */}
          <div className="py-3 border-b">
            <h1 className="text-2xl">In House Activities</h1>
            <ul className="grid grid-cols-2 gap-8 px-4 py-6 lg:py-8 md:grid-cols-4">

              <li className="flex justify-start">
                <span><PuzzlePieceIcon className="h-6 w-6 text-black border border-gray-950 rounded-3xl p-1 mr-2"  /></span>
                <span>Board Games</span>
              </li>
              <li className="flex justify-start">
                <span><MusicalNoteIcon className="h-6 w-6 text-black border border-gray-950 rounded-3xl p-1 mr-2"  /></span>
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
                <span >
                  <Image
                  className="p-1 border border-gray-950 rounded-3xl mr-2"
                    src="/bed-alt.svg"
                    alt=""
                    width={26}
                    height={26}
                  />
                </span>
                <span>Sheets & Towels</span>
              </li>
              <li className="flex justify-start">
                <span className=""><TrashIcon className="h-6 w-6 text-black border border-gray-950 rounded-3xl p-1 mr-2" /></span>
                <span>House Keeping</span>
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
              <span className=""><FireIcon className="h-6 w-6 text-black border border-gray-950 rounded-3xl p-1 mr-2" /></span>
                <span>Coffee Machine</span>
              </li>
              <li className="flex justify-start">
                <span className="border border-gray-950 rounded-3xl p-1 mr-2"><UserGroupIcon className="h-4 w-4 text-black" /></span>
                <span>Caretaker</span>
              </li>
              <li className="flex justify-start">
                <span className="p-1 border border-gray-950 rounded-3xl mr-2">
                  <Image
                    src="/soap.svg"
                    alt=""
                    width={16}
                    height={16}
                  />
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
