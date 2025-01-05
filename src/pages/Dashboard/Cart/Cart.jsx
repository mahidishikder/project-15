import { RiDeleteBin6Line } from "react-icons/ri";
import useCart from "../../../components/hooks/useCart"

function Cart() {
  const [cart,refetch] = useCart()
  const totalPrice = cart.reduce((total, item) => total + item.price, 0);
  return (
  <div>
      <div className="flex justify-between mt-3">
      
      <h2 className="text-3xl font-bold">Items : {cart.length}</h2>
      <h2 className="text-3xl font-bold">Total Price : $<span className="text-violet-600">{totalPrice}</span></h2>
      <button className="btn btn-primary">pay</button>
    </div>

    <div className="overflow-x-auto">
  <table className="table">
    {/* head */}
    <thead>
      <tr className="bg-blue-500 text-xl font-bold text-black">
        
      
        <th>Item image</th>
        <th>Item Name</th>
        <th>Price</th>
        <th>Action</th>
        
      </tr>
    </thead>
    <tbody>
   {
    cart.map(item =>  <tr key={item._id}>
      
      <td>
        <div className="flex items-center gap-3">
          <div className="avatar">
            <div className="mask mask-squircle h-12 w-12">
              <img
                src={item.image}
                alt="Avatar Tailwind CSS Component" />
            </div>
          </div>
          
        </div>
      </td>
      <td>
        
        <br />
        <span className="badge badge-ghost font-semibold">{item.name}</span>
      </td>
      <td className="text-blue-600 font-bold">${item.price}</td>
      <th>
        <button className="btn btn-ghost text-lg text-red-600"><RiDeleteBin6Line /></button>
      </th>
    </tr> )
   }
     

    </tbody>

  </table>
</div>

  </div>
  )
}

export default Cart