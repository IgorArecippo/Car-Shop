import express from 'express';
import router from './Routes/Router';

const app = express();
app.use(router);

export default app;
