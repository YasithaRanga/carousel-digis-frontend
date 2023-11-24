import React from 'react'
import Image from './Image'
import Title from './Title'
import SubTitle from './SubTitle'

const Slide = (props) => {
  return(
    <div className={`container max-w-none w-screen h-full relative flex flex-col items-center justify-center flex-grow-0 flex-shrink-0 flex-100`}>
      <Image image={props.image} />
      <Title>{props.title}</Title>
      <SubTitle>{props.subTitle}</SubTitle>
    </div>
  )
}

export default Slide
