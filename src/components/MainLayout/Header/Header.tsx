import React from 'react';
import planeHeader from "../../../assets/plane-header.svg";
import './Header.scss'

const Header:React.FC = () => {
  return (
    <div className="header">
      <img src={planeHeader} alt={'header-plane'}/>
    </div>
  );
};

export default Header;
