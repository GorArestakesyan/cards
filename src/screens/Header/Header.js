import "./header.css";
import React from "react";
import { useMyContext } from "../../App";

function Header() {
  const { addItem, sortItems } = useMyContext();
  const handleAdd = () => {
    addItem(Math.floor(Math.random(0) * 2000).toString());
  };

  return (
    <div className="headerContainer">
      <div className="btnsBox">
        <button className="headerBtns" onClick={(e) => handleAdd()}>
          <span className="btnText"> Add card</span>
        </button>
        <button className="headerBtns" onClick={(e) => sortItems()}>
          <span className="btnText">Sort Cards</span>
        </button>
      </div>
    </div>
  );
}

export default Header;
