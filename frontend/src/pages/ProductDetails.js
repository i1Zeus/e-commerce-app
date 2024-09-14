import React, { useCallback, useContext, useEffect, useState } from "react";
import { FaStar, FaStarHalf } from "react-icons/fa";
import { useNavigate, useParams } from "react-router-dom";
import SummaryApi from "../common";
import CategoryWiseProductDisplay from "../components/CategoryWiseProductDisplay";
import Context from "../context";
import addToCart from "../helpers/addToCart";
import displayINRCurrency from "../helpers/displayCurrency";

const ProductDetails = () => {
  const [data, setData] = useState({
    productName: "",
    brandName: "",
    category: "",
    productImage: [],
    description: "",
    price: "",
    sellingPrice: "",
  });
  const params = useParams();
  const [loading, setLoading] = useState(true);
  const productImageListLoading = new Array(5).fill(null);
  const [activeImage, setActiveImage] = useState("");

  const [zoomImageCoordinate, setZoomImageCoordinate] = useState({
    x: 0,
    y: 0,
  });
  const [zoomImage, setZoomImage] = useState(false);

  const { fetchUserAddToCart } = useContext(Context);

  const navigate = useNavigate();

  useEffect(() => {
    const fetchProductDetails = async () => {
      setLoading(true);
      const response = await fetch(SummaryApi.productDetails.url, {
        method: SummaryApi.productDetails.method,
        headers: {
          "content-type": "application/json",
        },
        body: JSON.stringify({
          productId: params?.id,
        }),
      });
      setLoading(false);
      const dataResponse = await response.json();

      setData(dataResponse?.data);
      setActiveImage(dataResponse?.data?.productImage[0]);
    };

    fetchProductDetails();
  }, [params]);

  const handleMouseEnterProduct = (imageURL) => {
    setActiveImage(imageURL);
  };

  const handleZoomImage = useCallback((e) => {
    setZoomImage(true);
    const { left, top, width, height } = e.target.getBoundingClientRect();

    const x = (e.clientX - left) / width;
    const y = (e.clientY - top) / height;

    setZoomImageCoordinate({
      x,
      y,
    });
  }, []);

  const handleLeaveImageZoom = () => {
    setZoomImage(false);
  };

  const handleAddToCart = async (e, id) => {
    await addToCart(e, id);
    fetchUserAddToCart();
  };

  const handleBuyProduct = async (e, id) => {
    await addToCart(e, id);
    fetchUserAddToCart();
    navigate("/cart");
  };

  return (
    <div className="container p-4 mx-auto">
      <div className="min-h-[200px] flex flex-col lg:flex-row gap-4">
        {/***product Image */}
        <div className="h-96 lg:flex-row-reverse flex flex-col gap-4">
          <div className="h-[300px] w-[300px] lg:h-96 lg:w-96 bg-slate-200 relative p-2">
            <img
              src={activeImage}
              alt={data?.productName} // Added alt text
              className="mix-blend-multiply object-scale-down w-full h-full"
              onMouseMove={handleZoomImage}
              onMouseLeave={handleLeaveImageZoom}
            />

            {/**product zoom */}
            {zoomImage && (
              <div className="hidden lg:block absolute min-w-[500px] overflow-hidden min-h-[400px] bg-slate-200 p-1 -right-[510px] top-0">
                <div
                  className="w-full h-full min-h-[400px] min-w-[500px] mix-blend-multiply scale-150"
                  style={{
                    background: `url(${activeImage})`,
                    backgroundRepeat: "no-repeat",
                    backgroundPosition: `${zoomImageCoordinate.x * 100}% ${
                      zoomImageCoordinate.y * 100
                    }% `,
                  }}
                ></div>
              </div>
            )}
          </div>

          <div className="h-full">
            {loading ? (
              <div className="lg:flex-col scrollbar-none flex h-full gap-2 overflow-scroll">
                {productImageListLoading.map((el, index) => {
                  return (
                    <div
                      className="bg-slate-200 animate-pulse w-20 h-20 rounded"
                      key={"loadingImage" + index}
                    ></div>
                  );
                })}
              </div>
            ) : (
              <div className="lg:flex-col scrollbar-none flex h-full gap-2 overflow-scroll">
                {data?.productImage?.map((imgURL, index) => {
                  return (
                    <div
                      className="bg-slate-200 w-20 h-20 p-1 rounded"
                      key={imgURL || index}
                    >
                      <img
                        src={imgURL}
                        alt={`Product ${index + 1}`}
                        className="mix-blend-multiply object-scale-down w-full h-full cursor-pointer"
                        onMouseEnter={() => handleMouseEnterProduct(imgURL)}
                        onClick={() => handleMouseEnterProduct(imgURL)}
                      />
                    </div>
                  );
                })}
              </div>
            )}
          </div>
        </div>

        {/***product details */}
        {loading ? (
          <div className="grid w-full gap-1">
            <p className="bg-slate-200 animate-pulse lg:h-8 inline-block w-full h-6 rounded-full"></p>
            <h2 className="lg:text-4xl lg:h-8 bg-slate-200 animate-pulse w-full h-6 text-2xl font-medium">
              {data?.productName || "Loading"}
            </h2>
            <p className="capitalize text-slate-400 bg-slate-200 min-w-[100px] animate-pulse h-6 lg:h-8  w-full"></p>

            <div className="bg-slate-200 lg:h-8 animate-pulse flex items-center w-full h-6 gap-1 text-red-600"></div>

            <div className="lg:text-3xl lg:h-8 animate-pulse flex items-center w-full h-6 gap-2 my-1 text-2xl font-medium">
              <p className="bg-slate-200 w-full text-red-600"></p>
              <p className="text-slate-400 bg-slate-200 w-full line-through"></p>
            </div>

            <div className="flex items-center w-full gap-3 my-2">
              <button className="lg:h-8 bg-slate-200 animate-pulse w-full h-6 rounded"></button>
              <button className="lg:h-8 bg-slate-200 animate-pulse w-full h-6 rounded"></button>
            </div>

            <div className="w-full">
              <p className="text-slate-600 lg:h-8 bg-slate-200 animate-pulse w-full h-6 my-1 font-medium rounded"></p>
              <p className=" bg-slate-200 animate-pulse lg:h-12 w-full h-10 rounded"></p>
            </div>
          </div>
        ) : (
          <div className="flex flex-col gap-1">
            <p className="w-fit inline-block px-2 text-red-600 bg-red-200 rounded-full">
              {data?.brandName}
            </p>
            <h2 className="lg:text-4xl text-2xl font-medium">
              {data?.productName}
            </h2>
            <p className="text-slate-400 capitalize">{data?.category}</p>

            <div className="flex items-center gap-1 text-red-600">
              <FaStar />
              <FaStar />
              <FaStar />
              <FaStar />
              <FaStarHalf />
            </div>

            <div className="lg:text-3xl flex items-center gap-2 my-1 text-2xl font-medium">
              <p className="text-red-600">
                {displayINRCurrency(data.sellingPrice)}
              </p>
              <p className="text-slate-400 line-through">
                {displayINRCurrency(data.price)}
              </p>
            </div>

            <div className="flex items-center gap-3 my-2">
              <button
                className="border-2 border-red-600 rounded px-3 py-1 min-w-[120px] text-red-600 font-medium hover:bg-red-600 hover:text-white"
                onClick={(e) => handleBuyProduct(e, data?._id)}
              >
                Buy
              </button>
              <button
                className="border-2 border-red-600 rounded px-3 py-1 min-w-[120px] font-medium text-white bg-red-600 hover:text-red-600 hover:bg-white"
                onClick={(e) => handleAddToCart(e, data?._id)}
              >
                Add To Cart
              </button>
            </div>

            <div>
              <p className="text-slate-600 my-1 font-medium">Description : </p>
              <p>{data?.description}</p>
            </div>
          </div>
        )}
      </div>

      {data.category && (
        <CategoryWiseProductDisplay
          category={data?.category}
          heading={"Recommended Product"}
        />
      )}
    </div>
  );
};

export default ProductDetails;
