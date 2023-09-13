import Image from "next/image";
import React from "react";

const Featured = () => {
  return (
    <section
      id="featured"
      className="relative z-10 flex flex-none flex-shrink-0 items-center"
      style={{background: "#f0fffa"}}
    >
      <div className="relative z-10 container mx-auto pt-16 pb-16 lg:pb-32">
        {/* Featured Title */}
        <h2 className="heading-large mb-6 text-center text-3xl font-dancing-script font-normal">
          Featured
        </h2>
        {/* Featured List */}
        <div className="grid-cols-1 sm:grid md:grid-cols-3 ">
          <div className="mx-3 mt-6 flex flex-col self-start rounded-lg bg-neutral-700 shadow-[0_2px_15px_-3px_rgba(0,0,0,0.07),0_10px_20px_-2px_rgba(0,0,0,0.04)] dark:bg-white sm:shrink-0 sm:grow sm:basis-0">
            <a href="#!">
              <Image
                className="rounded-t-lg"
                width={0}
                height={0}
                sizes="100vw"
                style={{ width: "100%", height: "250px" }} // optional
                src="/featured-1.jpg"
                alt="Hollywood Sign on The Hill"
              />
            </a>
            <div className="p-6">
              <h5 className="mb-2 text-2xl font-medium leading-tight text-neutral-800 font-dancing-script">
                Luxurious Accommodations
              </h5>
              <p className="mb-4 text-base text-neutral-400 font-quicksand">
                Experience the epitome of luxury with our exquisite villa
                rentals.
              </p>
              <button
                type="button"
                className="inline-block rounded bg-teal-500 px-6 pb-2 pt-2.5 text-xs font-medium uppercase leading-normal text-white shadow-[0_4px_9px_-4px_#3b71ca] transition duration-150 ease-in-out hover:bg-primary-600 hover:shadow-[0_8px_9px_-4px_rgba(59,113,202,0.3),0_4px_18px_0_rgba(59,113,202,0.2)] focus:bg-primary-600 focus:shadow-[0_8px_9px_-4px_rgba(59,113,202,0.3),0_4px_18px_0_rgba(59,113,202,0.2)] focus:outline-none focus:ring-0 active:bg-primary-700 active:shadow-[0_8px_9px_-4px_rgba(59,113,202,0.3),0_4px_18px_0_rgba(59,113,202,0.2)] dark:shadow-[0_4px_9px_-4px_rgba(59,113,202,0.5)] dark:hover:shadow-[0_8px_9px_-4px_rgba(59,113,202,0.2),0_4px_18px_0_rgba(59,113,202,0.1)] dark:focus:shadow-[0_8px_9px_-4px_rgba(59,113,202,0.2),0_4px_18px_0_rgba(59,113,202,0.1)] dark:active:shadow-[0_8px_9px_-4px_rgba(59,113,202,0.2),0_4px_18px_0_rgba(59,113,202,0.1)]"
              >
                More Info
              </button>
            </div>
          </div>
          <div className="mx-3 mt-6 flex flex-col self-start rounded-lg bg-white shadow-[0_2px_15px_-3px_rgba(0,0,0,0.07),0_10px_20px_-2px_rgba(0,0,0,0.04)]  sm:shrink-0 sm:grow sm:basis-0">
            <a href="#!">
              <Image
                className="rounded-t-lg"
                src="/featured-2.jpg"
                width={0}
                height={0}
                sizes="100vw"
                style={{ width: "100%", height: "250px" }} // optional
                alt="Palm Springs Road"
              />
            </a>
            <div className="p-6">
              <h5 className="mb-2 text-2xl font-medium leading-tight text-neutral-800 font-dancing-script">
                Stunning Locations
              </h5>
              <p className="mb-4 text-base text-neutral-400">
                Discover breathtaking locations for your dream holiday getaway.
              </p>
              <button
                type="button"
                className="inline-block rounded bg-teal-500 px-6 pb-2 pt-2.5 text-xs font-medium uppercase leading-normal text-white shadow-[0_4px_9px_-4px_#3b71ca] transition duration-150 ease-in-out hover:bg-primary-600 hover:shadow-[0_8px_9px_-4px_rgba(59,113,202,0.3),0_4px_18px_0_rgba(59,113,202,0.2)] focus:bg-primary-600 focus:shadow-[0_8px_9px_-4px_rgba(59,113,202,0.3),0_4px_18px_0_rgba(59,113,202,0.2)] focus:outline-none focus:ring-0 active:bg-primary-700 active:shadow-[0_8px_9px_-4px_rgba(59,113,202,0.3),0_4px_18px_0_rgba(59,113,202,0.2)] dark:shadow-[0_4px_9px_-4px_rgba(59,113,202,0.5)] dark:hover:shadow-[0_8px_9px_-4px_rgba(59,113,202,0.2),0_4px_18px_0_rgba(59,113,202,0.1)] dark:focus:shadow-[0_8px_9px_-4px_rgba(59,113,202,0.2),0_4px_18px_0_rgba(59,113,202,0.1)] dark:active:shadow-[0_8px_9px_-4px_rgba(59,113,202,0.2),0_4px_18px_0_rgba(59,113,202,0.1)]"
              >
                More Info
              </button>
            </div>
          </div>
          <div className="mx-3 mt-6 flex flex-col self-start rounded-lg bg-white shadow-[0_2px_15px_-3px_rgba(0,0,0,0.07),0_10px_20px_-2px_rgba(0,0,0,0.04)]  sm:shrink-0 sm:grow sm:basis-0">
            <a href="#!">
              <Image
                className="rounded-t-lg"
                width={0}
                height={0}
                sizes="100vw"
                style={{ width: "100%", height: "250px" }} // optional
                src="/featured-3.jpeg"
                alt="Skyscrapers"
              />
            </a>
            <div className="p-6">
              <h5 className="mb-2 text-2xl font-medium leading-tight text-neutral-800 font-dancing-script">
                World-Class Amenities
              </h5>
              <p className="mb-4 text-base text-neutral-400 ">
                Indulge in top-notch amenities that cater to your every need.
                &nbsp;
              </p>
              <button
                type="button"
                className="inline-block rounded bg-teal-500 px-6 pb-2 pt-2.5 text-xs font-medium uppercase leading-normal text-white shadow-[0_4px_9px_-4px_#3b71ca] transition duration-150 ease-in-out hover:bg-primary-600 hover:shadow-[0_8px_9px_-4px_rgba(59,113,202,0.3),0_4px_18px_0_rgba(59,113,202,0.2)] focus:bg-primary-600 focus:shadow-[0_8px_9px_-4px_rgba(59,113,202,0.3),0_4px_18px_0_rgba(59,113,202,0.2)] focus:outline-none focus:ring-0 active:bg-primary-700 active:shadow-[0_8px_9px_-4px_rgba(59,113,202,0.3),0_4px_18px_0_rgba(59,113,202,0.2)] dark:shadow-[0_4px_9px_-4px_rgba(59,113,202,0.5)] dark:hover:shadow-[0_8px_9px_-4px_rgba(59,113,202,0.2),0_4px_18px_0_rgba(59,113,202,0.1)] dark:focus:shadow-[0_8px_9px_-4px_rgba(59,113,202,0.2),0_4px_18px_0_rgba(59,113,202,0.1)] dark:active:shadow-[0_8px_9px_-4px_rgba(59,113,202,0.2),0_4px_18px_0_rgba(59,113,202,0.1)]"
              >
                More Info
              </button>
            </div>
          </div>
        </div>
      </div>
    </section>
  );
};

export default Featured;
