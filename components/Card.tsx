import Image from 'next/image'
import React from 'react'

const Card = () => {
  return (
    <div className='pb-4'>
      <a
        href="#"
        className="flex flex-col bg-white border border-gray-200 rounded-lg shadow md:flex-row md:max-w-3xl hover:bg-gray-100 dark:border-gray-700 dark:bg-gray-800 dark:hover:bg-gray-700"
      >
        <Image
          className="object-cover rounded-t-lg h-60 md:h-64 w-30 md:rounded-none md:rounded-all p-4"
          src="/01-villa.jpeg"
          width={300}
          height={256}
          alt=""
        />
        <div className="flex flex-col justify-start p-4 leading-normal">
          <div className="mb-2 text-2xl font-bold tracking-tight text-gray-600 dark:text-white">
            Silvio Villa
          </div>
          <div className="">Assagaon, Goa, India</div>
          <div className="flex">
            <div className="">Upto 8 Guest |</div>
            <div className="pl-1">3 Bedroom |</div>
            <div className="pl-1">3 Bathroom |</div>
            <div className="pl-1">1 Pool</div>
          </div>
          <div className="mb-3 mt-4 font-normal text-gray-700 dark:text-gray-400">
            <div>Starts from ₹ 42000</div>
            <div>₹ 25000 / night</div>
            <div>View Details</div>
          </div>
        </div>
      </a>
    </div>
  )
}

export default Card