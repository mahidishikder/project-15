
function ShareHeading({title,subTitle}) {
  return (
    <div>
      <p className="text-center text-yellow-500 text-lg">{subTitle}</p>
      <h2 className="text-center text-4xl border-y-4 w-[350px] mx-auto mt-4 mb-12 py-5">{title}</h2>
    </div>
  )
}

export default ShareHeading