import { StrictMode } from 'react'
import { createRoot } from 'react-dom/client'
import App from './App.jsx'
import './index.css'
import {
  createBrowserRouter,
  createRoutesFromElements,
  Route,
  RouterProvider,
} from "react-router-dom";
import PackageDetailPage from './Pages/PackageDetailPage.jsx';
import GlobalLayout from './Component/GlobalLayout.jsx';

const router = createBrowserRouter(
  createRoutesFromElements(
    <Route  element={<GlobalLayout />}>
      <Route path="/" element={<App />} />
      <Route path="package" element={<PackageDetailPage />} />
    </Route>
  )
);

createRoot(document.getElementById('root')).render(
  <StrictMode>
     <RouterProvider router={router} />
  </StrictMode>,
)
