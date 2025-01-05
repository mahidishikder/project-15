import { useContext } from "react"
import { authContext } from "../provider/AuthPorvider"
import { Navigate, useLocation } from "react-router-dom"

function PrivateRoutes({children}) {
  const {user,loading} = useContext(authContext)
  const location = useLocation()
  if(loading){
    return <progress className="progress w-56 bg-yellow-600 my-96 "></progress>
  }
  if(user) {
    return children
  }
  return <Navigate to="/Login" state={{ from: location }} replace />

}

export default PrivateRoutes