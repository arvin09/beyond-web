'use client'
import Image from 'next/image'
import React from 'react'
import { ChevronLeftIcon, ChevronRightIcon } from "@heroicons/react/24/solid";

const Carousal = () => {

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
    <div className="py-3 border-b">
    <div className="pb-2 flex justify-between">
      <div className="text-2xl ">Bedroom Details</div>
      <div className="text-lg">
        <button id="prev"
          className="mr-8 shadow-lg rounded-3xl bg-teal-500 p-2 hover:bg-teal-800"
          onClick={() => handleNavClick("prev")}
        >
          <ChevronLeftIcon
            title="Previous"
            className="h-5 w-5 text-white"
          />
        </button>
        <button id="next"
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
  )
}

export default Carousal