import React from 'react';
import TicketContainer from "../TicketContainer/TicketContainer";
import FilterContainer from "../SortTicketsContainer/FilterContainer";
import './MainLayout.scss'
import Header from "./Header/Header";

const MainLayout: React.FC = () => {
  return (
    <div className={'mainLayout'}>
      <header>
        <Header />
      </header>
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
