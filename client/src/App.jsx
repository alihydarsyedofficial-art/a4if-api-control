import { BrowserRouter as Router, Routes, Route, Navigate } from 'react-router-dom';
import Login from './pages/Login';
import Dashboard from './pages/Dashboard';
import ApiKeys from './pages/ApiKeys';      // নতুন পেজ ইম্পোর্ট
import Security from './pages/Security';    // নতুন পেজ ইম্পোর্ট

function App() {
  return (
    <Router>
      <Routes>
        {/* কেউ সরাসরি ওয়েবসাইটে ঢুকলে তাকে লগইন পেজে পাঠিয়ে দেবে */}
        <Route path="/" element={<Navigate to="/login" replace />} />
        
        {/* মেইন রাউটস */}
        <Route path="/login" element={<Login />} />
        <Route path="/dashboard" element={<Dashboard />} />
        
        {/* নতুন যোগ করা রাউটস */}
        <Route path="/api-keys" element={<ApiKeys />} />
        <Route path="/security" element={<Security />} />
      </Routes>
    </Router>
  );
}

export default App;