import React from 'react'
import { useNavigate } from 'react-router-dom'
import { useSelector } from 'react-redux'
import { propTypes} from "prop-types"

function Protected({children, authentication = true}) {
    Protected.propTypes = {
        children,
        authentication: propTypes.bool
    }
    const navigate = useNavigate()
    const [loader,setLoader] = React.useState(true)
    const authStatus = useSelector(state => state.auth.status)

    React.useEffect(() => {
        if(authentication && authStatus !== authentication){
            navigate("/login")
        } else if(!authentication && authStatus !== authentication){
            navigate("/")
        }
        setLoader(false)
    }, [authStatus, navigate, authentication])

  return loader ? <h1>Loading...</h1> : <>{children}</>
}

export default Protected