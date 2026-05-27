import { useState, useEffect } from 'react';
import axios from 'axios';
import Sidebar from '../components/Sidebar';

export default function Dashboard() {
  const [apis, setApis] = useState([]);

  useEffect(() => {
    // API ফেচ করার নিরাপদ ফাংশন
    const fetchApis = async () => {
      try {
        // ব্যাকএন্ড লাইভ না থাকলে লোকালহোস্ট ফলব্যাক হিসেবে কাজ করবে
        const apiUrl = import.meta.env.VITE_API_URL || 'http://localhost:5000';
        const res = await axios.get(`${apiUrl}/api/v1/apis`);
        
        // চেক করা হচ্ছে যে ডাটা আসলেই Array কি না
        if (Array.isArray(res.data)) {
          setApis(res.data);
        } else {
          setApis([]);
        }
      } catch (err) {
        console.error("Backend is offline or not connected:", err);
        setApis([]); // এরর হলে ক্র্যাশ ঠেকানোর জন্য ফাঁকা Array
      }
    };

    fetchApis();
  }, []);

  return (
    <div className="flex min-h-screen bg-[#0a0b1e] text-white">
      <Sidebar />
      <main className="p-8 w-full">
        <h1 className="text-3xl font-bold text-cyan-400 mb-6">API CONTROL CENTER</h1>
        <div className="grid gap-4">
          
          {/* apis যদি Array হয় এবং ডাটা থাকে, তবেই ম্যাপ করবে */}
          {apis && apis.length > 0 ? (
            apis.map(api => (
              <div key={api.id} className="p-4 bg-[#121429] border border-cyan-500/20 rounded-lg flex justify-between items-center shadow-[0_0_15px_rgba(0,242,255,0.1)]">
                <div>
                  <h3 className="font-bold text-lg text-white">{api.name}</h3>
                  <span className={`inline-block mt-2 px-2 py-1 rounded text-xs font-bold ${api.status === 'active' ? 'bg-green-500/20 text-green-400 border border-green-500/50' : 'bg-red-500/20 text-red-400 border border-red-500/50'}`}>
                    {api.status}
                  </span>
                </div>
                <button className="text-red-400 border border-red-500/30 px-4 py-2 rounded hover:bg-red-500 hover:text-white transition-all font-bold">
                  REVOKE
                </button>
              </div>
            ))
          ) : (
            // ব্যাকএন্ড কানেক্ট না থাকলে এই মেসেজটি দেখাবে
            <div className="p-6 bg-[#121429] border border-dashed border-cyan-500/50 rounded-lg text-center text-cyan-500">
              <p className="animate-pulse">Awaiting Backend Server Connection...</p>
              <p className="text-sm mt-2 opacity-70">The database is currently unreachable. Please ensure the backend is live.</p>
            </div>
          )}

        </div>
      </main>
    </div>
  );
}