import React from 'react';
import './Ticket.scss'
import {ITicket} from "../../../types/types";

type TypeProps = {
  ticket: ITicket
}

const Ticket: React.FC<TypeProps> = ({ticket}) => {
  return (
    <div className={'ticket'}>
      <div className="ticket__header">
        <div className="ticket__header-price">
          {ticket.price}
        </div>
        <div className="ticket__header-logo">
          <img src={`https://pics.avs.io/99/36/${ticket.carrier}.png`} alt="carrier"/>
        </div>
      </div>
      <div className={'ticket__content'}>
        <div className='ticket__info'>
          <div className="ticket__info-cell">
            <div className="ticket__info-cell-header">
              {ticket.segments[0].origin} - {ticket.segments[0].destination}
            </div>
            <div className="ticket__info-cell-content">
              10:45 – 08:00
            </div>
          </div>
          <div className="ticket__info-cell">
            <div className="ticket__info-cell-header">
              В пути
            </div>
            <div className="ticket__info-cell-content">
              2 часа 15 минут
            </div>
          </div>
          <div className="ticket__info-cell">
            <div className="ticket__info-cell-header">
              {ticket.segments[1].stops.length} пересадки
            </div>
            <div className="ticket__info-cell-content">
              {ticket.segments[0].stops}
            </div>
          </div>
        </div>
        <div className='ticket__info'>
          <div className="ticket__info-cell">
            <div className="ticket__info-cell-header">
              {ticket.segments[1].origin} - {ticket.segments[1].destination}
            </div>
            <div className="ticket__info-cell-content">
              10:45 – 08:00
            </div>
          </div>
          <div className="ticket__info-cell">
            <div className="ticket__info-cell-header">
              В пути
            </div>
            <div className="ticket__info-cell-content">
              45 минут
            </div>
          </div>
          <div className="ticket__info-cell">
            <div className="ticket__info-cell-header">
              {ticket.segments[1].stops.length} пересадки
            </div>
            <div className="ticket__info-cell-content">
              {ticket.segments[1].stops}
            </div>
          </div>
        </div>
      </div>
    </div>
  );
};

export default Ticket;
