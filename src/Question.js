import React, { useState } from "react";
import { AiOutlineMinus, AiOutlinePlus } from "react-icons/ai";
const Question = ({ id, title, info }) => {
  const [isExpand, setIsExpand] = useState(true);

  return (
    <div className="dropShadow questionStyles border border-1">
      <div className="d-flex flex-row justify-content-between ps-3 pe-3">
        <h3>{title}</h3>
        <button
          type="button"
          className="btn btn-primary"
          onClick={() => {
            setIsExpand(!isExpand);
          }}
        >
          {isExpand ? "Expand":"Collapse"}
        </button>
      </div>
      {/* {readMore? info: `${info.substring(0,200)}......`} */}
      <p className="p-3">{isExpand? '': info }</p>
    </div>
  );
};

export default Question;
