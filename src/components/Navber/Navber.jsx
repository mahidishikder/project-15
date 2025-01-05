import { useContext, useState } from "react"
import { NavLink, useNavigate } from "react-router-dom"
import { authContext } from "../../provider/AuthPorvider"
import Swal from "sweetalert2"
import { CiShoppingCart } from "react-icons/ci"
import useCart from "../hooks/useCart"

function Navber() {

  const [cart] = useCart()
  console.log(cart)

  
  const { user, logOut } = useContext(authContext)
  const navigate = useNavigate()
  const handleLogOut = () => {
    logOut()
      .then(() => {
        console.log("User logged out successfully");
        Swal.fire({
          title: "logout successfull!",
          text: "Your file has been successfull.",
          icon: "success"
        });
        navigate('/Login'); // Redirects to the Login page
      })
      .catch((error) => {
        console.error("Error during logout:", error);
      });
  };

  const links = (
    <>
      <NavLink
        to="/"
        className={({ isActive }) =>
          isActive ? 'text-yellow-400 py-2 font-bold' : 'text-white/90 py-2 font-semibold'
        }
      >
        HOME
      </NavLink>
      <NavLink
        to="/contact_us"
        className={({ isActive }) =>
          isActive ? 'text-yellow-400 py-2 font-bold' : 'text-white/90 py-2 font-semibold'
        }
      >
        CONTACT US
      </NavLink>
      {/* <NavLink
        to="/dashboard"
        className={({ isActive }) =>
          isActive ? 'text-yellow-400 py-2 font-bold' : 'text-white/90 py-2 font-semibold'
        }
      >
        DASHBOARD
      </NavLink> */}
      <NavLink
        to="/our_menu"
        className={({ isActive }) =>
          isActive ? 'text-yellow-400 py-2 font-bold' : 'text-white/90 py-2 font-semibold'
        }
      >
        OUR MENU
      </NavLink>
      <NavLink
        to="/our_shop"
        className={({ isActive }) =>
          isActive ? 'text-yellow-400 py-2 font-bold' : 'text-white/90 py-2 font-semibold'
        }
      >
        OUR SHOP
      </NavLink>
      <NavLink
        to="/secret"
        className={({ isActive }) =>
          isActive ? 'text-yellow-400 py-2 font-bold' : 'text-white/90 py-2 font-semibold'
        }
      >
        SECRET
      </NavLink>
      <NavLink to='/dashboard/cart'>
      <button className="btn">
      <span className="text-2xl "><CiShoppingCart /></span>
        <sup className="badge badge-primary rounded-full">+{cart.length}</sup>
      </button>
      </NavLink>
      {
        user ? (
          <div className="flex gap-2">
            <img
              className="w-10 h-10 rounded-full"
              src={user && user.
                photoURL} alt="" />
            <button
              onClick={handleLogOut}
              className="bg-red-400 py-2 px-3 font-semibold rounded"
            >
              Logout
            </button>
          </div>
        ) : (
          <NavLink
            to="/Login"

            className={({ isActive }) =>
              isActive ? "text-yellow-400 py-2 font-bold" : "text-white/90 py-2 font-semibold"
            }
          >
            LOGIN
          </NavLink>
        )
      }


    </>)
  return (
    <div className="navbar bg-black fixed z-10 py-6 bg-opacity-50 max-w-screen-2xl mx-auto">
      <div className="navbar-start">
        <div className="dropdown">
          <div tabIndex={0} role="button" className="btn btn-ghost lg:hidden">
            <svg
              xmlns="http://www.w3.org/2000/svg"
              className="h-5 w-5"
              fill="none"
              viewBox="0 0 24 24"
              stroke="currentColor">
              <path
                strokeLinecap="round"
                strokeLinejoin="round"
                strokeWidth="2"
                d="M4 6h16M4 12h8m-8 6h16" />
            </svg>
          </div>
          <ul
            tabIndex={0}
            className="menu menu-sm dropdown-content bg-base-100 rounded-box z-[1] mt-3 w-52 p-2 shadow">
            {links}
          </ul>
        </div>
        <div>
          <a className="md:text-2xl text-xl  font-bold text-white/90">BISTRO BOSS</a>
          <p className=" md:text-xl text-lg  font-medium tracking-widest text-white/80	">Restaurant</p>
        </div>
      </div>
      <div className="navbar-center hidden lg:flex">
        <ul className="menu menu-horizontal  space-x-7">
          {links}
        </ul>
      </div>
      <div className="navbar-end">
        <a className="btn btn-primary">Button</a>
      </div>

    </div>
  )
}

export default Navber