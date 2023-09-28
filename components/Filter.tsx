import { DatePickerFilter } from ".";

const Filter = () => {
  return (
    <div
      className="hidden sm:block "
      style={{
        backgroundImage: 'url("/bg-coco.png")',
        backgroundPosition: "top center",
        backgroundSize: "cover",
        height: "200px",
      }}
    >
      <div className="grid grid-cols-5 px-10 lg:px-32 2xl:96 py-20">
        <div className="border p-5 bg-white rounded-l-lg">Goa</div>
        <div className="border p-5 bg-white"><DatePickerFilter options={{title: "Check-In"}}/></div>
        <div className="border p-5 bg-white"><DatePickerFilter options={{title: "Check-Out"}}/></div>
        <div className="border p-5  bg-white ">Select guests</div>
        <div className="w-full rounded-r-lg focus:outline-none text-white bg-red-700 hover:bg-red-800 focus:ring-4 focus:ring-red-300  text-xl p-5 text-center cursor-pointer dark:bg-red-600 dark:hover:bg-red-700 dark:focus:ring-red-900 font-dancing-script font-semibold align-middle">
          Search
        </div>
      </div>
    </div>
  );
};

export default Filter;
