import Sidebar from '../components/Sidebar';

export default function ApiKeys() {
  return (
    <div className="flex min-h-screen bg-[#0a0b1e] text-white">
      <Sidebar />
      <main className="p-8 w-full">
        <h1 className="text-3xl font-bold text-cyan-400 mb-6">API KEYS MANAGEMENT</h1>
        
        <div className="p-6 bg-[#121429] border border-cyan-500/30 rounded-lg">
          <h2 className="text-xl font-bold mb-4">Generate New Key</h2>
          <button className="bg-cyan-600 px-6 py-2 rounded font-bold hover:bg-cyan-500 transition-all">
            GENERATE NEW API KEY
          </button>
        </div>

        <div className="mt-8 p-6 bg-[#121429] border border-cyan-500/20 rounded-lg text-center text-cyan-500">
          No active API keys found.
        </div>
      </main>
    </div>
  );
}