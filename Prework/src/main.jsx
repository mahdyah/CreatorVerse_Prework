import React from 'react'
import ReactDOM from 'react-dom/client'
import App from './App.jsx'
import './index.css'
import Header from './pages/Header.jsx'
import {Route, Routes , BrowserRouter} from "react-router-dom";
import AddCreator from './pages/AddCreator.jsx'
import ViewCreator from './pages/ViewCreator.jsx'
import EditCreator from './pages/EditCreator.jsx'

ReactDOM.createRoot(document.getElementById('root')).render(
  <React.StrictMode>
      <BrowserRouter>
      <Header />
      <Routes>
        <Route index={true} path="/" element={<App />} />
        <Route index={false} path="/new" element={<AddCreator />} />
        <Route index={false} path="/:id" element={<ViewCreator />} />
        <Route index={false} path="/edit/:id" element={<EditCreator />} />
      </Routes>
    </BrowserRouter>
  </React.StrictMode>,
)
