import { useState, useEffect } from 'react'
import axios from 'axios'
import Button from './Button'
import { FaAngleLeft, FaAngleRight } from 'react-icons/fa'
import Slide from './Slide'

const Carousel = (props) => {
  const slidesCount = props.slides ? parseInt(props.slides) : 10
  const isInfinite = props.infinite === "true" ? true : false
  const [slideNumber, setSlideNumber] = useState(0)
  const [slidesData, setSlidesData] = useState([])

  const getSlides = async () => {
    await axios.get(`${import.meta.env.VITE_BACKEND_URL}/api/carousel?slides=${slidesCount}`).then(res => setSlidesData(res.data.slides))
  }

  const nextSlide = () => {
    if(slideNumber === slidesData.length - 1){
      if(isInfinite){
        setSlideNumber(0)
      }
    }else{
      setSlideNumber(slideNumber + 1)
    }
  }

  const previousSlide = () => {
    if(slideNumber === 0){
      if(isInfinite){
        setSlideNumber(slidesData.length -1)
      }
    }else{
      setSlideNumber(slideNumber - 1)
    }
  }

  useEffect(() => {
    getSlides()
  }, [])

  return(
    <div className="container relative max-w-none w-full h-screen overflow-hidden bg-black">
      {slidesCount !== 1 ?
        <>
          <Button onClick={() => previousSlide()} className="left-5 lg:left-20"><FaAngleLeft /></Button>
          <Button onClick={() => nextSlide()} className="right-5 lg:right-20"><FaAngleRight /></Button>
        </>
        : ''
      }
      <div className={`container max-w-none w-full h-full whitespace-nowrap inline-flex transition-all ease-in-out delay-500`} style={{transform: `translateX(-${slideNumber * 100}%)`}}>
        {slidesData.map((slide, index) =>
          (
            <Slide key={index} title={slide.title} subTitle={slide.subTitle} image={slide.image} />  
          )
        )}
      </div>
    </div>
    
  )
}

export default Carousel