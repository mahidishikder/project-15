import { StrictMode } from 'react'
import { createRoot } from 'react-dom/client'
import './index.css'
import { RouterProvider } from 'react-router-dom'
import { router } from './Routes/router'
import { HelmetProvider } from 'react-helmet-async';
import AuthPorvider from './provider/AuthPorvider'
import {
  QueryClient,
  QueryClientProvider,
} from '@tanstack/react-query'
const queryClient = new QueryClient()


createRoot(document.getElementById('root')).render(
  <StrictMode>
    <HelmetProvider>
      <QueryClientProvider client={queryClient}>
        <AuthPorvider>
          <div className='max-w-screen-2xl mx-auto'>
            <RouterProvider router={router} />
          </div>
        </AuthPorvider>
      </QueryClientProvider>
    </HelmetProvider>
  </StrictMode>,
)
