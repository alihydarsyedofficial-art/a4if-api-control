import express from 'express';
import cors from 'cors';
import dotenv from 'dotenv';
import apiRoutes from './routes/api.js'; // নতুন রুট ইমপোর্ট

dotenv.config();

const app = express();
app.use(cors());
app.use(express.json());

// Routes
app.use('/api/v1', apiRoutes); // এখন /api/v1/create বা /api/v1/list কল করা যাবে

const PORT = process.env.PORT || 5000;
app.listen(PORT, () => {
    console.log(`[A4IF] System Online on port ${PORT}`);
});