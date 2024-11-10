import { useContext, useEffect, useState } from "react";
import ShopContext from "../context/shopContext";
import Title from "./Title";
import ProductItem from "./ProductItem";

const BestSeller = () => {
  const { products } = useContext(ShopContext);
  const [bestSellerProduct, setBestSellerProduct] = useState([]);
  useEffect(() => {
    const bestProducts = products.filter(
      (eachProduct) => eachProduct.bestseller === true
    );
    setBestSellerProduct(bestProducts.slice(0, 5));
  }, []);
  return (
    <div className="my-10">
      <div className="text-center py-10 text-xl lg:text-3xl">
        <Title primaryText="BEST" secondaryText="SELLERS" />
        <p className="w-3/4 m-auto text-xs sm:text-sm md:text-base text-gray-500">
          Lorem Ipsum is simply dummy text of the printing and typesetting
          industry.
        </p>
      </div>
      <ul className="grid grid-cols-2 sm:grid-cols-3 md:grid-cols-4 lg:grid-cols-5 gap-4 gap-y-6">
        {bestSellerProduct.map((eachProduct) => (
          <ProductItem productInfo={eachProduct} key={eachProduct._id} />
        ))}
      </ul>
    </div>
  );
};

export default BestSeller;
