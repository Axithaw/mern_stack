import { StrictMode } from 'react'
import { createRoot } from 'react-dom/client'
import './index.css'
import App from './App.jsx'
import { createBrowserRouter, RouterProvider } from "react-router-dom"
import Home from './pages/Home.jsx'
import CreatePage from './pages/CreatePage.jsx'
import { QueryClient,QueryClientProvider } from '@tanstack/react-query'
const router = createBrowserRouter([
    {
      path: "/",
      element: <App/>,
      children: [
        {
          path: "/",
          element: <Home/>
        },
        {
          path: "/create",
          element: <CreatePage/>
        }
      ]
    }
])
const queryClient = new QueryClient();

createRoot(document.getElementById('root')).render(
  <StrictMode>
    <QueryClientProvider client={queryClient}>
       <RouterProvider router={router}/>
    </QueryClientProvider>
  </StrictMode>,
)
