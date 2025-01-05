import { useContext } from "react";
import { authContext } from "../../provider/AuthPorvider";
import { useLocation, useNavigate } from "react-router-dom";
import Swal from "sweetalert2";
import axios from "axios";
import useAxiosSecure from "../hooks/useAxiosSecure";
import useCart from "../hooks/useCart";

function ShareCard({item}) {
  const [,refetch] = useCart()
  const location = useLocation()
  const navigate = useNavigate()
  const axiosSecure = useAxiosSecure()
  const {user} = useContext(authContext)
  const {price,name,image,recipe,_id} = item;
  const handleToCard = (getItems) => {
    if(user && user.email){
      // sent the database info
      const cardItmes = {
        cartId : _id,
        uEmail : user.email,
        name,
        image,
        price 
      }
      axiosSecure.post('/carts',cardItmes)
      .then(res => {
        console.log(res.data)
        if(res.data.insertedId){
          Swal.fire({
            title: "cart add!",
            text: `Your ${name} has been cart.`,
            icon: "success"
          });
          refetch()
        }
      })
    } else{
      Swal.fire({
        title: "You are not login",
        text: "Please login add to the cart",
        icon: "warning",
        showCancelButton: true,
        confirmButtonColor: "#3085d6",
        cancelButtonColor: "#d33",
        confirmButtonText: "Yes,i want to login"
      }).then((result) => {
        if (result.isConfirmed) {
          navigate(`/Login`, {state:{from:location },replace: true})
          
        }
      });
      
    }
  }
  return (
    <div className="card  shadow-xl">
    <figure className=" relative">
      <img
      className="rounded-lg"
        src={image}
        alt="Shoes" />
        <p className="  absolute top-5 right-8 bg-slate-800 px-3 py-1 rounded-lg text-white/90">${price}</p>
    </figure>
    <div className="p-5 flex flex-col justify-center items-center space-y-8">
      <h2 className="card-title">{name}</h2>
      <p>{recipe}</p>
      <div className="card-actions justify-end">
        <button onClick={() => handleToCard(item)} className="text-yellow-500 border-b-4 font-medium bg-gray-100  hover:bg-gray-700 hover:text-white/80 py-3 px-7 rounded-lg border-yellow-500 shadow">Order</button>
      </div>
    </div>
  </div>
  )
}

export default ShareCard