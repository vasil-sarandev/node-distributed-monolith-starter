import { Router } from 'express';
import { eventHandlerController } from './event-handler.controller';

export const eventHandlerRouter = Router();

eventHandlerRouter.post('/', eventHandlerController.handleEvent);
