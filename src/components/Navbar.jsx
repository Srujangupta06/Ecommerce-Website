import { Link, NavLink } from "react-router-dom";
import { assets } from "../assets/assets.js";
import { useState } from "react";
const Navbar = () => {
  const [visible, setVisible] = useState(false);
  return (
    <div className="flex justify-between items-center py-4 font-semibold">
      <Link to="/">
        <img src={assets.logo} alt="logo" className="w-28 lg:w-36" />
      </Link>
      <ul className="hidden lg:flex gap-6 text-sm text-gray-600">
        <NavLink to="/" className="flex flex-col items-center">
          <li>HOME</li>
          <hr
            className="w-2/4  h-[1.5px] border-[1px] mt-1 border-[#303030]
                hidden"
          />
        </NavLink>
        <NavLink to="/collection" className="flex flex-col items-center">
          <li>COLLECTION</li>
          <hr
            className="w-2/4  h-[1.5px] border-[1px] mt-1 border-[#303030]
                hidden"
          />
        </NavLink>
        <NavLink to="/about" className="flex flex-col items-center">
          <li>ABOUT</li>
          <hr
            className="w-2/4  h-[1.5px] border-[1px] mt-1 border-[#303030]
                hidden"
          />
        </NavLink>
        <NavLink to="/contact" className="flex flex-col items-center">
          <li>CONTACT</li>
          <hr
            className="w-2/4  h-[1.5px] border-[1px] mt-1 border-[#303030]
                hidden"
          />
        </NavLink>
      </ul>
      <div className="flex gap-5">
        <img src={assets.search_icon} alt="search-icon" className="w-5 h-5" />

        <div className="group relative">
          <img
            src={assets.profile_icon}
            alt="profile-icon"
            className="w-5 h-5 cursor-pointer"
          />
          <div className="group-hover:block hidden absolute dropdown-menu right-0 pt-4">
            <div className="flex flex-col gap-4 px-4 w-36 bg-gray-100 py-4 text-gray-400 text-sm">
              <p className="cursor-pointer hover:text-black">My Profile</p>
              <Link to="/orders">
                <p className="cursor-pointer hover:text-black">Orders</p>
              </Link>
              <Link to="/login">
                <p className="cursor-pointer hover:text-black">Logout</p>
              </Link>
            </div>
          </div>
        </div>

        <Link to="/cart" className="relative">
          <img src={assets.cart_icon} alt="cart-icon" className="w-5 h-5" />
          <sub className="absolute right-[-5px] bottom-[-5px] text-center text-white bg-black px-1 py-2 rounded-full ">
            2
          </sub>
        </Link>
        <img
          src={assets.menu_icon}
          alt="menu-icon"
          className="cursor-pointer w-5 h-5 lg:hidden"
          onClick={() => setVisible(true)}
        />
      </div>
      {/*Mobile SideBar Menu */}
      <div
        className={`absolute top-0 right-0 bottom-0 overflow-hidden bg-gray-100 transition-all ${
          visible ? "w-full" : "w-0"
        }`}
      >
        <div
          className="flex items-center gap-2 text-gray-600  cursor-pointer py-2 px-6"
          onClick={() => setVisible(false)}
        >
          <img src={assets.dropdown_icon} alt="" className="h-5 rotate-180" />
          <p>Back</p>
        </div>
        <ul className="flex flex-col text-gray-600 gap-4 mt-4">
          <NavLink
            to="/"
            className="py-1 px-8 "
            onClick={() => setVisible(false)}
          >
            <li className="py-1">HOME</li>
          </NavLink>
          <NavLink
            to="/collection"
            className="py-1 px-8"
            onClick={() => setVisible(false)}
          >
            <li className="py-1">COLLECTION</li>
          </NavLink>
          <NavLink
            to="/about"
            className=" py-1 px-8"
            onClick={() => setVisible(false)}
          >
            <li className="py-1">ABOUT</li>
          </NavLink>
          <NavLink
            to="/contact"
            className="px-8"
            onClick={() => setVisible(false)}
          >
            <li className="py-1">CONTACT</li>
          </NavLink>
        </ul>
      </div>
    </div>
  );
};

export default Navbar;
