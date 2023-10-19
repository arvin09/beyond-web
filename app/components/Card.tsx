import Image from "next/image";
import Link from "next/link";
import React from "react";

interface InfraDetails {
  guest: number,
  bedroom: number,
  bathroom: number,
  pool: number
}
interface CardProps {
  image: string,
  details: {
    id: string,
    name: string,
    location: string,
    infra: InfraDetails,
    ratePerNight: number,
    discount: number,
  }
}

const Card = ({details, image} : CardProps) => {
  return (
    <div className="p-4">
      <div
        className="flex flex-col bg-white border border-gray-200 rounded-lg shadow md:flex-row max-w-4xl"
      >
        <Image
          className="object-cover rounded-t-lg md:h-64 md:rounded-none md:rounded-all p-4 w-full md:w-2/5"
          src={`/${image}`}
          width={300}
          height={256}
          alt=""
        />
        <div className="w-full flex flex-col justify-start p-4 leading-normal">
          <div className="mb-2 text-2xl font-bold tracking-tight text-gray-600 dark:text-white">
          {details.name}
          </div>
          <div className="">{details.location}</div>
          <div className="flex text-xs">
            <div className="border-r-2 pr-1">Up to {details.infra.guest}</div>
            <div className="border-r-2 px-1">{details.infra.bedroom} Bedroom</div>
            <div className="border-r-2 px-1">{details.infra.bathroom} Bathroom</div>
            <div className="pl-1">{details.infra.pool} Pool</div>
          </div>
          <div className="mb-3 mt-12 text-black border-t-2 pt-2 md:border-t-0 sm: dark:text-gray-400 md:text-lg  flex justify-between items-end">
            <div className="">
              <div>
                <span className="text-xs text-black-300">Starts from </span>
                {/* <span className="line-through text-gray-500">₹ 42000</span> */}
              </div>
              <div>
                <span className="font-semibold">{details.ratePerNight}</span>
                <span className="text-xs text-gray-500"> / night</span>
              </div>
              <div className="text-xs text-gray-500">*EXCLUSIVE OF TAXES</div>
            </div>
            <div className="text-red-600 text-right pt-2">
              <Link
                href="/details"
                className="text-red-700 uppercase hover:text-white border border-red-700 hover:bg-red-800 focus:ring-4 focus:outline-none focus:ring-red-300 font-medium rounded-lg text-sm px-5 py-2.5 text-center dark:border-red-500 dark:text-red-500 dark:hover:text-white dark:hover:bg-red-600 dark:focus:ring-red-900"
              >
                View Details
              </Link>
            </div>
          </div>
        </div>
      </div>
    </div>
  );
};

export default Card;
