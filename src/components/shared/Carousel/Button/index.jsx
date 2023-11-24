const Button = (props) => {
  return(
    <button onClick={props.onClick} className={`text-white absolute z-10 text-[50px] top-[50%] translate-y-[-50%] opacity-50 hover:opacity-80 ease-in transition-all ${props.className}`}>
      {props.children}
    </button>
  )
}

export default Button