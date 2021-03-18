import React from 'react';
import './Ticket.scss'
import {ITicket} from "../../../types/types";
import {getTimeDuration, getTimeFlight} from '../../../helpers/dateTime-helper';

type TypeProps = {
  ticket: ITicket
}

const Ticket: React.FC<TypeProps> = ({ticket}) => {

  const timeFlightTo = getTimeFlight(ticket.segments[0].date, ticket.segments[0].duration)
  const timeFlightFrom = getTimeFlight(ticket.segments[1].date, ticket.segments[1].duration)

  return (
    <div className={'ticket'}>
      <div className="ticket__header">
        <div className="ticket__header-price">
          {Math.round(ticket.price).toLocaleString("ru-RU", {style: "currency", currency: "RUB"})}

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
              {timeFlightTo.startHHMM} - {timeFlightTo.endHHMM}
            </div>
          </div>
          <div className="ticket__info-cell">
            <div className="ticket__info-cell-header">
              В пути
            </div>
            <div className="ticket__info-cell-content">
              {getTimeDuration(ticket.segments[0].date, ticket.segments[0].duration)}
            </div>
          </div>
          <div className="ticket__info-cell">
            <div className="ticket__info-cell-header">
              {ticket.segments[0].stops.length} {transferWord(ticket.segments[0].stops.length)}
            </div>
            <div className="ticket__info-cell-content">
              {ticket.segments[0].stops.join(', ')}
            </div>
          </div>
        </div>
        <div className='ticket__info'>
          <div className="ticket__info-cell">
            <div className="ticket__info-cell-header">
              {ticket.segments[1].origin} - {ticket.segments[1].destination}
            </div>
            <div className="ticket__info-cell-content">
              {timeFlightFrom.startHHMM} - {timeFlightFrom.endHHMM}
            </div>
          </div>
          <div className="ticket__info-cell">
            <div className="ticket__info-cell-header">
              В пути
            </div>
            <div className="ticket__info-cell-content">
              {getTimeDuration(ticket.segments[1].date, ticket.segments[1].duration)}
            </div>
          </div>
          <div className="ticket__info-cell">
            <div className="ticket__info-cell-header">
              {ticket.segments[1].stops.length} {transferWord(ticket.segments[1].stops.length)}
            </div>
            <div className="ticket__info-cell-content">
              {ticket.segments[1].stops.join(', ')}
            </div>
          </div>
        </div>
      </div>
    </div>
  );
};


function transferWord(numberTransfers: number) {
  switch (numberTransfers) {
    case 0:
      return 'пересадок'
    case 1:
      return 'пересадка'
    default:
      return 'пересадки'
  }
}

export default Ticket;
