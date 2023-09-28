import {
  BsFillTelephonePlusFill,
  BsFacebook,
  BsTwitter,
  BsYoutube,
  BsInstagram,
  BsSearch,
} from "react-icons/bs";
import { AiOutlineMail } from "react-icons/ai";
import Logo from "../assets/White _ Golden (Only Name) 1.png";

const Navbar = () => {
  return (
    <>
      <div className="flex items-center justify-between p-4 mx-10 text-white">
        <div className="flex gap-3 items-center">
          <span className="bg-gray-300 rounded-full p-2">
            <BsFillTelephonePlusFill className="text-orange-400" />
          </span>
          <span>+92 3040630451</span>
          <span className="bg-gray-300 rounded-full p-2">
            <AiOutlineMail className="text-orange-400" />
          </span>

          <span>asadshah@gamil.com</span>
        </div>

        <div className="flex gap-3">
          <span>Follow:</span>
          <div className="flex gap-7 items-center">
            <span className="bg-gray-300 rounded-full p-2">
              <BsFacebook className="text-orange-400" />
            </span>
            <span className="bg-gray-300 rounded-full p-2">
              <BsInstagram className="text-orange-400" />
            </span>
            <span className="bg-gray-300 rounded-full p-2">
              <BsYoutube className="text-orange-400" />
            </span>
            <span className="bg-gray-300 rounded-full p-2">
              <BsTwitter className="text-orange-400" />
            </span>
          </div>
        </div>
      </div>
      <hr className="border-dashed border-white opacity-25 custom-thick-dashed-border" />

      <div className="flex items-center justify-between mx-10 my-1">
        <div>
          <img src={Logo} alt="" />
        </div>
        <div className="flex items-center gap-12 text-white font-medium">
          <span>StayCations</span>
          <span>Holidays</span>
          <span>Booking</span>
          <span>About Us</span>
          <span>
            <BsSearch />
          </span>
          <span>Login</span>
          <button className="bg-teal-400 px-5 py-2 rounded-md">SignUp</button>
        </div>
      </div>
    </>
  );
};

export default Navbar;
