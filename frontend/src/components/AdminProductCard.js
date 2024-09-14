import React, { useState } from "react";
import { MdModeEditOutline } from "react-icons/md";
import displayINRCurrency from "../helpers/displayCurrency";
import AdminEditProduct from "./AdminEditProduct";

const AdminProductCard = ({ data, fetchData }) => {
  const [editProduct, setEditProduct] = useState(false);

  return (
    <div className=" p-4 bg-white rounded">
      <div className="w-40">
        <div className="flex items-center justify-center w-32 h-32">
          <img
            src={data?.productImage[0]}
            alt="product"
            className="object-fill h-full mx-auto"
          />
        </div>
        <h1 className="text-ellipsis line-clamp-2">{data.productName}</h1>

        <div>
          <p className="font-semibold">
            {displayINRCurrency(data.sellingPrice)}
          </p>

          <div
            className="w-fit hover:bg-green-600 hover:text-white p-2 ml-auto bg-green-100 rounded-full cursor-pointer"
            onClick={() => setEditProduct(true)}
          >
            <MdModeEditOutline />
          </div>
        </div>
      </div>

      {editProduct && (
        <AdminEditProduct
          productData={data}
          onClose={() => setEditProduct(false)}
          fetchData={fetchData}
        />
      )}
    </div>
  );
};

export default AdminProductCard;
