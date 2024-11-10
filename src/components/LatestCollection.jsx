import { useContext, useState, useEffect } from "react";
import ShopContext from "../context/shopContext";
import Title from "./Title";
import ProductItem from "./ProductItem";

const LatestCollection = () => {
  const { products } = useContext(ShopContext);
  const [latestProducts, setLatestProducts] = useState([]);

  useEffect(() => {
    setLatestProducts(products.slice(0, 10));
  }, []);
  return (
    <div className="my-10">
      <div className="text-center text-xl lg:text-3xl">
        <Title primaryText="LATEST" secondaryText="COLLECTIONS" />
        <p className="w-3/4 m-auto text-xs sm:text-sm md:text-base text-gray-500">
          Lorem Ipsum is simply dummy text of the printing and typesetting
          industry. Lorem Ipsum has been the.
        </p>
      </div>
      <ul className="grid grid-cols-2 sm:grid-cols-3 md:grid-cols-4 lg:grid-cols-5 gap-4 py-6">
        {latestProducts.map((eachProduct) => (
          <ProductItem productInfo={eachProduct} key={eachProduct._id} />
        ))}
      </ul>
    </div>
  );
};

export default LatestCollection;
