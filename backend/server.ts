import express from 'express';
import cors from 'cors';
import bodyParser from 'body-parser';
import corsOptions from './src/cors/corsoptions';
import { userRouter } from './src/controllers/user.controller';
import { connectToDb, dbStatus } from './src/database/connection';
import { handleSeed } from './src/database/seeding';
import { errorHandlerMiddleware } from './src/middleware/error.middleware';
import { expressLogger } from './src/loggers/endpoint.logger';

const app = express();
const port = process.env.BACKEND_PORT;

app.use(cors(corsOptions));

app.use(expressLogger);

app.use(bodyParser.json());

app.use('/api', userRouter);

app.get('/health', (req, res) => {
  const dbHealth = dbStatus();
  const message = `Application is healthy. Database status: ${dbHealth}`;
  res.status(200).json({ message });
});

app.use(errorHandlerMiddleware);

app.listen(port, async () => {
  await connectToDb();
  await handleSeed();
  console.log(`App listening on port: http://localhost:${port}/`);
});