// import { useQuery } from "@tanstack/react-query"
// import useAxiosSecure from "./useAxiosSecure"
// import { useContext } from "react"
// import { authContext } from "../../provider/AuthPorvider"


// function useCart() {
//   const axiosSecure = useAxiosSecure()
//   const {user} = useContext(authContext)
// const {data: cart=[]} = useQuery({
//   queryKey:['cart', user?.email],
//   queryFn: async () => {
//      const res = await axiosSecure.get(`/carts?email=${user.email}`)
//      return res.data
//    }
// })
// return [cart]
// }

// export default useCart.

import { useQuery } from '@tanstack/react-query';
import useAxiosSecure from './useAxiosSecure';
import { useContext } from 'react';
import { authContext } from '../../provider/AuthPorvider';

function useCart() {
  const axiosSecure = useAxiosSecure(); 
  const {user} = useContext(authContext)
  const {refetch, data: cart = [] } = useQuery({
    queryKey: ['cart',user?.email], 
    queryFn: async () => {
      const res = await axiosSecure.get(`/carts?email=${user.email}`);
      return res.data;
    }
  });

  return [cart,refetch];
}

export default useCart;
