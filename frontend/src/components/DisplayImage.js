import React from "react";
import { CgClose } from "react-icons/cg";

const DisplayImage = ({ imgUrl, onClose }) => {
  return (
    <div className="fixed top-0 bottom-0 left-0 right-0 flex items-center justify-center">
      <div className="max-w-5xl p-4 mx-auto bg-white rounded shadow-lg">
        <div
          className="w-fit hover:text-red-600 ml-auto text-2xl cursor-pointer"
          onClick={onClose}
        >
          <CgClose />
        </div>
        <div className="flex justify-center p-4 max-w-[80vh] max-h-[80vh]">
          <img src={imgUrl} className="w-full h-full" />
        </div>
      </div>
    </div>
  );
};

export default DisplayImage;
