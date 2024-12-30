import Banner from "./Banner/Banner"
import Category from "./Category/Category"
import Featured from "./Featured/Featured"
import Populer from "./Populer/Populer"

function Home() {
  return (
    <div>
      <Banner></Banner>
      <Category></Category>
      <Populer></Populer>
      <Featured></Featured>
    </div>
  )
}

export default Home