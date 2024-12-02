import React from "react";
import "./header.css";

const Header = () => {
  return (
    <div className="headerDiv">
      <div className="headerContent">
        <div className="headerContentLeft">
          <div className="headerLevelDiv">
            <span className="levelSpan"><span className="child">48</span>LEVEL</span>
            
          </div>
          <button className="headerAddBtn"><svg className="child" width="12" height="12" viewBox="0 0 16 16" xmlns="http://www.w3.org/2000/svg">
  <path d="M8 2V8H2V10H8V16H10V10H16V8H10V2H8Z" />
</svg>
</button>
          <span className="levelSpan"><span className="child">1,425</span>COINS AWARDED</span>

        </div>
        <div className="headerContentRight">
            <span className="headerTime">SERVER TIME: <span className="child">8:42</span></span>
            <span className="headerTime">SERVER TIME: <span className="child">8:42</span></span>

        </div>
      </div>
    </div>
  );
};

export default Header;
