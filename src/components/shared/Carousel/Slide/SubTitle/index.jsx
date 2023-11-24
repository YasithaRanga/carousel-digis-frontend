import React from 'react'

const SubTitle = (props) => {
  return(
    <h5 className="text-lg lg:text-2xl w-[60%] whitespace-pre-wrap text-center text-white font-normal mt-2">{props.children}</h5>
  )
}

export default SubTitle