import { CiMenuBurger } from "react-icons/ci";
import { FaCalendar, FaCartArrowDown, FaHome, FaList, FaRegStar } from "react-icons/fa";
import { NavLink, Outlet } from "react-router-dom";

function Dashboard() {
  return (
    <div className="flex">
      <div className="w-72 min-h-screen bg-orange-300">
        <ul className="space-y-6 pl-4 pt-10">
          {/* User Home */}
          <li className="btn p-4 rounded-md shadow-md hover:bg-orange-500 transition-all duration-200">
            <NavLink
              to="/cart/userHome"
              className="flex items-center space-x-3 text-lg font-semibold text-black hover:text-gray-800"
            >
              <FaHome />
              <span>USER HOME</span>
            </NavLink>
          </li>
          {/* Reservation */}
          <li className="btn p-4 rounded-md shadow-md hover:bg-orange-500 transition-all duration-200">
            <NavLink
              to="/cart/reservation"
              className="flex items-center space-x-3 text-lg font-semibold text-black hover:text-gray-800"
            >
              <FaCalendar />
              <span>RESERVATION</span>
            </NavLink>
          </li>
          {/* My Cart */}
          <li className="btn p-4 rounded-md shadow-md hover:bg-orange-500 transition-all duration-200">
            <NavLink
              to="/cart/dashboard"
              className="flex items-center space-x-3 text-lg font-semibold text-black hover:text-gray-800"
            >
              <FaCartArrowDown />
              <span>MY CART</span>
            </NavLink>
          </li>
          {/* Add Review */}
          <li className="btn p-4 rounded-md shadow-md hover:bg-orange-500 transition-all duration-200">
            <NavLink
              to="/cart/review"
              className="flex items-center space-x-3 text-lg font-semibold text-black hover:text-gray-800"
            >
              <FaRegStar />
              <span>ADD REVIEW</span>
            </NavLink>
          </li>
          {/* My Booking */}
          <li className="btn p-4 rounded-md shadow-md hover:bg-orange-500 transition-all duration-200">
            <NavLink
              to="/cart/booking"
              className="flex items-center space-x-3 text-lg font-semibold text-black hover:text-gray-800"
            >
              <FaList />
              <span>MY BOOKING</span>
            </NavLink>
          </li>
          <div className="divider"></div>
          <NavLink
              to="/"
              className="flex items-center space-x-3 text-lg font-semibold text-black hover:text-gray-800"
            >
              <FaHome />
              <span>HOME</span>
            </NavLink>
            <NavLink
              to="/dashboard/menu"
              className="flex items-center space-x-3 text-lg font-semibold text-black hover:text-gray-800"
            >
              <CiMenuBurger />
              <span>MENU</span>
            </NavLink>
        </ul>
      </div>

      <div className="flex-1 bg-gray-200 p-6">
        <Outlet />
      </div>
    </div>
  );
}

export default Dashboard;
