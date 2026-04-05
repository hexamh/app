import { Routes, Route } from 'react-router-dom';
import { Layout } from '@/components/Layout';
import { Dashboard } from '@/pages/Dashboard';
import { Workers } from '@/pages/Workers';
import { Earnings } from '@/pages/Earnings';
import { Pool } from '@/pages/Pool';
import { Settings } from '@/pages/Settings';

function App() {
  return (
    <Layout>
      <Routes>
        <Route path="/" element={<Dashboard />} />
        <Route path="/workers" element={<Workers />} />
        <Route path="/earnings" element={<Earnings />} />
        <Route path="/pool" element={<Pool />} />
        <Route path="/settings" element={<Settings />} />
      </Routes>
    </Layout>
  );
}

export default App;
