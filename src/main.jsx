import React from 'react'
import ReactDOM from 'react-dom/client'
import App from './App.jsx'
import { BrowserRouter, Route, Routes } from 'react-router-dom'
import { About } from './components/About'
import { Disposal } from './components/Disposal'
import { Login } from './components/Login'
import { Reg } from './components/Reg'
import { Succ } from './components/Succ'
import { Trail } from './components/Trail'
import { Ptc } from './components/Ptc.jsx'
import { Services } from './components/Services.jsx'


ReactDOM.createRoot(document.getElementById('root')).render(
  <React.StrictMode>
    <BrowserRouter>
    <Routes>
      <Route path='/' element={ <App />}>
        <Route path='about' element={<About/>}/>
        <Route path='casereg' element={<Reg/>} />
        <Route path='disposal' element={<Disposal/>} />
        <Route path='succ' element={<Succ/>} />
        <Route path='trail' element={<Trail/>} />
        <Route path='ptc' element={<Ptc/>} />
        <Route path='services' element={<Services/>} />
      </Route>
      <Route path='/login' element={ <Login/> } />
    </Routes>
      
    </BrowserRouter> 
  </React.StrictMode>,
)
