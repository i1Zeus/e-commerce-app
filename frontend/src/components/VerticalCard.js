import React, { useContext } from "react";
import { Link } from "react-router-dom";
import Context from "../context";
import addToCart from "../helpers/addToCart";
import displayINRCurrency from "../helpers/displayCurrency";
import scrollTop from "../helpers/scrollTop";

const VerticalCard = ({ loading, data = [] }) => {
  const loadingList = new Array(13).fill(null);
  const { fetchUserAddToCart } = useContext(Context);

  const handleAddToCart = async (e, id) => {
    await addToCart(e, id);
    fetchUserAddToCart();
  };

  return (
    <div className="grid grid-cols-[repeat(auto-fit,minmax(260px,300px))] justify-center md:justify-between md:gap-4 overflow-x-scroll scrollbar-none transition-all">
      {loading
        ? loadingList.map((product, index) => {
            return (
              <div className="w-full min-w-[280px]  md:min-w-[320px] max-w-[280px] md:max-w-[320px]  bg-white rounded-sm shadow ">
                <div className="bg-slate-200 h-48 p-4 min-w-[280px] md:min-w-[145px] flex justify-center items-center animate-pulse"></div>
                <div className="grid gap-3 p-4">
                  <h2 className="md:text-lg text-ellipsis line-clamp-1 animate-pulse bg-slate-200 p-1 py-2 text-base font-medium text-black rounded-full"></h2>
                  <p className="text-slate-500 animate-pulse bg-slate-200 p-1 py-2 capitalize rounded-full"></p>
                  <div className="flex gap-3">
                    <p className="animate-pulse bg-slate-200 w-full p-1 py-2 font-medium text-red-600 rounded-full"></p>
                    <p className="text-slate-500 animate-pulse bg-slate-200 w-full p-1 py-2 line-through rounded-full"></p>
                  </div>
                  <button className="bg-slate-200 animate-pulse px-3 py-2 text-sm text-white rounded-full"></button>
                </div>
              </div>
            );
          })
        : data.map((product, index) => {
            return (
              <Link
                to={"/product/" + product?._id}
                className="w-full min-w-[280px]  md:min-w-[300px] max-w-[280px] md:max-w-[300px]  bg-white rounded-sm shadow "
                onClick={scrollTop}
              >
                <div className="bg-slate-200 h-48 p-4 min-w-[280px] md:min-w-[145px] flex justify-center items-center">
                  <img
                    src={product?.productImage[0]}
                    className="hover:scale-110 mix-blend-multiply object-scale-down h-full transition-all"
                  />
                </div>
                <div className="grid gap-3 p-4">
                  <h2 className="md:text-lg text-ellipsis line-clamp-1 text-base font-medium text-black">
                    {product?.productName}
                  </h2>
                  <p className="text-slate-500 capitalize">
                    {product?.category}
                  </p>
                  <div className="flex gap-3">
                    <p className="font-medium text-red-600">
                      {displayINRCurrency(product?.sellingPrice)}
                    </p>
                    <p className="text-slate-500 line-through">
                      {displayINRCurrency(product?.price)}
                    </p>
                  </div>
                  <button
                    className="text-sm bg-red-600 hover:bg-red-700 text-white px-3 py-0.5 rounded-full"
                    onClick={(e) => handleAddToCart(e, product?._id)}
                  >
                    Add to Cart
                  </button>
                </div>
              </Link>
            );
          })}
    </div>
  );
};

export default VerticalCard;
