import React from 'react';
import TicketContainer from "../TicketContainer/TicketContainer";
import FilterContainer from "../SortTicketsContainer/FilterContainer";
import './MainLayout.scss'
import planeHeader from '../../assets/plane-header.svg'

const MainLayout: React.FC = () => {
  return (
    <div className={'mainLayout'}>
      <div className="header">
        <img src={planeHeader} alt={'header-plane'}/>
      </div>
      <main className={'main'}>
        <div>
          <FilterContainer />
        </div>
        <div>
          <TicketContainer/>
        </div>
      </main>
    </div>
  );
};

export default MainLayout;
