import { colors } from "@constants";
import React from "react";
import MaintainSvg from "./maintenance.svg";
function maintenance() {
  return (
    <div className="flex flex-col relative">
      <div className="w-screen h-screen">
        <MaintainSvg />
      </div>
      <div className="absolute top-32 left-1/3">
        <h2 className={`text-5xl mx-10 mb-6 ${colors.textPrimary} text-center`}>
          Page is under construction
        </h2>
        <p className={`text-3xl mx-10 ${colors.textPrimary} text-left`}>
          Please visit us soon!
        </p>
      </div>
    </div>
  );
}

export default maintenance;
