import express from 'express';
import cors from 'cors';
import bodyParser from 'body-parser';
import corsOptions from './src/cors/corsoptions';
import { userRouter } from './src/controllers/user.controller';
import { connectToDb } from './src/database/connection';
import { handleSeed } from './src/database/seeding';
import { errorHandlerMiddleware } from './src/middleware/error.middleware';
import { expressLogger } from './src/loggers/endpoint.logger';
import { healthRouter } from './src/controllers/health.controller';
import { pizzaRouter } from './src/controllers/products/menuPizza.controller';
import { saladRouter } from './src/controllers/products/menuSalad.controller';
import { drinkRouter } from './src/controllers/products/menuDrink.controller';
import { otherItemRouter } from './src/controllers/products/menuOtherItem.controller';
import { orderRouter } from './src/controllers/order.controller';
import { popularityRouter } from './src/controllers/products/popularity.controller';

const app = express();
const port = process.env.BACKEND_PORT;

app.use(cors(corsOptions));

app.use(expressLogger);

app.use(bodyParser.json());

app.use('/api', healthRouter, userRouter);
app.use('/api/products', pizzaRouter, saladRouter, drinkRouter, otherItemRouter, popularityRouter);
app.use('/api/checkout', orderRouter);

app.use(errorHandlerMiddleware);

app.listen(port, async () => {
  await connectToDb();
  await handleSeed();
  console.log(`App listening on port: http://localhost:${port}/`);
});