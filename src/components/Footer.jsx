import {
    BsFacebook,
    BsTwitter,
    BsYoutube,
    BsInstagram
  } from "react-icons/bs";

const Footer = () => {
  return (
   <div className="flex flex-col items-center gap-5 p-16 bg-black">
     <div className='flex justify-between gap-10  text-white'>
        <div className='flex flex-col gap-6'>
            <span className='font-bold text-2xl text-orange-500'>Logo</span>
            <span className=' w-[300px]'>Lorem ipsum dolor sit amet consectetur adipisicing elit. Animi consequatur quae illo possimus doloribus quaerat natus asperiores placeat? Fugit.</span>
        </div>
        <div className='flex flex-col'>
            <ul>
                <li>About</li>
                <li>News</li>
                <li>Partners</li>
                <li>Media</li>
            </ul>
        </div>
        <div className='flex flex-col mb-8'>
            <ul>
                <li>Blogs</li>
                <li>Stories</li>
                <li>Terms and Conditions</li>
            </ul>
        </div>
        <div className='flex flex-col gap-5 mb-12'>
            <span>Follow us</span>
            <div className="flex gap-5 text-orange-600">
                <BsFacebook/>
                <BsInstagram/>
                <BsTwitter/>
                <BsYoutube/>
            </div>
        </div>
        <div className="flex flex-col gap-5">
            <span>Contact Us</span>
            <div className="flex gap-2">
            <div>
                <input className="w-[100%] p-4 bg-transparent  border border-gray-300 rounded" type="text" placeholder="Enter your name" />
            </div>
            <div>
                <input className="w-[100%] p-4 bg-transparent  border border-gray-300 rounded" type="" placeholder="Enter your email" />
            </div>
            </div>
            <div>
                <input className="w-full p-6 bg-transparent  border border-gray-300 rounded" type="text" placeholder="Enter your mobile number" />
                </div>   
                <div>
                <input className="w-full p-10 bg-transparent  border border-gray-300 rounded" type="text" placeholder="Enter your message" />
                </div>
                <button className="w-full bg-teal-400 p-3 rounded-md font-bold">Submit</button>  
        </div>
        
    </div>
    <div className="text-white mt-14">
        <span>Design & Develop by <span className="text-orange-600">ZySoftec</span></span>
    </div>
   </div>
  )
}

export default Footer