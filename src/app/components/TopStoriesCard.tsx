import Image from "next/image";
import React from "react";

interface TopStoriesCardProps {
  image: string;
  title: string;
  description: string;
  date: string;
}

const TopStoriesCard: React.FC<TopStoriesCardProps> = ({
  image,
  title,
  description,
  date,
}) => {
  return (
    <div className="flex flex-col md:flex-row bg-white shadow-md rounded-lg overflow-hidden border border-gray-200">
      <Image
        src={image}
        alt={title}
        className="w-full md:w-1/3 object-cover h-48 md:h-auto"
      />
      <div className="p-4 flex flex-col justify-between">
        <div>
          <h2 className="text-lg font-semibold text-gray-800">{title}</h2>
          <p className="text-sm text-gray-600 mt-2">{description}</p>
        </div>
        <p className="text-xs text-gray-500 mt-4">{date}</p>
      </div>
    </div>
  );
};

export default TopStoriesCard;
