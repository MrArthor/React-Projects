import React from "react";
import logo from '../../assets/investment-calculator-logo.png';
import '../../index.css'
function Header(){
return(
    <div>
  <header className="header">
        <img src={logo} alt="logo" />
        <h1>Investment Calculator</h1>
      </header>
    </div>
);
};

export default Header;