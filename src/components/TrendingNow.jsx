import { AiOutlineLeft, AiOutlineRight, AiOutlineArrowRight } from "react-icons/ai";
import img1 from "../assets/trending1.png"
import img2 from "../assets/trending2.png"
import img3 from "../assets/trending3.png"

const TrendingNow = () => {
  return (
    <div className="relative">
      {/* Zigzag background */}
      <div className=""></div>

      {/* Content */}
      <div className="flex p-8 md:p-20 flex-col relative z-10">
        <div className="flex items-center justify-between">
          <div>
            <h1 className="font-bold text-3xl">Our Top Picks</h1>
            <p className="max-w-md mx-auto text-sm font-semibold mt-2">
              Lorem ipsum dolor, sit amet consectetur adipisicing elit. Eos sunt
              quod eveniet consequuntur, unde officia aspernatur.
            </p>
          </div>
          <div className="hidden md:flex items-center gap-4">
            <span className="bg-orange-200 p-3 text-lg text-white font-semibold">
              <AiOutlineLeft />
            </span>
            <span className="bg-orange-500 p-3 text-lg text-white font-semibold">
              <AiOutlineRight />
            </span>
          </div>
        </div>
        <div className="flex flex-col md:flex-row items-center gap-10 mt-7">
          <div className="relative flex flex-col gap-3">
            <img  src={img1} alt="" className="w-64 h-60 sm:w-full sm:h-full" />
            <div className="mt-4">
              <h2 className=" text-xl font-bold">Evolve Back Corag</h2>
              <p className="text-orange-600 text-lg font-bold">
                2&nbsp;N&nbsp;&amp;&nbsp;3&nbsp;D | Adults
              </p>
            </div>
            <button className="w-full mt-4 bg-teal-500 text-white px-4 py-2 rounded-md text-sm font-medium flex items-center justify-center">
              <span>Explore Now</span>
              <AiOutlineArrowRight className="ml-3" />
            </button>
          </div>
          <div className="relative flex flex-col gap-3">
            <img  src={img2} alt="" className="w-64 h-60 sm:w-full sm:h-full" />
            <div className="mt-4">
              <h2 className=" text-xl font-bold">Evolve Back Corag</h2>
              <p className="text-orange-600 text-lg font-bold">
                2&nbsp;N&nbsp;&amp;&nbsp;3&nbsp;D | Adults
              </p>
            </div>
            <button className="w-full mt-4 bg-teal-500 text-white px-4 py-2 rounded-md text-sm font-medium flex items-center justify-center">
              <span>Explore Now</span>
              <AiOutlineArrowRight className="ml-3" />
            </button>
          </div>
          <div className="relative flex flex-col gap-3">
            <img  src={img3} alt="" className="w-64 h-60 sm:w-full sm:h-full" />

            <div className="mt-4">
              <h2 className=" text-xl font-bold">Evolve Back Corag</h2>
              <p className="text-orange-600 text-lg font-bold">
                2&nbsp;N&nbsp;&amp;&nbsp;3&nbsp;D | Adults
              </p>
            </div>
            <button className="w-full mt-4 bg-teal-500 text-white px-4 py-2 rounded-md text-sm font-medium flex items-center justify-center">
              <span>Explore Now</span>
              <AiOutlineArrowRight className="ml-3" />
            </button>
          </div>
          <div className="relative flex flex-col gap-3">
            <img  src={img1} alt="" className="w-64 h-60 sm:w-full sm:h-full" />

            <div className="mt-4">
              <h2 className=" text-xl font-bold">Evolve Back Corag</h2>
              <p className="text-orange-600 text-lg font-bold">
                2&nbsp;N&nbsp;&amp;&nbsp;3&nbsp;D | Adults
              </p>
            </div>
            <button className="w-full mt-4 bg-teal-500 text-white px-4 py-2 rounded-md text-sm font-medium flex items-center justify-center">
              <span>Explore Now</span>
              <AiOutlineArrowRight className="ml-3" />
            </button>
          </div>
        </div>
      </div>
    </div>
  );
};

export default TrendingNow;
