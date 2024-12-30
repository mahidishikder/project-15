
function ShareItems({single}) {
  console.log(single)
  const {image,name,price,recipe} = single
  return (
  <div>
      <div className="flex items-center gap-6">
      <img style={{borderRadius:'0 200px 200px 200px'}} className="w-[120px]" src={image} alt="" />
      <div className="flex">
      <div className="">
        <h3 className="font-semibold text-xl text-gray-700">{name}------------------</h3>
       <p className="text-gray-500">{recipe}</p>
      </div>
      <div>
        <p className="text-yellow-500">{price}</p>
      </div>
      </div>
    </div>
    
  </div>
  )
}

export default ShareItems