import React from "react";
import errorImg from "../assets/error-404.png";
import { useNavigate } from "react-router";
import UserTitle from "../Hook/UserTitle";

const Error404 = () => {
  UserTitle("404 || Gamehub");
  const navigate = useNavigate();

  return (
    <div>
      <div className="bg-gray-100 py-30">
        <div className="text-center">
          <img className="inline mb-4" src={errorImg} alt="" />
          <h2 className="text-3xl font-bold">OPPS!! PAGE NOT FOUND</h2>
          <p>
            The App you are requesting is not found on our system. please try
            another apps
          </p>
        </div>
        <div className="flex justify-center items-center mt-5 pb-5">
          <button
            onClick={() => navigate(-1)}
            className="text-center btn text-white bg-gradient-to-r from-[#632EE3] to-[#9F62F2]"
          >
            Go Back
          </button>
        </div>
      </div>
    </div>
  );
};

export default Error404;
