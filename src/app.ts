import express from 'express';
import hpp from 'hpp';
import helmet from 'helmet';
import morgan from 'morgan';
import cors from 'cors';
import cookieParser from 'cookie-parser';
import { IRoute } from '@/interfaces';
import { logger, stream } from '@/utils';
import { errorMiddleware, QueryMiddleware } from '@/middlewares';
import { sequelize } from '@/models';
import config from '@config';

export default class App {
  public app: express.Application;
  public env: string;
  public port: string | number;

  constructor(routes: IRoute[]) {
    this.app = express();
    this.env = config.NODE_ENV || 'development';
    this.port = config.SERVER.PORT || 8080;

    this.connectToDatabase().then(() => {
      this.initializeMiddlewares();
      this.initializeRoutes(routes);
      this.initializeErrorHandling();
    });
  }

  private async connectToDatabase() {
    await sequelize.sync({ force: false, alter: true });
  }

  public listen() {
    this.app.listen(this.port, () => {
      logger.info(`=================================`);
      logger.info(`======= ENV: ${this.env} =======`);
      logger.info(`🚀 App listening on the port ${this.port}`);
      logger.info(`=================================`);
    });
  }

  public getServer() {
    return this.app;
  }

  private initializeMiddlewares() {
    this.app.use(morgan(config.LOG_FORMAT, { stream }));
    this.app.use(cors({ origin: config.ORIGIN, credentials: config.CREDENTIALS }));
    this.app.use(hpp());
    this.app.use(helmet());
    this.app.use(express.json());
    this.app.use(express.urlencoded({ extended: true }));
    this.app.use(cookieParser());
    this.app.use(QueryMiddleware);
  }

  private initializeRoutes(routes: IRoute[]) {
    routes.forEach(route => {
      this.app.use('/', route.router);
    });
    this.app.use((req, res) => {
      res.status(404).json({ message: 'Not Found' });
    });
  }

  private initializeErrorHandling() {
    this.app.use(errorMiddleware);
  }
}
