import React from "react";
import "./body.css";
import { useMyContext } from "../../App";
function Body() {
  const { nums, deleteItem } = useMyContext();
  return (
    <div className="bodyContainer">
      <div className="allNums">
        {nums.map((elm, i) => {
          return (
            <div className="eachNumBox">
              <span className="closeBtn" onClick={() => deleteItem(elm)}>
                X
              </span>
              <h3 className="eachNumText">{elm.value}</h3>
              <div></div>
            </div>
          );
        })}
      </div>
    </div>
  );
}

export default Body;
