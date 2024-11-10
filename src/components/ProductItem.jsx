import { useContext } from "react";
import { Link } from "react-router-dom";
import ShopContext from "../context/shopContext";

const ProductItem = (props) => {
  const { productInfo } = props;
  const { _id, name, image, price } = productInfo;
  const { currency } = useContext(ShopContext);
  return (
    <Link to={`/product/${_id}`}>
      <li className="overflow-hidden">
        <img
          src={image[0]}
          alt="product-image"
          className="hover:scale-110 transition ease-in-out"
        />
        <h4 className="text-sm pt-3 pb-1">{name}</h4>
        <p className="text-sm font-medium">{currency} {price}</p>
      </li>
    </Link>
  );
};

export default ProductItem;
