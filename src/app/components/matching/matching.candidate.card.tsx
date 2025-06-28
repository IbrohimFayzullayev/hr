import React, { useState } from "react";
import {
  FaBars,
  FaCheck,
  FaGraduationCap,
  FaMapMarkerAlt,
  FaPhone,
  FaStar,
  FaTimes,
} from "react-icons/fa";

interface MatchingCandidateCardProps {
  name: string;
  position: string;
  education: string;
  location: string;
  score: number;
  phone: string;
}

const MatchingCandidateCard: React.FC<MatchingCandidateCardProps> = ({
  name,
  position,
  education,
  location,
  score,
}) => {
  const [showPhone, setShowPhone] = useState(false);

  return (
    <div className="bg-white rounded-lg shadow-md p-6 transition-all duration-300">
      <div className="flex justify-between items-center bg-gray-100 p-4 rounded-lg mb-2">
        <div className="flex items-center gap-6 flex-1">
          <div className="min-w-[180px] font-bold text-lg">{name}</div>
          <div className="min-w-[180px] text-sm italic text-gray-600">
            {position}
          </div>
          <div className="flex items-center text-gray-700 text-sm mt-1 ">
            <FaGraduationCap className="text-[#0078d4] w-4 h-4 mr-1" />
            <span className="inline-block whitespace-nowrap">{education}</span>
          </div>
          <div className="flex gap-1 items-center w-full mt-1">
            <div className="flex items-center text-gray-700 text-sm">
              <FaMapMarkerAlt className="text-[#0078d4] w-4 h-4 mr-1" />
              <span>{location}</span>
            </div>
            <div className="flex items-center text-yellow-400 font-bold ml-2">
              <FaStar className="w-4 h-4" />
              <span>{score}</span>
            </div>
          </div>
        </div>

        <div className="flex flex-col items-end gap-2 mt-4 sm:mt-0">
          <div className="flex flex-col gap-2 w-full sm:w-auto">
            <div className="relative w-full">
              <button
                className="bg-[#0078d4] text-white cursor-pointer border border-[#0078d4] rounded px-3 py-1 text-sm flex items-center gap-2 w-full"
                onClick={() => setShowPhone(!showPhone)}
              >
                <FaPhone className="w-4 h-4" />
                <span data-i18n="showContactNumber">Show contact</span>
              </button>

              {/* {showPhone && (
                <div className="flex items-center justify-center w-full h-full bg-gray-100 border border-gray-300 rounded px-3 py-2 text-sm font-bold mt-1 text-gray-800">
                  <i className="fas fa-phone mr-2" />
                  <FaPhone className="w-4 h-4 mr-1" />
                  <span>{phone}</span>
                </div>
              )} */}
            </div>

            <button className="bg-gray-600 text-white cursor-pointer rounded px-3 py-1 text-sm flex items-center gap-2 w-full">
              <FaBars className="w-4 h-4" />
              <span data-i18n="detail">Detail</span>
            </button>

            <div className="flex gap-2 mt-2">
              <button className="border border-red-500 cursor-pointer text-red-500 bg-transparent rounded px-2 py-1 text-xs flex items-center gap-1">
                <FaTimes className="w-4 h-4" />
                <span data-i18n="doesntFit">Doesn't Fit</span>
              </button>
              <button className="bg-[#0078d4] text-white cursor-pointer rounded px-2 py-1 text-xs flex items-center gap-1">
                <FaCheck className="w-4 h-4" />
                <span data-i18n="fits">Fits</span>
              </button>
            </div>
          </div>
        </div>
      </div>
    </div>
  );
};

export default MatchingCandidateCard;
