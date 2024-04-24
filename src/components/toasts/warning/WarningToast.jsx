import { useEffect } from 'react'
import './warningToast.css'

// eslint-disable-next-line react/prop-types
const WarningToast = ({ message, func }) => {
  useEffect(() => {
    const overlay = document.querySelector(".warning__overlay");
    const cancelBtn = document.querySelector(".warning__overlay .cancel");

    const handleOverlayClick = () => {
      overlay.style.display = "none";
    };

    const handleCancelClick = () => {
      overlay.style.display = "none";
    };

    overlay.addEventListener("click", handleOverlayClick);
    cancelBtn.addEventListener("click", handleCancelClick);

    return () => {
      overlay.removeEventListener("click", handleOverlayClick);
      cancelBtn.removeEventListener("click", handleCancelClick);
    };
  }, []);

  return (
    <div className="warning__overlay">
      <div className="warning__box">
        <h3>{message}</h3>
        <div className="btns">
          <button className="yes" onClick={func}>نعم</button>
          <button className="cancel">الغاء</button>
        </div>
      </div>
    </div>
  );
}

export default WarningToast;
