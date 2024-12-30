import { NavLink } from "react-router-dom"

function Navber() {
  const links = (
    <>
      <NavLink
        to="/"
        className={({ isActive }) =>
          isActive ? 'text-yellow-400 font-bold' : 'text-white/90 font-semibold'
        }
      >
        HOME
      </NavLink>
      <NavLink
        to="/contact_us"
        className={({ isActive }) =>
          isActive ? 'text-yellow-400 font-bold' : 'text-white/90 font-semibold'
        }
      >
        CONTACT US
      </NavLink>
      <NavLink
        to="/dashboard"
        className={({ isActive }) =>
          isActive ? 'text-yellow-400 font-bold' : 'text-white/90 font-semibold'
        }
      >
        DASHBOARD
      </NavLink>
      <NavLink
        to="/our_menu"
        className={({ isActive }) =>
          isActive ? 'text-yellow-400 font-bold' : 'text-white/90 font-semibold'
        }
      >
        OUR MENU
      </NavLink>
      <NavLink
        to="/our_shop"
        className={({ isActive }) =>
          isActive ? 'text-yellow-400 font-bold' : 'text-white/90 font-semibold'
        }
      >
        OUR SHOP
      </NavLink>
    </>)
  return (
    <div className="navbar bg-black fixed z-10 bg-opacity-50 max-w-screen-2xl mx-auto">
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