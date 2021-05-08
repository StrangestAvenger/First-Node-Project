import express from 'express';
import { RegisterRoutes } from './routes/routes';

export const app=express();
app.set('port',5000);

app.use(express.json());
RegisterRoutes(app);
