import { useState, useEffect } from 'react';
import axios from 'axios';
import { getAuth, signOut } from "firebase/auth";
import Sidebar from '../components/Sidebar';

export default function Dashboard() {
  const [apis, setApis] = useState([]);
  const [name, setName] = useState('');
  const [limit, setLimit] = useState('');

  // ডাটা রিফ্রেশ ফাংশন
  const fetchApis = async () => {
    try {
      const apiUrl = import.meta.env.VITE_API_URL || 'http://localhost:5000';
      const res = await axios.get(`${apiUrl}/api/v1/list`);
      setApis(Array.isArray(res.data) ? res.data : (res.data.data || []));
    } catch (err) {
      console.error("Error fetching data:", err);
    }
  };

  useEffect(() => { fetchApis(); }, []);

  // API ইনজেকশন (নতুন যোগ করা)
  const handleInject = async () => {
    if (!name || !limit) return alert("Fill all fields");
    const apiUrl = import.meta.env.VITE_API_URL || 'http://localhost:5000';
    await axios.post(`${apiUrl}/api/v1/create`, { name, limit, expiryDate: "2026-12-31" });
    setName(''); setLimit('');
    fetchApis();
  };

  // লগআউট ফাংশন
  const handleLogout = () => {
    signOut(getAuth()).then(() => window.location.href = '/login');
  };

  return (
    <div className="flex min-h-screen bg-[#0a0b1e] text-white">
      <Sidebar />
      <main className="p-8 w-full">
        <div className="flex justify-between items-center mb-6">
          <h1 className="text-3xl font-bold text-cyan-400">API CONTROL CENTER</h1>
          <button onClick={handleLogout} className="text-red-500 font-bold border border-red-500 px-4 py-2 rounded hover:bg-red-500 hover:text-white transition-all">
            LOGOUT
          </button>
        </div>

        {/* API ইনজেকশন ফর্ম */}
        <div className="mb-8 p-6 bg-[#121429] border border-cyan-500/30 rounded-lg flex gap-4">
          <input className="bg-black p-2 rounded text-white border border-cyan-500/50 w-full" placeholder="API Name" value={name} onChange={(e) => setName(e.target.value)} />
          <input className="bg-black p-2 rounded text-white border border-cyan-500/50 w-full" placeholder="Limit" value={limit} onChange={(e) => setLimit(e.target.value)} />
          <button onClick={handleInject} className="bg-cyan-600 px-6 py-2 rounded font-bold hover:bg-cyan-500 transition-all">
            INJECT API
          </button>
        </div>

        <div className="grid gap-4">
          {apis.length > 0 ? (
            apis.map(api => (
              <div key={api.id} className="p-4 bg-[#121429] border border-cyan-500/20 rounded-lg flex justify-between items-center">
                <div>
                  <h3 className="font-bold text-lg">{api.name}</h3>
                  <span className="text-xs bg-green-500/20 text-green-400 px-2 py-1 rounded border border-green-500/50">ACTIVE</span>
                </div>
                <button className="text-red-400 border border-red-500/30 px-4 py-2 rounded hover:bg-red-500 hover:text-white transition-all font-bold">REVOKE</button>
              </div>
            ))
          ) : (
            <div className="p-6 bg-[#121429] border border-dashed border-cyan-500/50 rounded-lg text-center text-cyan-500">
              No API Data Found...
            </div>
          )}
        </div>
      </main>
    </div>
  );
}