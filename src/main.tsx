import { createRoot } from 'react-dom/client'
import App from './App.tsx'
import './index.css'
import { GeistSans } from 'geist/font/sans'

// Apply Geist Sans font to the document
document.documentElement.style.setProperty('--font-geist-sans', GeistSans.style.fontFamily);

createRoot(document.getElementById("root")!).render(<App />);
