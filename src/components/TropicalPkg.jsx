import img1 from "../assets/tropical1.png";
import img2 from "../assets/tropical2.png";

import { AiOutlineArrowRight } from "react-icons/ai";

const TropicalPkg = () => {
  return (
    <div className="flex items-center flex-col mt-10">
      <h1 className="font-bold text-3xl mx-12 mb-14">
        Voyahhs Best Topical Packages
      </h1>
      <div>
        <div className="flex flex-col md:flex-row">
          <div className="relative">
            <img src={img1} alt="" className="w-[675px] h-[450px]" />
            <div className="absolute top-6 inset-0 flex flex-col items-center justify-center text-center">
              <p className="text-orange-400 shadow-white tracking-wider text-3xl font-bold">International</p>
              <button className="mt-4 bg-teal-500 text-white px-4 py-2 rounded-md text-sm font-medium flex items-center justify-center">
                <span>Explore Now</span>
                <AiOutlineArrowRight className="ml-3" />
              </button>
            </div>
          </div>
          <div className="relative">
            <img  src={img2} alt="" className="w-[675px] h-[450px]" />
            <div className="absolute top-6 inset-0 flex flex-col items-center justify-center text-center">
              <p className="text-orange-400 shadow-white tracking-wider text-3xl font-bold">Domestic</p>
              <button className="mt-4 bg-teal-500 text-white px-4 py-2 rounded-md text-sm font-medium flex items-center justify-center">
                <span>Explore Now</span>
                <AiOutlineArrowRight className="ml-3" />
              </button>
            </div>
          </div>
        </div>
      </div>
    </div>
  );
};

export default TropicalPkg;
