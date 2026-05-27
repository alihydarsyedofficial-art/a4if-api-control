import { db } from '../config/firebase.js';

// নতুন API যোগ করার ফাংশন
export const createApi = async (req, res) => {
    try {
        const { name, limit, expiryDate } = req.body;
        const newApi = {
            name,
            limit,
            expiryDate,
            status: 'active',
            usage: 0,
            createdAt: new Date().toISOString()
        };
        const docRef = await db.collection('apis').add(newApi);
        res.status(201).json({ id: docRef.id, ...newApi });
    } catch (error) {
        console.error("🔥 Firebase Create Error:", error); // সার্ভারে এরর দেখার জন্য
        res.status(500).json({ error: error.message });
    }
};

// সব API লিস্ট দেখার ফাংশন
export const getApis = async (req, res) => {
    try {
        const snapshot = await db.collection('apis').get();
        const apis = snapshot.docs.map(doc => ({ id: doc.id, ...doc.data() }));
        res.json(apis);
    } catch (error) {
        console.error("🔥 Firebase Fetch Error:", error); // সার্ভারে এরর দেখার জন্য
        res.status(500).json({ error: error.message });
    }
};