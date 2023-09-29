import {AiOutlineLeft, AiOutlineRight,} from "react-icons/ai"
import img1 from "../assets/essence1.png"
import img2 from "../assets/essence2.png"

const YourEssence = () => {
  return (
    <div className="flex p-6 md:p-20 flex-col">
        <div className=" flex items-center justify-between">
        <div>
            <h1 className="font-bold text-3xl">Choose Your Essence</h1>
            <p className="max-w-md mx-auto text-sm font-semibold mt-2">Lorem ipsum dolor, sit amet consectetur adipisicing elit. Eos sunt quod eveniet consequuntur, unde officia aspernatur.</p>
        </div>
        <div className="hidden md:block items-center gap-4">
        <span className="bg-orange-200 p-3 text-lg text-white font-semibold"><AiOutlineLeft/></span>
        <span className="bg-orange-500 p-3 text-lg text-white font-semibold"><AiOutlineRight/></span>
      </div>
        </div>
        <div className="flex flex-col md:flex-row items-center gap-10 mt-7">
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
           <span className="text-xl">Maldives</span>
          </p>
        </div>
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
           <span className="text-xl">Maldives</span>
          </p>
        </div>
</div>

    </div>
  )
}

export default YourEssence