import {AiOutlineLeft, AiOutlineRight, AiOutlineArrowRight} from "react-icons/ai"


const Home = () => {
  return (
    <div className="flex flex-col gap-5 p-5 md:p-20">
      <h1 className="font-bold text-orange-500 text-lg md:text-3xl shadow-white ">One of the best travel partner</h1>
      <h1 className="font-bold text-black shadow-white text-xl md:text-5xl ">Let’s Leave The Road <br/> And Take <span className="font-bold text-orange-500 text-2xl md:text-6xl">The Trails</span> </h1>
      <span className="flex items-center justify-center bg-teal-500 max-w-[100px] md:max-w-[150px] p-2 md:p-4 text-white rounded-lg text-sm font-medium"><span className="flex mr-3">Let Go</span><AiOutlineArrowRight/> </span>
      <div className="flex items-center gap-4 hidden md:flex">
        <span className="bg-orange-500 p-3 text-lg text-white font-semibold"><AiOutlineLeft/></span>
        <span className="bg-orange-500 p-3 text-lg text-white font-semibold"><AiOutlineRight/></span>
      </div>
    </div>
  );
};

export default Home;
