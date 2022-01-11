import { BrowserRouter, Routes, Route } from "react-router-dom";

import './App.css';

import Home from './pages/Home';
import Dashboard from './pages/Dashboard';
import Auth from './pages/Auth';
import NotFound from "./pages/NotFound";
import Settings from "./pages/Settings";


function App() {
  const isAuthenticated = true;

  return (
    <div className='box-border w-full'>
      <BrowserRouter>
        <Routes>
          <Route path="/">
            {
              isAuthenticated &&
              <Route path="dashboard" element={<Dashboard />} />
            }
            <Route index element={<Home />} />
            <Route path="auth" element={<Auth />} />
            <Route path="settings" element={<Settings />} />
            <Route path="*" element={<NotFound />} />
          </Route>
        </Routes>
      </BrowserRouter>
    </div>
  );
}

export default App;
