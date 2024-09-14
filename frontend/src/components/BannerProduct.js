import React, { useEffect, useState } from "react";
import image1 from "../asset/banner/img1.webp";
import image2 from "../asset/banner/img2.webp";
import image3 from "../asset/banner/img3.jpg";
import image4 from "../asset/banner/img4.jpg";
import image5 from "../asset/banner/img5.webp";

import image1Mobile from "../asset/banner/img1_mobile.jpg";
import image2Mobile from "../asset/banner/img2_mobile.webp";
import image3Mobile from "../asset/banner/img3_mobile.jpg";
import image4Mobile from "../asset/banner/img4_mobile.jpg";
import image5Mobile from "../asset/banner/img5_mobile.png";

import { FaAngleLeft, FaAngleRight } from "react-icons/fa6";

const BannerProduct = () => {
  const [currentImage, setCurrentImage] = useState(0);

  const desktopImages = [image1, image2, image3, image4, image5];

  const mobileImages = [
    image1Mobile,
    image2Mobile,
    image3Mobile,
    image4Mobile,
    image5Mobile,
  ];

  const nextImage = () => {
    if (desktopImages.length - 1 > currentImage) {
      setCurrentImage((prev) => prev + 1);
    }
  };

  const prevImage = () => {
    if (currentImage !== 0) {
      setCurrentImage((prev) => prev - 1);
    }
  };

  useEffect(() => {
    const interval = setInterval(() => {
      if (desktopImages.length - 1 > currentImage) {
        nextImage();
      } else {
        setCurrentImage(0);
      }
    }, 5000);

    return () => clearInterval(interval);
  }, [currentImage]);

  return (
    <div className="container px-4 mx-auto rounded">
      <div className="md:h-72 bg-slate-200 relative w-full h-56">
        <div className="md:flex absolute z-10 items-center hidden w-full h-full">
          <div className="flex justify-between w-full text-2xl">
            <button
              onClick={prevImage}
              className="p-1 bg-white rounded-full shadow-md"
            >
              <FaAngleLeft />
            </button>
            <button
              onClick={nextImage}
              className="p-1 bg-white rounded-full shadow-md"
            >
              <FaAngleRight />
            </button>
          </div>
        </div>

        {/**desktop and tablet version */}
        <div className="md:flex hidden w-full h-full overflow-hidden">
          {desktopImages.map((imageURl, index) => {
            return (
              <div
                className="w-full h-full min-w-full min-h-full transition-all"
                key={imageURl}
                style={{ transform: `translateX(-${currentImage * 100}%)` }}
              >
                <img src={imageURl} className="w-full h-full" alt="product" />
              </div>
            );
          })}
        </div>

        {/**mobile version */}
        <div className="md:hidden flex w-full h-full overflow-hidden">
          {mobileImages.map((imageURl, index) => {
            return (
              <div
                className="w-full h-full min-w-full min-h-full transition-all"
                key={imageURl}
                style={{ transform: `translateX(-${currentImage * 100}%)` }}
              >
                <img
                  src={imageURl}
                  className="object-cover w-full h-full"
                  alt="product"
                />
              </div>
            );
          })}
        </div>
      </div>
    </div>
  );
};

export default BannerProduct;
