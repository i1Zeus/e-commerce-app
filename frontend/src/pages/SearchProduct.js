import React, { useEffect, useState } from "react";
import { useLocation } from "react-router-dom";
import SummaryApi from "../common";
import VerticalCard from "../components/VerticalCard";

const SearchProduct = () => {
  const query = useLocation();
  const [data, setData] = useState([]);
  const [loading, setLoading] = useState(false);

  console.log("query", query.search);

  useEffect(() => {
    const fetchProduct = async () => {
      setLoading(true);
      const response = await fetch(SummaryApi.searchProduct.url + query.search);
      const dataResponse = await response.json();
      setLoading(false);

      setData(dataResponse.data);
    };
    fetchProduct();
  }, [query]);

  return (
    <div className="container p-4 mx-auto">
      {loading && <p className="text-lg text-center">Loading ...</p>}

      <p className="my-3 text-lg font-semibold">
        Search Results : {data.length}
      </p>

      {data.length === 0 && !loading && (
        <p className="p-4 text-lg text-center bg-white">No Data Found....</p>
      )}

      {data.length !== 0 && !loading && (
        <VerticalCard loading={loading} data={data} />
      )}
    </div>
  );
};

export default SearchProduct;
