import express from 'express';
import cors from 'cors';
import bodyParser from 'body-parser';
import corsOptions from './src/cors/corsoptions';
import dotenv from 'dotenv';
import { userRouter } from './src/controllers/user.controller';
import { connectToDb } from './src/database/connection';

dotenv.config();

const app = express();
const port = process.env.PORT;

app.use(cors(corsOptions));

app.use(bodyParser.json());

app.use('/api', userRouter);

app.listen(port, async () => {
  await connectToDb();
  console.log(`App listening on port: http://localhost:${port}/`);
});