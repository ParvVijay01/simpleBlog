/* eslint-disable no-unused-vars */
/* eslint-disable react/prop-types */
import React, {useId} from 'react'
import { propTypes } from "prop-types"

const Input = React.forwardRef( function Input({
    label,
    type = "text",
    className = "",
    ...props
}, ref){
    const id = useId()
    Input.propTypes = {
        label: propTypes.string,
        type: propTypes.string,
        className: propTypes.string
    }
    return(
        <div className="width-full">
            {label && <label className='inline-block mb-1 pl-1' htmlFor={id}>{label}</label>}
            <input 
            type={type}
            className={`px-3 py-2 rounded-lg bg-white text-black outline-none focus:bg-gray-500 duration-200 border border-gray-200 w-full ${className}` }
            ref= {ref}
            {...props}
            id= {id}
            />
        </div>
    )
})

export default Input