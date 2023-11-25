import React from "react"
import Carousel from "../../components/shared/Carousel"

const CarouselsPage = (props) => {
  return(
    <>
      <Carousel slides="1" infinite="false" />
      <Carousel slides="4" infinite="true" />
      <Carousel slides="10" infinite="false" />
    </>
  )
}

export default CarouselsPage