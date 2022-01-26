import React from "react";
import { Link } from "react-router-dom";

const NavBar = () => {

  return (
    <ul>
      <li>
        <Link to="/"><button><i className="fas fa-home"></i></button></Link>
      </li>
      <li>
        <Link to="/add"><button>Add Shares</button></Link>
      </li>
      <li>
        <Link to="/calculator"><button>Calculator</button></Link>
      </li>
    </ul>
  );
}

export default NavBar;