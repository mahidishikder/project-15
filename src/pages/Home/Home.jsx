import { Helmet } from "react-helmet-async"
import Banner from "./Banner/Banner"
import Category from "./Category/Category"
import Featured from "./Featured/Featured"
import Populer from "./Populer/Populer"
import Testimonial from "./Testimonial/Testimonial"

function Home() {
  return (
    <div>
       <Helmet>
        <title>Home</title>
      </Helmet>
      <Banner></Banner>
      <Category></Category>
      <Populer></Populer>
      <Featured></Featured>
      <Testimonial></Testimonial>
    </div>
  )
}

export default Home