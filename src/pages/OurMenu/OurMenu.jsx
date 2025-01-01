import { Helmet } from "react-helmet-async"
import ShareMenuBanner from "../../components/ShareMenuBanner/ShareMenuBanner"
import menuBanner from "../../assets/menu/banner3.jpg"
import useMenu from "../../components/hooks/useMenu"
import ShareItems from "../../components/ShareItems/ShareItems"
import ShareHeading from "../../components/ShareHeading/ShareHeading"
import ShareBanner from './../../components/ShareBanner/ShareBanner';
import MenuDessers from '../../assets/menu/dessert-bg.jpeg'
import MenuPizza from '../../assets/menu/pizza-bg.jpg'
import MenuSalad from '../../assets/menu/salad-bg.jpg'
import MenuSoup from '../../assets/menu/soup-bg.jpg'
function OurMenu() {
  const [menu] = useMenu()
  const desserts = menu.filter(item => item.category === 'dessert')
  const pizza = menu.filter(item => item.category === 'pizza')
  const soup = menu.filter(item => item.category === 'soup')
  const salad = menu.filter(item => item.category === 'salad')
  const offerd = menu.filter(item => item.category === 'offered')

  return (
    <div>
      <Helmet>
        <title>Our Menu</title>
      </Helmet>
      <ShareMenuBanner heading={`OUR MENU`} title={`Would you like to try a dish?`} img={menuBanner}>
      </ShareMenuBanner>
      <div className="mt-20">
      <ShareHeading title={`TODAY'S OFFER`} subTitle={`---Don't miss---`}>

</ShareHeading>
      </div>
      <div className="grid md:grid-cols-2 gap-8 ">
      {
        offerd.slice(0,6).map(single => <ShareItems single={single} key={single._id}></ShareItems>)
      }
     </div>
    <div className="flex justify-center my-16">
    <button className="text-gray-700 border-b-4 font-medium  hover:bg-gray-700 hover:text-white/80 py-3 px-7 rounded-lg border-gray-900">View Full  Menu</button>
    </div>

    <section>
      <ShareBanner img={MenuDessers} title={`Lorem Ipsum has been the industry’s standard dummy text ever since the 1500s, when an unknown printer took a galley of type and scrambled it to make a type specimen book.`} heading={`DESSERTS`}></ShareBanner>
      
     
      <div className="grid md:grid-cols-2 gap-8 md:mt-20 mt-10  ">
      {
        desserts.slice(0,6).map(single => <ShareItems single={single} key={single._id}></ShareItems>)
      }
     </div>
    <div className="flex justify-center my-16">
    <button className="text-gray-700 border-b-4 font-medium  hover:bg-gray-700 hover:text-white/80 py-3 px-7 rounded-lg border-gray-900">View Full  Menu</button>
    </div>
    </section>



    <section>
    <ShareBanner img={MenuPizza} title={`Lorem Ipsum has been the industry’s standard dummy text ever since the 1500s, when an unknown printer took a galley of type and scrambled it to make a type specimen book.`} heading={`PIZZA`}></ShareBanner>
    <div className="grid md:grid-cols-2 gap-8 md:mt-20 mt-10  ">
      {
        pizza.slice(0,6).map(single => <ShareItems single={single} key={single._id}></ShareItems>)
      }
     </div>
    <div className="flex justify-center my-16">
    <button className="text-gray-700 border-b-4 font-medium  hover:bg-gray-700 hover:text-white/80 py-3 px-7 rounded-lg border-gray-900">View Full  Menu</button>
    </div>
    </section>



    <section>
    <ShareBanner img={MenuSalad} title={`Lorem Ipsum has been the industry’s standard dummy text ever since the 1500s, when an unknown printer took a galley of type and scrambled it to make a type specimen book.`} heading={`SALADS`}></ShareBanner>
    <div className="grid md:grid-cols-2 gap-8 md:mt-20 mt-10  ">
      {
        salad.slice(0,6).map(single => <ShareItems single={single} key={single._id}></ShareItems>)
      }
     </div>
    <div className="flex justify-center my-16">
    <button className="text-gray-700 border-b-4 font-medium  hover:bg-gray-700 hover:text-white/80 py-3 px-7 rounded-lg border-gray-900">View Full  Menu</button>
    </div>
    </section>


    <section>
    <ShareBanner img={MenuSoup} title={`Lorem Ipsum has been the industry’s standard dummy text ever since the 1500s, when an unknown printer took a galley of type and scrambled it to make a type specimen book.`} heading={`SOUPS`}></ShareBanner>
    <div className="grid md:grid-cols-2 gap-8 md:mt-20 mt-10  ">
      {
        soup.slice(0,6).map(single => <ShareItems single={single} key={single._id}></ShareItems>)
      }
     </div>
    <div className="flex justify-center my-16">
    <button className="text-gray-700 border-b-4 font-medium  hover:bg-gray-700 hover:text-white/80 py-3 px-7 rounded-lg border-gray-900">View Full  Menu</button>
    </div>
    </section>
    
     
    </div>
  )
}

export default OurMenu