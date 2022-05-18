import { useEffect } from "react";
import ReactPortal from "./ReactPortal";



function Modal(props) {
  const {handleClose, isOpen} = props
  useEffect(() => {
    const closeOnEscapeKey = (e) => (e.key === "Escape" ? handleClose() : null);
    document.body.addEventListener("keydown", closeOnEscapeKey);
    return () => {
      document.body.removeEventListener("keydown", closeOnEscapeKey);
    };
  }, [handleClose]);

  if (!isOpen) return null;

  const onClickHandler = () => { 
        handleClose()
   }

  
  return (
    <ReactPortal>
      <div className="modal-wrapper" onClick={onClickHandler}>
        <div className="modal-content" onClick={(e) => { e.stopPropagation() }} >{props.children}</div>
      </div>
    </ReactPortal>
  );
}

export default Modal;