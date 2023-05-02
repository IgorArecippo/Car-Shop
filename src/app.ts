import express from 'express';
import router from './Routes/Router';
import HttpException from './Middlewares/ErrorHandler';

const app = express();
app.use(express.json());
app.use(router);
app.use(HttpException.errorMiddleware);

export default app;
