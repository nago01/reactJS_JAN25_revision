import { StrictMode } from 'react'
import { createRoot } from 'react-dom/client'
import './index.css'
import App from './App.tsx'
import { FileManager } from './FileManager.tsx'
import { fileFolderData } from './assets/metaData.tsx'
import { ProductLandingPage } from './ProductLandingPage.tsx'

createRoot(document.getElementById('root')!).render(
  <StrictMode>
    <ProductLandingPage/>
  </StrictMode>,
)
