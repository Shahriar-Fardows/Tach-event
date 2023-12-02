import React from 'react'
import ReactDOM from 'react-dom/client'
import './index.css'
import { ThemeProvider } from "@material-tailwind/react";
import { RouterProvider } from 'react-router-dom';
import router from './Routes/Router';
import Contexts from './Context/Contexts';


ReactDOM.createRoot(document.getElementById('root')).render(
  <React.StrictMode>
    <Contexts>
      <ThemeProvider>
        <RouterProvider router={router} />
      </ThemeProvider>
    </Contexts>
  </React.StrictMode>,
)



