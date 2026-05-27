import Sidebar from '../components/Sidebar';

export default function Security() {
  return (
    <div className="flex min-h-screen bg-[#0a0b1e] text-white">
      <Sidebar />
      <main className="p-8 w-full">
        <h1 className="text-3xl font-bold text-cyan-400 mb-6">SECURITY CENTER</h1>
        
        <div className="grid grid-cols-1 md:grid-cols-2 gap-6">
          <div className="p-6 bg-[#121429] border border-cyan-500/30 rounded-lg">
            <h2 className="text-xl font-bold mb-2">Access Logs</h2>
            <p className="text-gray-400 text-sm">Monitor all login and API access attempts.</p>
            <button className="mt-4 border border-cyan-500/50 px-4 py-2 rounded hover:bg-cyan-500/10">
              VIEW LOGS
            </button>
          </div>

          <div className="p-6 bg-[#121429] border border-cyan-500/30 rounded-lg">
            <h2 className="text-xl font-bold mb-2">System Firewall</h2>
            <p className="text-gray-400 text-sm">Configure IP whitelisting and rate limiting.</p>
            <button className="mt-4 border border-cyan-500/50 px-4 py-2 rounded hover:bg-cyan-500/10">
              CONFIGURE
            </button>
          </div>
        </div>
      </main>
    </div>
  );
}