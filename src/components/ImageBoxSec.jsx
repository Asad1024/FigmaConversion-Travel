import img1 from "../assets/holiday1.jpg";
import img2 from "../assets/dubai.jpg";

const ImageBox2 = () => {
  return (
    <div>
      <div className="flex items-center justify-between  mt-7">
        <div className="relative">
          <img style={{ width: "460px", height: "350px" }} src={img1} alt="" />
          <p className="absolute bottom-0 left-40 text-white p-2 text-lg font-semibold">
            Group Booking
          </p>
        </div>
        <div className="relative">
          <img style={{ width: "460px", height: "350px" }} src={img2} alt="" />
          <p className="absolute bottom-0 left-40 text-white p-2 text-lg font-semibold">
            Holidays
          </p>
        </div>
        <div className="relative">
          <img style={{ width: "460px", height: "350px" }} src={img1} alt="" />
          <p className="absolute bottom-0 left-40 text-white p-2 text-lg font-semibold">
            StayCations
          </p>
        </div>
      </div>
      <div className="flex items-center justify-between">
        <div className="relative">
          <img style={{ width: "460px", height: "350px" }} src={img2} alt="" />
          <p className="absolute bottom-0 left-40 text-white p-2 text-lg font-semibold">
            Group Booking
          </p>
        </div>
        <div className="relative">
          <img style={{ width: "436px", height: "350px" }} src={img1} alt="" />
          <p className="absolute bottom-0 left-40 text-white p-2 text-lg font-semibold">
            Holidays
          </p>
        </div>
        <div className="relative">
          <img style={{ width: "460px", height: "350px" }} src={img2} alt="" />
          <p className="absolute bottom-0 left-40 text-white p-2 text-lg font-semibold">
            StayCations
          </p>
        </div>
      </div>
    </div>
  );
};

export default ImageBox2;
