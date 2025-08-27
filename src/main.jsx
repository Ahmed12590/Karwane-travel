import { createRoot } from 'react-dom/client'
import { BrowserRouter } from 'react-router-dom'
import App from './App.jsx'
import './index.css'
import faviconUrl from "./assets/icon-camera.png";

createRoot(document.getElementById('root')).render(
  <BrowserRouter>
    <App />
  </BrowserRouter>
)




////// favicon //////////////
const link =
  document.querySelector('link[rel="icon"]') ||
  Object.assign(document.createElement("link"), { rel: "icon", type: "image/svg+xml" });

link.href = faviconUrl;
document.head.appendChild(link);
