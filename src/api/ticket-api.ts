import {instanceAxios} from "./api-config";
import {ITicket} from "../types/types";


type GetTicketsType = {
  tickets: Array<ITicket>
  stop: boolean
}

export const TicketAPI = {
  getSearchId: () => {
    return instanceAxios.get<{searchId: string}>('search')
      .then(data => data.data)
  },

  getTickets: (searchId: string) => {
    return instanceAxios.get<GetTicketsType>(`tickets?searchId=${searchId}`)
      .then(data => data.data)
  }


}
