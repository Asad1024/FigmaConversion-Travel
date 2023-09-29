import img1 from "../assets/box1.png";
import img2 from "../assets/box2.png";
import img3 from "../assets/box3.png";

const ImageBox = () => {
  return (
    <div>
      <div className="flex flex-col md:flex-row items-center justify-between  mt-7">
        <div className="relative">
          <img style={{ width: "430px", height: "350px" }} src={img1} alt="" />
          <p className="absolute bottom-10  left-24 md:left-30 text-white p-2 text-3xl font-bold shadow-2xl">
            Group Booking
          </p>
        </div>
        <div className="relative">
          <img style={{ width: "430px", height: "350px" }} src={img2} alt="" />
          <p className="absolute bottom-10 left-36 md:left-40  text-white p-2 text-3xl font-bold shadow-2xl">
            Holidays
          </p>
        </div>
        <div className="relative">
          <img style={{ width: "430px", height: "350px" }} src={img3} alt="" />
          <p className="absolute bottom-10 left-28 md:left-40  text-white p-2 text-3xl font-bold">
            StayCations
          </p>
        </div>
      </div>
    </div>
  );
};

export default ImageBox;
