import express, { Application } from 'express';
import { ProductRoute } from './app/modules/Product/04.route.product';
import { OrderRoute } from './app/modules/Order/04.order.route';

const app: Application = express();

// middleware
app.use(express.json());

app.get('/', (req, res) => {
  res.send('Welcome to My World!');
});

app.use('/api', ProductRoute);

app.use('/api', OrderRoute)

export default app;
