import React from "react";

const KPIBox = ({ heading, data, profit }) => {
  return (
    <div className="px-6 py-5 md:gap-4 gap-2 rounded-lg flex flex-col md:w-56 md:h-40 w-52 h-32 bg-[#ffffff] shadow-md">
      <h2 className="text-base ">{heading}</h2>
      <h6 className="text-3xl font-semibold"> {data}</h6>
      <span className="flex gap-3">
        <strong
          className={`flex justify-center items-center gap-1 font-medium ${
            profit > 0 ? "text-green-600" : "text-red-600"
          }`}
        >
          {profit}%
        </strong>
        than last
      </span>
    </div>
  );
};

export default KPIBox;
