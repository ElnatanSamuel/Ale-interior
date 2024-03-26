import React from "react";
import "./PremiumQuality.scss";

const PremiumQuality = () => {
  return (
    <div className="premiumquality max-w-7xl m-auto flex items-center md:space-x-32 pt-12">
      <div className="w-full md:flex-1 relative">
        <img
          src="https://coolwallpapers.me/picsup/3074830-apartment_architecture_chairs_comfort_contemporary_curtain_design_floor_furniture_home_house_indoors_inside_interior_interior-design_lamp_light_living-room_luxury_modern_room_seat_sofa_table_wind.jpg"
          alt=""
          className="premiumimg1"
        />
        <img
          src="https://img.freepik.com/free-photo/minimal-amazing-interior-design_23-2150534604.jpg"
          alt=""
          className="premiumimg2"
        />
      </div>
      <div className="PremiumQualityText w-full md:flex-1 flex flex-col space-y-6">
        <p className="font-bold text-brownmain">PREMIUM QUALITY</p>
        <p className="text-3xl md:text-6xl font-bold opacity-90">
          Your comfort is our only priority
        </p>
       
        <div className="flex flex-col space-y-2">
          <p className="opacity-80 text-sm">MON-FRI: 10PM-12PM</p>
          <p className="opacity-80 text-sm">MON-FRI: 10PM-12PM</p>
        </div>

        <button className=" bg-brownmain text-white">
          Our services &rarr;
        </button>
      </div>
    </div>
  );
};

export default PremiumQuality;
