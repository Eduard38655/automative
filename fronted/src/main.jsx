import { createRoot } from 'react-dom/client';
import { BrowserRouter } from "react-router-dom";
import { Toaster } from "sonner";
import App from './App.jsx';
createRoot(document.getElementById('root')).render(
 <BrowserRouter> 
 <Toaster  position="top-right" />
    <App />
  </BrowserRouter>
)
