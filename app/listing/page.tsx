import { Card } from "@/components";

export default function listing() {
  return (
    <div>
      <div className="hidden md:block" style={{
        backgroundImage: 'url("/bg-coco.png")',
        backgroundPosition: "top center",
        backgroundSize: "cover",
        height: "200px",
      }}>
        <div className="grid grid-cols-5 px-32 py-20">
          <div className="border p-5 bg-white rounded-l-lg">Goa</div>
          <div className="border p-5 bg-white">Check In Date</div>
          <div className="border p-5 bg-white">Check Out Date</div>
          <div className="border p-5 bg-white">Select guests</div>
          <div className="w-1/2 rounded-r-lg focus:outline-none text-white bg-red-700 hover:bg-red-800 focus:ring-4 focus:ring-red-300  text-xl p-5 text-center cursor-pointer dark:bg-red-600 dark:hover:bg-red-700 dark:focus:ring-red-900 font-dancing-script font-semibold">Search
          </div>
        </div>
      </div>
      <div className="grid grid-cols-3 gap-1 ">
        <div className="col-span-2 p-4 m-auto">
          <Card></Card>
          <Card></Card>
        </div>
        <div className="sm:hidden md:block">
      
        </div>
      </div>
    </div>
  );
}
