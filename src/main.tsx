import { StrictMode } from 'react'
import { createRoot } from 'react-dom/client'
import './index.css'
import App from './App.tsx'
import { FileManager } from './FileManager.tsx'
import { fileFolderData } from './assets/metaData.tsx'

createRoot(document.getElementById('root')!).render(
  <StrictMode>
    <FileManager intialData = {fileFolderData}/>
  </StrictMode>,
)
