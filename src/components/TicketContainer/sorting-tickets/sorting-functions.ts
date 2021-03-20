import {ITicket} from "../../../types/types";
import {MainSortType} from "../TicketContainer";


export function mainSortTickets(tickets: Array<ITicket>, sortType: MainSortType) {
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


export function filterFunction(tickets: Array<ITicket>,filterArr: number[]) {
  if (filterArr.length === 0 || filterArr.includes(-1)) {
    return tickets
  } else if (filterArr.includes(0)) {
    tickets = tickets.slice().filter(ticket => {
      return ticket.segments[0].stops.length === 0 && ticket.segments[1].stops.length === 0
    })
    return tickets
  } else {
    let filteredTickets = [] as Array<ITicket>
    for (let i = 0; i < tickets.length; i++) {
      if (filterArr.includes(tickets[i].segments[0].stops.length) &&  filterArr.includes(tickets[i].segments[1].stops.length)) {
        filteredTickets.push(tickets[i])
      }
    }
    return filteredTickets
  }
}
