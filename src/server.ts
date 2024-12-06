import express, { Express, Request, Response } from 'express';
import dotenv from 'dotenv';
import MongoSetup from './Infrastructure/Persistence/Mongo';

dotenv.config();

const app: Express = express();
const port: string | number = process.env.PORT || 3000;

app.get('/', (_req: Request, res: Response) => {
  res.send('Express + TypeScript Server');
});

app.listen(port, () => {
  console.log(`[server]: Server is running at http://localhost:${port}`);
});

MongoSetup.Connect();
