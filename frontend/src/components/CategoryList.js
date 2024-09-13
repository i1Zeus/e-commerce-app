import React, { useEffect, useState } from "react";
import { Link } from "react-router-dom";
import SummaryApi from "../common";

const CategoryList = () => {
  const [categoryProduct, setCategoryProduct] = useState([]);
  const [loading, setLoading] = useState(false);

  const categoryLoading = new Array(5).fill(null);

  const fetchCategoryProduct = async () => {
    setLoading(true);
    const response = await fetch(SummaryApi.categoryProduct.url);
    const dataResponse = await response.json();
    setLoading(false);
    setCategoryProduct(dataResponse.data);
  };

  useEffect(() => {
    fetchCategoryProduct();
  }, []);

  return (
    <div className="container p-4 mx-auto">
      <div className="scrollbar-none flex items-center justify-between gap-4 overflow-scroll">
        {loading
          ? categoryLoading.map((el, index) => {
              return (
                <div
                  className="md:w-20 md:h-20 bg-slate-200 animate-pulse w-16 h-16 overflow-hidden rounded-full"
                  key={"categoryLoading" + index}
                ></div>
              );
            })
          : categoryProduct.map((product, index) => {
              return (
                <Link
                  to={"/product-category?category=" + product?.category}
                  className="cursor-pointer"
                  key={product?.category}
                >
                  <div className="md:w-20 md:h-20 bg-slate-200 flex items-center justify-center w-16 h-16 p-4 overflow-hidden rounded-full">
                    <img
                      src={product?.productImage[0]}
                      alt={product?.category}
                      className="mix-blend-multiply hover:scale-125 object-scale-down h-full transition-all"
                    />
                  </div>
                  <p className="md:text-base text-sm text-center capitalize">
                    {product?.category}
                  </p>
                </Link>
              );
            })}
      </div>
    </div>
  );
};

export default CategoryList;
