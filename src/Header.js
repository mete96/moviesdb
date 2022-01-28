import React from "react";
import "./Header.css";
import { AiOutlineSearch } from "react-icons/ai";

function Header() {
  return (
    <div>
      <nav className="navmenu">
        <h1 className="logo">MovieDB</h1>
        <ul className="ulmenu"></ul>
        <div className="select-container">
          <select name="iller" id="iller">
            <option value="manavgat">Action (Just for visual.)</option>
            <option value="saab">Comedy</option>
          </select>
          <div className="arama">
            <input type="text" placeholder="Ignore header... :)" id="texto" />{" "}
            <AiOutlineSearch id="ikon" />
          </div>{" "}
        </div>
        <div></div>
      </nav>
    </div>
  );
}

export default Header;
