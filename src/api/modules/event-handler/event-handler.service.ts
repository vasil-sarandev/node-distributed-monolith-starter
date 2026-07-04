import { IEvent } from './event.model';

class EventHandlerService {
  constructor() {}

  handleEvent = async (event: IEvent) => {
    console.log('Handling event', event);
  };
}

export const eventHandlerService = new EventHandlerService();
