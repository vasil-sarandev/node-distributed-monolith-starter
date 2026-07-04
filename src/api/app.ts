import express from 'express';
import { setupApplication } from './setup-app';
import { PORT } from './env-constants';
import { loggerMiddleware } from './middlewares/logger.middleware';
import { errorMiddleware } from './middlewares/error.middleware';
import { appRouter } from './modules/app-router';

const startServer = async () => {
  await setupApplication();
  const app = express();

  // parse jsons
  app.use(express.json());
  // parse urlencoded bodies
  app.use(express.urlencoded({ extended: true }));
  // parse text bodies
  app.use(express.text());
  // parse raw bodies
  app.use(express.raw());

  app.use(loggerMiddleware);
  app.use(appRouter);
  app.use(errorMiddleware);

  app.listen(PORT, () => {
    console.log(`Server is running on port ${PORT}`);
  });
};

startServer();
