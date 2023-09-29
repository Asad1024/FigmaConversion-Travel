import img1 from "../assets/bsec1.png";
import img2 from "../assets/bsec2.png";
import img3 from "../assets/bsec3.jpg";
import img4 from "../assets/bsec4.jpg";

const ImageBox2 = () => {
  return (
    <div>
      <div className="flex flex-col md:flex-row items-center justify-between  mt-7">
        <div className="relative">
          <img style={{ width: "460px", height: "350px" }} src={img1} alt="" />
          <p className="flex flex-col items-center absolute bottom-0 right-40 md:left-36 text-white font-bold p-2">
           <span className="opacity-60 text-lg">Explore</span>
           <span className="text-xl">Mumbai</span>
          </p>
        </div>
        <div className="relative">
          <img style={{ width: "460px", height: "350px" }} src={img2} alt="" />
          <p className="flex flex-col items-center absolute bottom-0 right-40 md:left-36 text-white font-bold p-2">
           <span className="opacity-60 text-lg">Explore</span>
           <span className="text-xl">Delhi</span>
          </p>
        </div>
        <div className="relative">
          <img style={{ width: "460px", height: "350px" }} src={img3} alt="" />
          <p className="flex flex-col items-center absolute bottom-0 right-40 md:left-36 text-white font-bold p-2">
           <span className="opacity-60 text-lg">Explore</span>
           <span className="text-xl">Banglore</span>
          </p>
        </div>
      </div>
      <div className="flex flex-col md:flex-row items-center justify-between">
        <div className="relative">
          <img style={{ width: "460px", height: "350px" }} src={img4} alt="" />
          <p className="flex flex-col items-center absolute bottom-0 right-40 md:left-36 text-white font-bold p-2">
           <span className="opacity-60 text-lg">Explore</span>
           <span className="text-xl">Delhi</span>
          </p>
        </div>
        <div className="relative">
          <img style={{ width: "436px", height: "350px" }} src={img1} alt="" />
          <p className="flex flex-col items-center absolute bottom-0 right-40 md:left-36 text-white font-bold p-2">
           <span className="opacity-60 text-lg">Explore</span>
           <span className="text-xl">Channai</span>
          </p>
        </div>
        <div className="relative">
          <img style={{ width: "460px", height: "350px" }} src={img2} alt="" />
          <p className="flex flex-col items-center absolute bottom-0 right-40 md:left-36 text-white font-bold p-2">
           <span className="opacity-60 text-lg">Explore</span>
           <span className="text-xl">Kochi</span>
          </p>
        </div>
      </div>
    </div>
  );
};

export default ImageBox2;
