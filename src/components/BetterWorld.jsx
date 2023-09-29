import { AiOutlineLeft, AiOutlineRight } from "react-icons/ai";
import img1 from "../assets/bWorld1.png";
import img2 from "../assets/bWorld2.png";
import img3 from "../assets/bWorld3.png";
import img4 from "../assets/bWorld4.png";

const BetterWorld = () => {
  return (
    <div className="flex p-5 md:p-20 flex-col">
      <div className=" flex items-center justify-between">
        <div>
          <h1 className="font-bold text-3xl">Slow down to see World</h1>
          <p className="max-w-md mx-auto text-sm font-semibold mt-2">
            Lorem ipsum dolor, sit amet consectetur adipisicing elit. Eos sunt
            quod eveniet consequuntur, unde officia aspernatur.
          </p>
        </div>
        <div className="hidden md:flex items-center gap-4 ">
          <span className="bg-orange-200 p-3 text-lg text-white font-semibold">
            <AiOutlineLeft />
          </span>
          <span className="bg-orange-500 p-3 text-lg text-white font-semibold">
            <AiOutlineRight />
          </span>
        </div>
      </div>
      <div className="flex flex-col md:flex-row justify-between items-center gap-10 mt-7">
        <div className="relative">
          <img src={img1} alt="" className="w-64 h-80 sm:w-full sm:h-full" />
          <p className="flex flex-col items-center absolute bottom-0 left-20 text-white font-bold p-2">
           <span className="opacity-60 text-lg">Explore</span>
           <span className="text-xl">Maldives</span>
          </p>
        </div>
        <div className="relative">
        <img src={img2} alt="" className="w-64 h-80 sm:w-full sm:h-full" />
          <p className="flex flex-col items-center absolute bottom-0 left-20 text-white font-bold p-2">
          <span className="opacity-60 text-lg">Explore</span>
           <span className="text-xl">Dubai</span>
          </p>
        </div>
        <div className="relative">
        <img src={img3} alt="" className="w-64 h-80 sm:w-full sm:h-full" />
          <p className="flex flex-col items-center absolute bottom-0 left-20 text-white font-bold p-2">
          <span className="opacity-60 text-lg">Explore</span>
           <span className="text-xl">Bali</span>
          </p>
        </div>
        <div className="relative">
        <img src={img4} alt="" className="w-64 h-80 sm:w-full sm:h-full" />
          <p className="flex flex-col items-center absolute bottom-0 left-20 text-white font-bold p-2">
          <span className="opacity-60 text-lg">Explore</span>
           <span className="text-xl">Thailand</span>
          </p>
        </div>
      </div>
    </div>
  );
};

export default BetterWorld;
