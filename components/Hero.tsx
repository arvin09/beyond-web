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
            href= "#"
            className="inline-block rounded bg-teal-500 px-6 pb-2 pt-2.5 text-xs font-medium uppercase leading-normal text-white shadow-[0_4px_9px_-4px_#3b71ca] transition duration-150 ease-in-out hover:bg-primary-600 hover:shadow-[0_8px_9px_-4px_rgba(59,113,202,0.3),0_4px_18px_0_rgba(59,113,202,0.2)] focus:bg-primary-600 focus:shadow-[0_8px_9px_-4px_rgba(59,113,202,0.3),0_4px_18px_0_rgba(59,113,202,0.2)] focus:outline-none focus:ring-0 active:bg-primary-700 active:shadow-[0_8px_9px_-4px_rgba(59,113,202,0.3),0_4px_18px_0_rgba(59,113,202,0.2)] dark:shadow-[0_4px_9px_-4px_rgba(59,113,202,0.5)] dark:hover:shadow-[0_8px_9px_-4px_rgba(59,113,202,0.2),0_4px_18px_0_rgba(59,113,202,0.1)] dark:focus:shadow-[0_8px_9px_-4px_rgba(59,113,202,0.2),0_4px_18px_0_rgba(59,113,202,0.1)] dark:active:shadow-[0_8px_9px_-4px_rgba(59,113,202,0.2),0_4px_18px_0_rgba(59,113,202,0.1)]"
          >
            Book now
          </Link>
        </div>
      </div>
    </section>
  );
};

export default Hero;
