import React from 'react'
import ReactDOM from 'react-dom/client'
import App from './App.jsx'
import {
  createBrowserRouter,
  RouterProvider,
} from "react-router-dom";
import Home from './component/Home.jsx'
import Owner from './component/Owner.jsx';
import HomeUser from './component/HomeUser.jsx';
import HomeAdmin from './component/HomeAdmin.jsx';

/*import หน้าเว็บไซต์และ router เข้ามา*/
/*สร้าง path แต่ละหน้าเว็บไซต์*/
const router = createBrowserRouter([
  {
    path: "/",
    element:<Home/>
  },
  {
    path: "/Owner",
    element:<Owner/>
  },
  {
    path: "/HomeUser",
    element:<HomeUser/>
  },
  {
    path: "/HomeAdmin",
    element:<HomeAdmin/>
  }
]);

ReactDOM.createRoot(document.getElementById('root')).render(
  <React.StrictMode>
     <RouterProvider router={router} /> 
  </React.StrictMode>,
)
