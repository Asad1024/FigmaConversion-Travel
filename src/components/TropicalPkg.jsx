import img1 from "../assets/holiday1.jpg";
import { AiOutlineArrowRight } from "react-icons/ai";

const TropicalPkg = () => {
  return (
    <div className="flex items-center flex-col p-16">
      <h1 className="font-bold text-2xl mb-14">
        Voyahhs Best Topical Packages
      </h1>
      <div>
        <div className="flex">
          <div className="relative">
            <img style={{ width: "80%", height: "400px" }} src={img1} alt="" />
            <div className="absolute right-24 inset-0 flex flex-col items-center justify-center text-center">
              <p className="text-orange-700 shadow-white tracking-wider text-2xl font-bold">International</p>
              <button className="mt-4 bg-teal-500 text-white px-4 py-2 rounded-md text-sm font-medium flex items-center justify-center">
                <span>Explore Now</span>
                <AiOutlineArrowRight className="ml-3" />
              </button>
            </div>
          </div>

          <div className="relative">
            <img style={{ width: "80%", height: "400px" }} src={img1} alt="" />
            <div className="absolute right-24 inset-0 flex flex-col items-center justify-center text-center">
              <p className="text-orange-700 shadow-white tracking-wider text-2xl font-bold">Domestic</p>
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
