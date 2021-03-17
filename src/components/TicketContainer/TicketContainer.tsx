import React, {useEffect, useState} from 'react';
import {useDispatch, useSelector} from "react-redux";
import {getTickets, getTicketsLoading} from "../../redux/tickets-selector";
import Ticket from "./Ticket/Ticket";
import {ITicket} from "../../types/types";
import {loadAllTickets} from "../../redux/tickets-reducer";
import './TicketContainer.scss'
import cn from 'classnames'

const TicketContainer = () => {
  const dispatch = useDispatch()
  const tickets = useSelector(getTickets)
  const isLoading = useSelector(getTicketsLoading)
  const [mainSort, setMainSort] = useState<'cheapest' | 'fastest' | 'optimal'>('optimal')

  useEffect(() => {
    dispatch(loadAllTickets('load'))
  }, [dispatch])

  if (isLoading) {
    return <div>Загрузка...</div>
  }

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

export default TicketContainer;
