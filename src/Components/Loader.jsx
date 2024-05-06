import React from "react";
import "../Stylessheets/LoaderStyle.css"



const Loader = () => {
  return (
    <div className="flex justify-center items-center w-[100%]">
      <div className="loader-wrapper">
        <div className="blur">
          <div className="loader">
            <div className="background"></div>
          </div>
        </div>
        <div className="loader">
          <div className="background"></div>
        </div>
        <div className="image-wrapper"></div>
      </div>
    </div>
  );
};

export default Loader;
