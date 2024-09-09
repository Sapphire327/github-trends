import { StrictMode } from 'react'
import { createRoot } from 'react-dom/client'
import App from './App.tsx'
import './index.css'
import {createBrowserRouter, RouterProvider} from "react-router-dom";
import Repository from "./routes/Repository.tsx";

const router = createBrowserRouter([
    {path:'/',element:<App/>},
    {path:'/repository/:id',element:<Repository/>}
])
createRoot(document.getElementById('root')!).render(
  <StrictMode>
    <RouterProvider router={router} />
  </StrictMode>
)