import React from "react";
import "./navigation.css";



const Navigation = () => {
    const NavItem = ({header,description}) =>{
    return(
        <li className="navItem">
          <div className="navItemHead">{header}</div>
          <div className="navItemDesc">
            <p className="navItemPar">
             {description}
            </p>
          </div>
        </li>
    )
    }


  return (
    <nav className="navigation">
      <ul className="navList">
        <NavItem header="BEGINNING" description="Suscipit est consequatur nemo voluptatem est labore saepe."></NavItem>
        <NavItem header="LOGS" description="Suscipit est consequatur nemo voluptatem est labore saepe."></NavItem>
        <NavItem header="ACHIVEMENTS" description="Suscipit est consequatur nemo voluptatem est labore saepe."></NavItem>
        <NavItem header="CREATIONS" description="Suscipit est consequatur nemo voluptatem est labore saepe."></NavItem>
        <NavItem header="GAMES" description="Suscipit est consequatur nemo voluptatem est labore saepe."></NavItem>

      </ul>
    </nav>
  );
};

export default Navigation;
