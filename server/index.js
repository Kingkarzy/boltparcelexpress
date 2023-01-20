import express from 'express';
import bodyParser from 'body-parser';
import mongoose from 'mongoose';
import cors from 'cors';
import dotenv from 'dotenv';
import helmet from 'helmet';
import morgan from 'morgan';
<<<<<<< HEAD
import usersRoutes from './routes/user.js'
import adminRoutes from './routes/admin.js'
import authRoutes from './routes/auth.js'
=======
import usersRoutes from './routes/user.js';

import adminRoutes from './routes/admin.js';
import authRoutes from './routes/auth.js';
>>>>>>> main


import Admin from './models/Admin.js'; //INJECT DATA MANUALLY INTO DB 
import Location from './models/Location.js';
import Package from './models/Package.js';
import { admin, location, packages } from './data/index.js';


dotenv.config();

const app = express();
app.use(express.json());
app.use(helmet());
app.use(helmet.crossOriginResourcePolicy({ policy: 'cross-origin' }));
app.use(morgan('common'));
app.use(bodyParser.json({ limit: '30mb', extended: true }));
app.use(bodyParser.urlencoded({ limit: '30mb', extended: true }));
app.use(cors());

/** ROUTES */
app.use('/auth', authRoutes);
app.use('/admin', adminRoutes);
app.use('/users', usersRoutes);

/** MONGOOSE SETUP */
const PORT = process.env.port || 5001;
mongoose.set('strictQuery', false);

mongoose
  .connect(process.env.MONGO_DB_URL, {
    useNewUrlParser: true,
    useUnifiedTopology: true,
  })
  .then(() => {
    app.listen(PORT, () => console.log(`Server Port: ${PORT}`));
<<<<<<< HEAD
    // Admin.insertMany(admin);
    // Location.insertMany(location);
    // Package.insertMany(packages);
}).catch((err) => console.log(`${err} did not connect to the server`));
=======
  })
  .catch((err) => console.log(`${err} did not connect to the server`));
>>>>>>> main
