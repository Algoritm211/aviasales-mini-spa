import React, {useEffect, useState} from 'react';
import {useDispatch, useSelector} from "react-redux";
import {getTickets, getTicketsLoading} from "../../redux/tickets-selector";
import Ticket from "./Ticket/Ticket";
import {ITicket} from "../../types/types";
import {loadAllTickets} from "../../redux/tickets-reducer";
import './TicketContainer.scss'
import cn from 'classnames'

type MainSortType = 'cheapest' | 'fastest' | 'optimal'

const TicketContainer = () => {
  const dispatch = useDispatch()
  let tickets = useSelector(getTickets)
  const isLoading = useSelector(getTicketsLoading)
  const [mainSort, setMainSort] = useState<MainSortType>('optimal')

  useEffect(() => {
    dispatch(loadAllTickets('load'))
  }, [dispatch])

  // returning loader
  if (isLoading) {
    return <div>Загрузка...</div>
  }

  // Main sorting
  tickets = mainSortTickets(tickets, mainSort)

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
        {ticketsBlock}
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

export default TicketContainer;
