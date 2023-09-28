import cap from "../assets/holiday1.jpg";

const ImageBox = () => {
  return (
    <div>
      <div className="flex items-center justify-between  mt-7">
        <div className="relative">
          <img style={{ width: "430px", height: "350px" }} src={cap} alt="" />
          <p className="absolute bottom-0 left-40 text-white p-2 text-lg font-semibold">
            Group Booking
          </p>
        </div>
        <div className="relative">
          <img style={{ width: "430px", height: "350px" }} src={cap} alt="" />
          <p className="absolute bottom-0 left-40 text-white p-2 text-lg font-semibold">
            Holidays
          </p>
        </div>
        <div className="relative">
          <img style={{ width: "430px", height: "350px" }} src={cap} alt="" />
          <p className="absolute bottom-0 left-40 text-white p-2 text-lg font-semibold">
            StayCations
          </p>
        </div>
      </div>
    </div>
  );
};

export default ImageBox;
