import React from "react"

const Image = (props) => {
  return(
    <>
      <div className="absolute -z-[9] w-full h-full bg-black opacity-50"></div>
      <img src={props.image} className="absolute -z-10 w-full h-full object-cover" />
    </>
  )
}
export default Image
