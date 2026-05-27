import { Link } from 'react-router-dom';

export default function Sidebar() {
  return (
    <aside className="w-64 bg-[#0a0b1e] border-r border-cyan-500/20 p-6 flex flex-col gap-6 min-h-screen">
      <h2 className="text-cyan-400 font-bold text-xl mb-4">TRICK A4IF</h2>
      
      <nav className="flex flex-col gap-4">
        <Link to="/dashboard" className="text-gray-300 hover:text-cyan-400 font-medium transition">
          API Management
        </Link>
        <Link to="/api-keys" className="text-gray-300 hover:text-cyan-400 font-medium transition">
          API Keys
        </Link>
        <Link to="/security" className="text-gray-300 hover:text-cyan-400 font-medium transition">
          Security
        </Link>
      </nav>
    </aside>
  );
}