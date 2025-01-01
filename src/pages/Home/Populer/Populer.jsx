
import ShareHeading from "../../../components/ShareHeading/ShareHeading"
import ShareItems from "../../../components/ShareItems/ShareItems"
import useMenu from "../../../components/hooks/useMenu"

function Populer() {
  const [menu] = useMenu()
  const popular = menu.filter(item => item.category === 'popular')
  console.log('populer',popular)
 
  return (
    <div>
      <ShareHeading
      subTitle={`---Check it out---`}
      title={`FROM OUR MENU`}
      >
      </ShareHeading>

     <div className="grid md:grid-cols-2 gap-8 ">
      {
        popular.map(single => <ShareItems single={single} key={single._id}></ShareItems>)
      }
     </div>
    <div className="flex justify-center my-16">
    <button className="text-gray-700 border-b-4 font-medium  hover:bg-gray-700 hover:text-white/80 py-3 px-7 rounded-lg border-gray-900">View Full  Menu</button>
    </div>
    </div>
  )
}

export default Populer