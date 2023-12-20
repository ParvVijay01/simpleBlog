import { propTypes} from "prop-types"
function Container({children}) {
    Container.propTypes = {
        children: propTypes.node,
    }
  return <div className="w-full max-w-7xl mx-auto p-4">
{children}</div>;


    
}

export default Container