import { EventsEndpoints } from "../endpoints/events";
import { EVENTS_AVAILABLE_FOR_USERS } from "../mockData/events";
import { Networking } from "../networking";

export const EventsAPI = {
  getEventsAvailableForUser: async () => {
    try {
        // --> Uncomment below when real apis are available

        //   const data = Networking.get(EventsEndpoints.ALL_EVENTS);
        //   return { data };
        
        // Serving data from mock data json 
        return EVENTS_AVAILABLE_FOR_USERS
    } catch (error) {
      return { error };
    }
  },
};
