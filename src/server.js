import path from "node:path";
import 'dotenv/config';
import cors from 'cors';
import express from 'express';
import pinoHTTP from 'pino-http';
import cookieParser from 'cookie-parser';

import authRoutes from "./routes/auth.js";
import contactsRouter from './routes/contacts.js';

import { authenticate } from './middlewares/auth.js';
import { errorHandler } from './middlewares/errorHandler.js';
import { notFoundHandler } from './middlewares/notFoundHandler.js';

import { swaggerDocs } from "./middlewares/swaggerDocs.js";

export const setupServer = () => {

      const app = express();

      app.use('/api-docs', swaggerDocs());

      app.use("/avatars", express.static(path.resolve("src", "public/avatars")));

      app.use(cookieParser());

      app.use(cors());

      const pino = pinoHTTP({
        transport: {
            target: 'pino-pretty',
        },
     });

      app.use(pino);
      app.use(express.json());

      app.use('/auth', authRoutes);
      app.use('/contacts', authenticate, contactsRouter);

      app.use(notFoundHandler);
      app.use(errorHandler);


      const PORT = process.env.PORT || 3000;

     app.listen(PORT, () => {
        console.log(`Server is running on port ${PORT}`);
     });
};

