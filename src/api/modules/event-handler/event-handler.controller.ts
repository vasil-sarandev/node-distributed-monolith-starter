import { NextFunction, Request, Response } from 'express';
import { IEvent } from './event.model';
import { eventHandlerService } from './event-handler.service';

class EventHandlerController {
  constructor() {}

  handleEvent = async (req: Request<{}, {}, IEvent>, res: Response<{ message: string }>, next: NextFunction) => {
    try {
      const event = req.body;
      await eventHandlerService.handleEvent(event);
      res.status(200).json({ message: 'Event handled' });
    } catch (err) {
      next(err);
    }
  };
}

export const eventHandlerController = new EventHandlerController();
