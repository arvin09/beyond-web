import Link from "next/link";
import React from "react";

const Hero = () => {
  return (
    <section
      id="banner-0"
      data-text-color="#111827"
      className="flex-shrink-0 flex relative z-10 items-center"
      style={{ minHeight: "calc(100vh - 90px)" }}
    >
      <div className="absolute inset-0 pointer-events-none">
        <div
          className="absolute inset-0 z-10"
          style={{ backgroundColor: "rgb(252, 250, 246)", opacity: 0.5 }}
        ></div>
        <div
          className="absolute inset-0 z-0"
          style={{
            backgroundImage: 'url("/hero.jfif")',
            backgroundPosition: "center center",
            backgroundSize: "cover",
          }}
        ></div>
      </div>
      <div className="relative z-10 container mx-auto px-6 pt-12 lg:pt-40 pb-12 lg:pb-40">
        <div className="max-w-3xl text-left ml-0 mr-auto">
          <h2 className="lg:text-7xl text-5xl mb-6 break-word text-left font-dancing-script">
            Experience Luxurious Villa Living
          </h2>
          <p className="body-large md:text-2xl font-quicksand mb-8">
            Indulge in the ultimate vacation experience at our exquisite villas
            in Goa.
          </p>

          <Link
            href= "listing"
            className="text-white bg-teal-500 hover:bg-teal-800 focus:ring-4 uppercase focus:outline-none focus:ring-teal-300 font-medium text-sm w-full sm:w-auto px-5 py-2.5 text-center dark:bg-teal-600 dark:hover:bg-teal-500 dark:focus:ring-teal-800"
          >
            Book now
          </Link>
        </div>
      </div>
    </section>
  );
};

export default Hero;
