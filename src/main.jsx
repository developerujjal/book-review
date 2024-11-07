import { StrictMode } from 'react'
import { createRoot } from 'react-dom/client'
import { RouterProvider } from "react-router-dom";
import routers from './components/Routes/Routes';
import './index.css'
import ContextAuth from './components/ContextAuth/ContextAuth';

createRoot(document.getElementById('root')).render(
  <StrictMode>
    <ContextAuth>
      <RouterProvider router={routers} />
    </ContextAuth>
  </StrictMode>,
)
