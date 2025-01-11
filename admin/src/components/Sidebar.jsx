import React from 'react';
import { NavLink } from 'react-router-dom';
import { assets } from '../assets/admin_assets/assets';

const Sidebar = () => {
  return (
    <div className="w-[18%] min-h-screen border-r-2">
      <div className="flex flex-col gap-4 pt-6 pl-[20%] text-[15px]">
        {/* Add Items */}
        <NavLink
          className={({ isActive }) =>
            `flex items-center gap-3 border border-gray-300 border-r-0 px-3 py-2 rounded-md ${
              isActive ? 'active' : ''
            }`
          }
          to="/add"
        >
          <img className="w-5 h-5" src={assets.add_icon} alt="Add Icon" />
          <p className="hidden md:block">ADD ITEMS</p>
        </NavLink>

        {/* List Items */}
        <NavLink
          className={({ isActive }) =>
            `flex items-center gap-3 border border-gray-300 border-r-0 px-3 py-2 rounded-md ${
              isActive ? 'active' : ''
            }`
          }
          to="/list"
        >
          <img className="w-5 h-5" src={assets.order_icon} alt="List Icon" />
          <p className="hidden md:block">LIST ITEMS</p>
        </NavLink>

        {/* Orders */}
        <NavLink
          className={({ isActive }) =>
            `flex items-center gap-3 border border-gray-300 border-r-0 px-3 py-2 rounded-md ${
              isActive ? 'active' : ''
            }`
          }
          to="/orders"
        >
          <img className="w-5 h-5" src={assets.order_icon} alt="Orders Icon" />
          <p className="hidden md:block">ORDERS</p>
        </NavLink>
      </div>
    </div>
  );
};

export default Sidebar;
