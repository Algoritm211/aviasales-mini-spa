import React from 'react';
import TicketContainer from "../TicketContainer/TicketContainer";
import FilterContainer from "../SortTicketsContainer/FilterContainer";
import './MainLayout.scss'

const MainLayout: React.FC = () => {
  return (
    <div className={'mainLayout'}>
      <div>
        <FilterContainer />
      </div>
      <div>
        <TicketContainer/>
      </div>
    </div>
  );
};

export default MainLayout;
