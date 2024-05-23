import express, { Application } from 'express';
import { ProductRoute } from './app/modules/Product/04.route.product';

const app: Application = express();

// middleware
app.use(express.json());

app.get('/', (req, res) => {
  res.send('Hello World!');
});

app.use('/api', ProductRoute);

export default app;
