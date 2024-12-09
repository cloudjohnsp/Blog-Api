import express, { Express, Request, Response } from 'express';
import dotenv from 'dotenv';
import MongoSetup from './Infrastructure/Persistence/Mongo';
import blogRouter from './Api/routes/Blog.routes';
import ErrorHandler from './Api/Middleware/ErrorHandler.middleware';

dotenv.config();

const app: Express = express();
const port: string | number = process.env.PORT || 3000;

MongoSetup.Connect();

app.use(express.json());

app.use('/api/v1/blog', blogRouter);

app.use(ErrorHandler.handler);

app.listen(port, () => {
  console.log(`[server]: Server is running at http://localhost:${port}`);
});
