import React from "react";

const ServiceCard = ({ serviceNo, title, content, icon }) => {
  return (
    <div className="service-card">
      {/* <div className="box-overlay"></div> */}
      <div className="flex flex-col bg-white p-5 mx-2 md:mx-0">
        <span className="ml-auto text-7xl font-bold text-gray-200">
          {serviceNo}
        </span>
        <div>{icon}</div>
        <h4 className="text-2xl font-semibold mb-2">{title}</h4>
        <p className=" text-ellipsis">{content}</p>
      </div>
    </div>
  );
};

export default ServiceCard;
