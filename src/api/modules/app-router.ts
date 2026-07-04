import { Router } from 'express';
import { userRouter } from './user/user.router';
import { productRouter } from './product/product.router';
import { eventHandlerRouter } from './event-handler/event-handler.router';

export const appRouter = Router();

appRouter.use('/api/user', userRouter);
appRouter.use('/api/product', productRouter);
appRouter.use('/api/event', eventHandlerRouter);
