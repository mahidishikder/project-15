import { Outlet, useLocation } from "react-router-dom"
import Navber from "../components/Navber/Navber"
import Footer from "../components/Footer/Footer"

function Main() {
  const location = useLocation()
  console.log(location)
  const noHeaderFooter = location.pathname.includes('Login') || location.pathname.includes('signUp')
  console.log(noHeaderFooter)
  return (
    <div>
      {noHeaderFooter || <Navber></Navber>}
      <Outlet></Outlet>
      {noHeaderFooter || <Footer></Footer>}
    </div>
  )
}

export default Main