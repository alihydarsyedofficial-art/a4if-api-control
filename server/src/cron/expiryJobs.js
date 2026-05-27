import cron from 'node-cron';
import { db } from '../config/firebase.js';

export const initCronJobs = () => {
  cron.schedule('* * * * *', async () => {
    const now = new Date().toISOString();
    const snapshot = await db.collection('apis').where('status', '==', 'active').get();
    
    snapshot.forEach(async (doc) => {
      const data = doc.data();
      if (data.expiryDate && data.expiryDate < now) {
        await db.collection('apis').doc(doc.id).update({ status: 'expired' });
      }
    });
  });
};