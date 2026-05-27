import express from 'express';
import cors from 'cors';
import dotenv from 'dotenv';
import apiRoutes from './routes/api.js';

dotenv.config();

const app = express();
app.use(cors());
app.use(express.json());

// মূল লিংকে (Root Route) গেলে এই ওয়েলকাম মেসেজটি দেখাবে
app.get('/', (req, res) => {
    res.send('<h1 style="color:cyan; background:#0a0b1e; padding:20px; text-align:center;">TRICK A4IF SYSTEM BACKEND IS ONLINE 🟢</h1>');
});

// Routes
app.use('/api/v1', apiRoutes);

const PORT = process.env.PORT || 5000;
app.listen(PORT, () => {
    console.log(`[A4IF] System Online on port ${PORT}`);
});