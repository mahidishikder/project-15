import { useEffect, useState } from "react"
import ShareHeading from "../../../components/ShareHeading/ShareHeading"
import ShareItems from "../../../components/ShareItems/ShareItems"

function Populer() {
  const [menu,setMenu] = useState([])
  console.log(menu)
  useEffect(() => {
    fetch(`menu.json`)
    .then(res => res.json())
    .then(data => {
     const filter = data.filter(item => item.category === 'popular')
      setMenu(filter)
    })
  },[])
  return (
    <div>
      <ShareHeading
      subTitle={`---Check it out---`}
      title={`FROM OUR MENU`}
      >
      </ShareHeading>

     <div className="grid md:grid-cols-2 gap-8 ">
      {
        menu.map(single => <ShareItems single={single} key={single._id}></ShareItems>)
      }
     </div>
    <div className="flex justify-center my-16">
    <button className="text-gray-700 border-b-4 font-medium  hover:bg-gray-700 hover:text-white/80 py-3 px-7 rounded-lg border-gray-900">View Full  Menu</button>
    </div>
    </div>
  )
}

export default Populer