import React, {useEffect, useState} from 'react';
import {useDispatch, useSelector} from "react-redux";
import {getTickets, getTicketsLoading} from "../../redux/tickets-reducer/tickets-selector";
import Ticket from "./Ticket/Ticket";
import {ITicket} from "../../types/types";
import {loadAllTickets} from "../../redux/tickets-reducer/tickets-reducer";
import './TicketContainer.scss'
import cn from 'classnames'
import {getFilters} from "../../redux/filter-reducer/filter-selector";
import Loader from "../Loader/Loader";

type MainSortType = 'cheapest' | 'fastest' | 'optimal'

const TicketContainer = () => {
  const dispatch = useDispatch()
  let tickets = useSelector(getTickets)
  const isLoading = useSelector(getTicketsLoading)
  const [mainSort, setMainSort] = useState<MainSortType>('optimal')
  const filters = useSelector(getFilters)

  useEffect(() => {
    dispatch(loadAllTickets('load'))
  }, [dispatch])

  // Main sorting
  tickets = mainSortTickets(tickets, mainSort)
  // Filter options
  tickets = filterFunction(tickets, filters)

  const ticketsBlock = tickets.map((ticket: ITicket, index ) => {
    return <Ticket ticket={ticket} key={index}/>
  })

  return (
    <div>
      <div className={'filter'}>
        <div
          onClick={() => setMainSort('cheapest')}
          className={cn('filter__cell', {'active': mainSort === 'cheapest'})}>
          Самый дешевый
        </div>
        <div
          onClick={() => setMainSort('fastest')}
          className={cn('filter__cell', {'active': mainSort === 'fastest'})}>
          Самый быстрый
        </div>
        <div
          onClick={() => setMainSort('optimal')}
          data-sort={'optimal'}
          className={cn('filter__cell', {'active': mainSort === 'optimal'})}>
          Оптимальный
        </div>
      </div>
      <div>
        {isLoading ? <Loader /> : ticketsBlock}
      </div>
    </div>
  );
};

function mainSortTickets(tickets: Array<ITicket>, sortType: MainSortType) {
  if (sortType === 'cheapest') {
    tickets = tickets.slice().sort((a, b) => {
      return a.price - b.price;
    })
    return tickets
  } else if (sortType === 'fastest') {
    tickets = tickets.slice().sort((a, b) => {
      return a.segments[0].duration - b.segments[0].duration;
    })
    return tickets
  } else {
    return tickets
  }
}


function filterFunction(tickets: Array<ITicket>,filterArr: number[]) {
  if (filterArr.length === 0 || filterArr.includes(-1)) {
    return tickets
  } else if (filterArr.includes(0)) {
    tickets = tickets.slice().filter(ticket => {
      return ticket.segments[0].stops.length === 0 && ticket.segments[1].stops.length === 0
    })
    return tickets
  } else {
    const minNumberOfTransfers = filterArr.reduce((a,b)=>Math.min(a,b), Infinity);
    tickets = tickets.slice().filter(ticket => {
      return ticket.segments[0].stops.length >= minNumberOfTransfers && ticket.segments[1].stops.length >= minNumberOfTransfers
    })
    return tickets
  }
}

export default TicketContainer;
