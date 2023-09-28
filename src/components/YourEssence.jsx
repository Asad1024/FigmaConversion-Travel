import {AiOutlineLeft, AiOutlineRight,} from "react-icons/ai"
import cap from '../assets/maldeives.jpg'

const YourEssence = () => {
  return (
    <div className="flex p-20 flex-col">
        <div className=" flex items-center justify-between">
        <div>
            <h1 className="font-bold text-3xl">Choose Your Essence</h1>
            <p className="max-w-md mx-auto text-sm font-semibold mt-2">Lorem ipsum dolor, sit amet consectetur adipisicing elit. Eos sunt quod eveniet consequuntur, unde officia aspernatur.</p>
        </div>
        <div className="flex items-center gap-4">
        <span className="bg-orange-200 p-3 text-lg text-white font-semibold"><AiOutlineLeft/></span>
        <span className="bg-orange-500 p-3 text-lg text-white font-semibold"><AiOutlineRight/></span>
      </div>
        </div>
        <div className="flex items-center gap-10 mt-7">
  <div className="relative">
    <img style={{ width: "260px", height: "330px" }} src={cap} alt="" />
    <p className="absolute bottom-0 left-20 text-black font-bold p-2 text-lg">Country 1</p>
  </div>
  <div className="relative">
    <img style={{ width: "260px", height: "330px" }} src={cap} alt="" />
    <p className="absolute bottom-0 left-20 text-black font-bold p-2 text-lg">Country 2</p>
  </div>
  <div className="relative">
    <img style={{ width: "260px", height: "330px" }} src={cap} alt="" />
    <p className="absolute bottom-0 left-20 text-black font-bold p-2 text-lg">Country 3</p>
  </div>
  <div className="relative">
    <img style={{ width: "260px", height: "330px" }} src={cap} alt="" />
    <p className="absolute bottom-0 left-20 text-black font-bold p-2 text-lg">Country 4</p>
  </div>
</div>

    </div>
  )
}

export default YourEssence