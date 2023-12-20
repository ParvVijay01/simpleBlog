/* eslint-disable no-unused-vars */
import { propTypes } from "prop-types"
function Button({
    children,
    type = 'button',
    bgColor = "bg-blue-600",
    textColor = "white",
    className = '',
    ...props

}) {
    Button.propTypes = {
        children: propTypes.node,
        type: propTypes.string,
        bgColor: propTypes.string,
        textColor: propTypes.string,
        className: propTypes.string,
    }
  return (
    <button className={`px-4 py-2 rounded-lg ${bgColor} ${textColor} ${className}`} {...props}>
        {children}
    </button>
  )
  
}

export default Button