import { useState, useEffect } from 'react';
import axios from 'axios';
import Sidebar from '../components/Sidebar';

export default function Dashboard() {
  const [apis, setApis] = useState([]);

  useEffect(() => {
    axios.get(`${import.meta.env.VITE_API_URL}/api/v1/apis`)
      .then(res => setApis(res.data))
      .catch(err => console.error(err));
  }, []);

  return (
    <div className="flex">
      <Sidebar />
      <main className="p-8 w-full">
        <h1 className="text-3xl font-bold text-cyan-400 mb-6">API Management</h1>
        <div className="grid gap-4">
          {apis.map(api => (
            <div key={api.id} className="p-4 bg-slate-900 border border-slate-700 rounded-lg flex justify-between">
              <div>
                <h3 className="font-bold">{api.name}</h3>
                <span className={`px-2 py-1 rounded text-xs ${api.status === 'active' ? 'bg-green-900' : 'bg-red-900'}`}>
                  {api.status}
                </span>
              </div>
              <button className="text-red-400 hover:text-red-600">Delete</button>
            </div>
          ))}
        </div>
      </main>
    </div>
  );
}