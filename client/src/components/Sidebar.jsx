import { Terminal, Shield, Key } from 'lucide-react';

export default function Sidebar() {
  return (
    <div className="w-64 h-screen bg-slate-900 border-r border-slate-800 p-6">
      <div className="flex items-center gap-2 mb-10 text-cyan-400 font-bold">
        <Terminal /> A4IF CONTROL
      </div>
      <div className="space-y-4">
        <div className="flex items-center gap-3 text-gray-300 hover:text-cyan-400 cursor-pointer">
          <Key /> API Keys
        </div>
        <div className="flex items-center gap-3 text-gray-300 hover:text-cyan-400 cursor-pointer">
          <Shield /> Security
        </div>
      </div>
    </div>
  );
}