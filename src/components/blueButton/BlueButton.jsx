import { useNavigate } from "react-router-dom"
import "./blueButton.css"
import { FiPlus } from "react-icons/fi";
// eslint-disable-next-line react/prop-types
const BlueButton = ({text, link}) => {
    const navigate = useNavigate(); 
  return (
    <div className="blue-btn">
      <span>
        <FiPlus />
      </span>
      
      <button 
        
        onClick={()=> navigate(link)}
      >
        {text}
      </button>
    </div>
  )
}

export default BlueButton