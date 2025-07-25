import React from "react";

const FeatureBox = ({  title, icon, desc }) => {
  return (
    <div>
      <div className="text-white element-center flex-col text-center">
        <img
          src={`./images/${icon}`}
          alt="icon-img"
          className="w-[80px] h-[80px] object-contain"
        />
        <h4 className="text-xl font-semibold my-[15px]">{title}</h4>
        <p className="font-normal text-sm">{desc}</p>
      </div>
    </div>
  );
};

export default FeatureBox;
