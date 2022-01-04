import { BrowserRouter, Routes, Route } from "react-router-dom";

import './App.css';
import Home from './pages/Home';
import Dashboard from './pages/Dashboard';
import Auth from './pages/Auth';

function App() {
  return (
    <div className='box-border w-full'>
      <BrowserRouter>
        <Routes>
          <Route path="/">
            <Route index element={<Home />} />
            <Route path="dashboard" element={<Dashboard />} />
            <Route path="auth" element={<Auth />} />
          </Route>
        </Routes>
      </BrowserRouter>
    </div>
  );
}

export default App;
