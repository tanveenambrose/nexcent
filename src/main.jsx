import { StrictMode } from 'react'
import 'flowbite/dist/flowbite.min.css'
import 'flowbite';
import { createRoot } from 'react-dom/client'
import 'react-toastify/dist/ReactToastify.css';
import './index.css'
import App from './App.jsx'

createRoot(document.getElementById('root')).render(
    <App />
)
