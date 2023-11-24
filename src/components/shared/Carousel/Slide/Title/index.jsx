import React from 'react'

const Title = (props) => {
  return(
    <h1 className="text-5xl w-[60%] whitespace-pre-wrap text-center text-white font-normal">{props.children}</h1>
  )
}

export default Title