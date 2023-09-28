import img1 from "../assets/maldeives.jpg";
import man from "../assets/man.jpg"
import {RiStarSFill} from "react-icons/ri"

const Customer = () => {
  return (
    <>
      <div className="relative flex justify-between p-20">
        <div className="mt-14">
          <h1 className="font-bold text-3xl">Our Top Picks</h1>
          <p className="max-w-md mx-auto text-sm font-semibold mt-2">
            Lorem ipsum dolor, sit amet consectetur adipisicing elit. Eos sunt
            quod eveniet consequuntur, unde officia aspernatur.
          </p>
        </div>
        <div>
          <img style={{ width: "450px" }} src={img1} alt="" />
        </div>
      <div className="flex gap-4 absolute mt-40">
      <div className=" w-[400px] flex items-center flex-col p-5 shadow-2xl rounded-md bg-white">
            <div className="flex w-[90%] items-center gap-5 bg-gray-200 p-5 rounded-md">
                    <img style={{ width : "60px" , height:"70px"}} src={man} alt="" />
                <div className="flex flex-col">
                    <span className="font-bold text-lg ">Joel Elliot</span>
                    <span className="font-semibold opacity-60">Traveler</span>
                </div>
            </div>
            <div className="w-45 font-medium  mx-6 my-5">Lorem ipsum dolor sit amet consectetur adipisicing elit. Porro, vel facilis. Dolor quis ab accusantium eaque earum exercitationem</div>
            <div className="flex text-orange-600 mr-72">
                <RiStarSFill/>
                <RiStarSFill/>
                <RiStarSFill/>
                <RiStarSFill/>
            </div>
        </div>
        <div className=" w-[400px] flex items-center flex-col p-5 shadow-2xl rounded-md bg-white">
            <div className="flex w-[90%] items-center gap-5 bg-gray-200 p-5 rounded-md">
                    <img style={{ width : "60px" , height:"70px"}} src={man} alt="" />
                <div className="flex flex-col">
                    <span className="font-bold text-lg ">Joel Elliot</span>
                    <span className="font-semibold opacity-60">Traveler</span>
                </div>
            </div>
            <div className="w-45 font-medium  mx-6 my-5">Lorem ipsum dolor sit amet consectetur adipisicing elit. Porro, vel facilis. Dolor quis ab accusantium eaque earum exercitationem</div>
            <div className="flex text-orange-600 mr-72">
                <RiStarSFill/>
                <RiStarSFill/>
                <RiStarSFill/>
                <RiStarSFill/>
            </div>
        </div>
        <div className=" w-[400px] flex items-center flex-col p-5 shadow-2xl rounded-md bg-white">
            <div className="flex w-[90%] items-center gap-5 bg-gray-200 p-5 rounded-md">
                    <img style={{ width : "60px" , height:"70px"}} src={man} alt="" />
                <div className="flex flex-col">
                    <span className="font-bold text-lg ">Joel Elliot</span>
                    <span className="font-semibold opacity-60">Traveler</span>
                </div>
            </div>
            <div className="w-45 font-medium  mx-6 my-5">Lorem ipsum dolor sit amet consectetur adipisicing elit. Porro, vel facilis. Dolor quis ab accusantium eaque earum exercitationem</div>
            <div className="flex text-orange-600 mr-72">
                <RiStarSFill/>
                <RiStarSFill/>
                <RiStarSFill/>
                <RiStarSFill/>
            </div>
        </div>
      </div>
      </div>

    </>
  );
};

export default Customer;
