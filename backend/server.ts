import express from 'express';
import bodyParser from 'body-parser';
import { userRouter } from './src/controllers/user.controller'

const app = express();
const port = 5000;

app.use(bodyParser.json());
app.use('/api', userRouter);

app.listen(port, async () => {
  console.log(`App listening on port: http://localhost:${port}/`);
});