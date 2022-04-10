import React from "react";
import { ServiceCard } from "@components";
import { FaPallet } from "react-icons/fa";
import { IconContext } from "react-icons";

const ALL_SERVICES = [
  {
    serviceNo: "01",
    title: "Service 1",
    content: `Lorem ipsum dolor sit, amet consectetur adipisicing elit. Commodi,
    corrupti vel molestias obcaecati fugiat a in natus nesciunt aperiam
    vitae optio enim dolorum, ut alias reiciendis pariatur at eaque
    blanditiis?`,
    icon: <FaPallet className="service-icon" />,
  },
  {
    serviceNo: "02",
    title: "Service 2",
    content: `Lorem ipsum dolor sit, amet consectetur adipisicing elit. Commodi,
    corrupti vel molestias obcaecati fugiat a in natus nesciunt aperiam
    vitae optio enim dolorum, ut alias reiciendis pariatur at eaque
    blanditiis?`,
    icon: <FaPallet className="service-icon" />,
  },
  {
    serviceNo: "03",
    title: "Service 3",
    content: `Lorem ipsum dolor sit, amet consectetur adipisicing elit. Commodi,
    corrupti vel molestias obcaecati fugiat a in natus nesciunt aperiam
    vitae optio enim dolorum, ut alias reiciendis pariatur at eaque
    blanditiis?`,
    icon: <FaPallet className="service-icon" />,
  },
  {
    serviceNo: "04",
    title: "Service 4",
    content: `Lorem ipsum dolor sit, amet consectetur adipisicing elit. Commodi,
    corrupti vel molestias obcaecati fugiat a in natus nesciunt aperiam
    vitae optio enim dolorum, ut alias reiciendis pariatur at eaque
    blanditiis?`,
    icon: <FaPallet className="service-icon" />,
  },
  {
    serviceNo: "05",
    title: "Service 5",
    content: `Lorem ipsum dolor sit, amet consectetur adipisicing elit. Commodi,
    corrupti vel molestias obcaecati fugiat a in natus nesciunt aperiam
    vitae optio enim dolorum, ut alias reiciendis pariatur at eaque
    blanditiis?`,
    icon: <FaPallet className="service-icon" />,
  },
  {
    serviceNo: "06",
    title: "Service 6",
    content: `Lorem ipsum dolor sit, amet consectetur adipisicing elit. Commodi,
    corrupti vel molestias obcaecati fugiat a in natus nesciunt aperiam
    vitae optio enim dolorum, ut alias reiciendis pariatur at eaque
    blanditiis?`,
    icon: <FaPallet className="service-icon" />,
  },
  {
    serviceNo: "07",
    title: "Service 7",
    content: `Lorem ipsum dolor sit, amet consectetur adipisicing elit. Commodi,
    corrupti vel molestias obcaecati fugiat a in natus nesciunt aperiam
    vitae optio enim dolorum, ut alias reiciendis pariatur at eaque
    blanditiis?`,
    icon: <FaPallet className="service-icon" />,
  },
  {
    serviceNo: "08",
    title: "Service 8",
    content: `Lorem ipsum dolor sit, amet consectetur adipisicing elit. Commodi,
    corrupti vel molestias obcaecati fugiat a in natus nesciunt aperiam
    vitae optio enim dolorum, ut alias reiciendis pariatur at eaque
    blanditiis?`,
    icon: <FaPallet className="service-icon" />,
  },
  {
    serviceNo: "09",
    title: "Service 9",
    content: `Lorem ipsum dolor sit, amet consectetur adipisicing elit. Commodi,
    corrupti vel molestias obcaecati fugiat a in natus nesciunt aperiam
    vitae optio enim dolorum, ut alias reiciendis pariatur at eaque
    blanditiis?`,
    icon: <FaPallet className="service-icon" />,
  },
];

const Services = () => {
  return (
    <section className="relative">
      <span className="hidden lg:block absolute -right-60 top-2/4 -rotate-90 text-7xl font-extrabold text-gray-300 tracking-vwider">
        SERVICES
      </span>
      <IconContext.Provider value={{ className: "custom-icon" }}>
        <div className="w-full lg:w-3/4 lg:mx-auto mt-3 mb-5 md:mb-14">
          <header className="p-2 my-5  bg-gray-200 bg-opacity-50 inline-block border">
            <h3 className="text-4xl md:text-6xl font-bold">All Services</h3>
          </header>
          <div className="grid grid-cols-1 md:grid-cols-2 lg:grid-cols-3 gap-6">
            {ALL_SERVICES.map((service) => (
              <ServiceCard key={`service-card-${service.title}`} {...service} />
            ))}
          </div>
        </div>
      </IconContext.Provider>
    </section>
  );
};

export default Services;
