import { BrowserRouter as Router, Routes, Route, Navigate } from 'react-router-dom';
import Login from './pages/Login';
import Dashboard from './pages/Dashboard';

function App() {
  return (
    <Router>
      <Routes>
        {/* কেউ সরাসরি ওয়েবসাইটে ঢুকলে তাকে লগইন পেজে পাঠিয়ে দেবে */}
        <Route path="/" element={<Navigate to="/login" replace />} />
        
        {/* লগইন এবং ড্যাশবোর্ড রাউট */}
        <Route path="/login" element={<Login />} />
        <Route path="/dashboard" element={<Dashboard />} />
      </Routes>
    </Router>
  );
}

export default App;