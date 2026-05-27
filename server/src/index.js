import express from 'express';
import cors from 'cors';
import dotenv from 'dotenv';
import apiRoutes from './routes/api.js';
import cron from 'node-cron'; // অটোমেশনের জন্য

dotenv.config();

const app = express();

// ১. সিকিউরিটি এবং লগিং মিডলওয়্যার
app.use(cors());
app.use(express.json());
app.use((req, res, next) => {
    console.log(`[${new Date().toISOString()}] ${req.method} ${req.url}`);
    next();
});

// মূল রুট
app.get('/', (req, res) => {
    res.send('<h1 style="color:cyan; background:#0a0b1e; padding:20px; text-align:center;">TRICK A4IF SYSTEM BACKEND IS ONLINE 🟢</h1>');
});

// ২. API রাউটস
app.use('/api/v1', apiRoutes);

// ৩. অটোমেশন: অটো-ক্লিনআপ টাস্ক (প্রতিদিন রাত ১২টায়)
cron.schedule('0 0 * * *', () => {
    console.log('Running automated system cleanup...');
    // এখানে আপনার অটোমেশন ফাংশন কল হবে
});

// ৪. এরর হ্যান্ডলিং মিডলওয়্যার (সিস্টেম ক্র্যাশ রোধ করতে)
app.use((err, req, res, next) => {
    console.error("Global Error Handler:", err.stack);
    res.status(500).json({ error: "Something broke in the system!" });
});

const PORT = process.env.PORT || 5000;
app.listen(PORT, () => {
    console.log(`[A4IF] System Online on port ${PORT}`);
});