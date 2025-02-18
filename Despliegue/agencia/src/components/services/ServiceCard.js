import { Link } from "react-router-dom";
import { useState } from "react";

function ServiceCard({ data, index }) {
  const [hovered, setHovered] = useState(false);

  return (
    <div
      onMouseEnter={() => setHovered(true)}
      onMouseLeave={() => setHovered(false)}
      className="w-full relative p-2 h-96 lg:h-[200px] bg-white hover:-translate-y-1 transition duration-300 ease-in-out"
    >
      <div className="w-full">
        <img src={data.img} alt={data.title} className="w-10 h-10" />
        <h2 className="text-xl font-semibold text-gray-900 pt-8">{data.title}</h2>
        <p className="text-lg font-regular text-gray-500 pt-4">{data.description}</p>
      </div>
      {/* Posiciona el Learn More casi en el límite de la tarjeta */}
      <div className="absolute bottom left-0 w-full flex justify-center py-12">
        <Link
          to={data.href}
          className={`text-xl font-modern transition-colors duration-200 ${
            hovered ? "text-orange-500" : "text-gray-900"
          }`}
        >
          Learn More
        </Link>
      </div>
    </div>
  );
}

export default ServiceCard;
