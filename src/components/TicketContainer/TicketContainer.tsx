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
import {filterFunction, mainSortTickets} from "./sorting-tickets/sorting-functions";

export type MainSortType = 'cheapest' | 'fastest' | 'optimal'

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


export default TicketContainer;
