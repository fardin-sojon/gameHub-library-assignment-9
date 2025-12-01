import React from "react";
import {
  useLoaderData,
  useLocation,
  useNavigate,
  useParams,
} from "react-router";
import { AuthContext } from "../Provider/AuthContext";
import UserTitle from "../Hook/UserTitle";

const GameDetails = () => {
  const { id } = useParams();
  // console.log(id);
  const allData = useLoaderData();
  // console.log(allData);

  const cardDetails = allData.find((data) => data.id == id);
  // console.log(cardDetails);

  const {title,category,coverPhoto,description,developer,downloadLink,ratings,} = cardDetails;

  UserTitle(`${title} || Gamehub`);

  const navigate = useNavigate();

  const location = useLocation();
  console.log(location);

  const haldleNavigete =()=>{
    navigate(-1)
  }

  return (
    <div className=" bg-gray-100 py-20 px-3">
      <h3 className="text-2xl text-center font-bold">Game Details</h3>
      <div className="bg-white container mx-auto shadow-lg rounded-xl md:w-[50%] lg:w-[50%] xl:w-[30%] m-4 flex flex-col p-4">
        {/* Cover Image */}
        <img
          src={coverPhoto}
          alt="Free Fire"
          className="w-full h-58 object-cover"
        />

        {/* Content */}
        <div className="p-4 flex flex-col flex-1">
          {/* Title & Category */}
          <h3 className="text-xl font-semibold mb-1">{title}</h3>
          <p className="text-sm text-gray-500 mb-2">{category}</p>

          {/* Ratings & Developer */}
          <div className="flex justify-between items-center mb-2">
            <span className="text-yellow-500 font-medium">{ratings} ⭐</span>
            <span className="text-white text-md bg-yellow-500 p-2 rounded-md">
              {developer}
            </span>
          </div>

          {/* Description */}
          <p className="text-gray-700 text-sm mb-4">{description}</p>

          {/* Download Button */}
          <a
            href={downloadLink}
            target="_blank"
            rel="noopener noreferrer"
            className="mt-auto bg-blue-600 hover:bg-blue-700 text-white text-center py-2 rounded-lg transition-colors"
          >
            Download Now
          </a>
          {/* Back */}
          <div>
            <button
              onClick={haldleNavigete}
              className="btn w-full mt-3 bg-purple-500 text-white"
            >
              Back
            </button>
          </div>
        </div>
      </div>
    </div>
  );
};

export default GameDetails;
