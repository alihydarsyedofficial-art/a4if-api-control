import { useState } from 'react';
import { useNavigate } from 'react-router-dom';
import { Terminal, Lock, User } from 'lucide-react';
import { signInWithEmailAndPassword } from 'firebase/auth';
import { auth } from '../firebase/config';

export default function Login() {
  const [email, setEmail] = useState('');
  const [password, setPassword] = useState('');
  const navigate = useNavigate();

  const handleLogin = async (e) => {
    e.preventDefault();
    try {
      await signInWithEmailAndPassword(auth, email, password);
      alert("Access Granted!");
      navigate('/dashboard');
    } catch (error) {
      alert("Unauthorized Access: Invalid Credentials");
    }
  };

  return (
    <div className="min-h-screen bg-[#0a0b1e] flex items-center justify-center p-4">
      <div className="w-full max-w-md bg-[#121429] border border-cyan-500/30 p-8 rounded-xl shadow-lg relative">
        <div className="text-center mb-8">
          <div className="inline-block p-4 rounded-full bg-cyan-500/10 mb-4">
            <Terminal className="text-cyan-400" size={48} />
          </div>
          <h2 className="text-3xl font-bold text-white tracking-widest">A4IF SYSTEM</h2>
          <p className="text-cyan-500 text-sm mt-2">SECURE ACCESS REQUIRED</p>
        </div>

        <form onSubmit={handleLogin} className="space-y-6">
          <input 
            type="email" 
            placeholder="ADMIN_ID"
            className="w-full bg-[#0a0b1e] border border-cyan-500/20 text-white p-3 rounded outline-none focus:border-cyan-500"
            onChange={(e) => setEmail(e.target.value)}
          />
          <input 
            type="password" 
            placeholder="PASSWORD"
            className="w-full bg-[#0a0b1e] border border-cyan-500/20 text-white p-3 rounded outline-none focus:border-cyan-500"
            onChange={(e) => setPassword(e.target.value)}
          />
          <button 
            type="submit"
            className="w-full bg-transparent border border-cyan-500 text-cyan-500 py-3 rounded hover:bg-cyan-500 hover:text-black transition-all font-bold"
          >
            INITIALIZE_ACCESS
          </button>
        </form>
      </div>
    </div>
  );
}