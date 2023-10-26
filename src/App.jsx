import './App.css'


import { Link, Outlet, Routes,Route } from 'react-router-dom'
import badge from "./logo/badge.png"
import rpf from "./logo/rpf.png"
import src from "./logo/scr.jpg"
import { Welcome } from './components/Welcome'


function App() {
  return (
   <>
    <div>
    <header className="header">
      <button className="menu-icon-btn" data-menu-icon-btn >
        <img className='src-image' src={src}/>
        {/* <svg viewBox="0 0 24 24" preserveAspectRatio="xMidYMid meet" focusable="false" className="menu-icon"><g ><path d="M3 18h18v-2H3v2zm0-5h18v-2H3v2zm0-7v2h18V6H3z"></path></g></svg> */}
      </button>
      <h1 className="title">South Central Railway</h1>
      <nav className="nav">   
        <ul>
            <li><Link to="/">Home</Link></li>
            <li><Link className="ab" to="/about">About</Link></li>
            <li><Link to="/services">Services</Link></li>
        </ul>           
    </nav>
      <div className="badge">
        <img className="badge" src={badge}/>
      </div>
    </header>
  </div> 
      <div className="container">
      <aside className="sidebar" data-sidebar>
            <div className="top-sidebar">
              <a href="#" className="channel-logo"><img src={rpf} alt="Logo" /></a>
              <div className="hidden-sidebar your-channel">user Name</div>
              <div className="hidden-sidebar channel-name">Railway protection force</div>
            </div>
        <div className="middle-sidebar">
              <ul className="sidebar-list">
                <li className="sidebar-list-item ">
                  <Link to="/about" className="sidebar-link about">
                  
                    <div className="hidden-sidebar">About</div>
                  </Link>
                </li>
                <li className="sidebar-list-item">
                  <Link to="/casereg" className="sidebar-link case-Registration">
                    
                    <div className="hidden-sidebar"> Case Registration
                    </div>
                  </Link>
                </li>
                <li className="sidebar-list-item">
                  <Link to="/trail" className="sidebar-link trail-case">
                    <div className="hidden-sidebar ">Trail Cases</div>
                  </Link>
                </li>
                <li className="sidebar-list-item">
                  <Link to="/ptc" className="sidebar-link ptc">
                    
                    <div className="hidden-sidebar">Pending Enquiry Cases</div>
                  </Link>
                </li>
                <li className="sidebar-list-item">
                  <Link to="/disposal" className="sidebar-link disposals">
                    
                    <div className="hidden-sidebar">Disposal Cases</div>
                  </Link>
                </li>
               {/* 
                <li className="sidebar-list-item">
                  <Link to="#" className="sidebar-link">
                  
                    <div className="hidden-sidebar">Appeal Cases</div>
                  </Link>
                </li>
                <li className="sidebar-list-item">
                  <Link to="#" className="sidebar-link">
                  
                    <div className="hidden-sidebar">Auto Indiactor</div>
                  </Link>
                </li>
                <li className="sidebar-list-item">
                  <Link to="#" className="sidebar-link">
                  
                    <div className="hidden-sidebar">Reports</div>
                  </Link>
                </li> */}
              </ul>
        </div> 
       <div className="bottom-sidebar">
              <ul className="sidebar-list">
                <li className="sidebar-list-item">
                  <Link to="/login" className="sidebar-link">
  
                    <div className="hidden-sidebar">Logout</div>
                  </Link>
                </li>
              </ul>
         </div> 
          </aside>
         
          <main className="content">
            <Routes>
            <Route path='/' element= {<Welcome/>} />
            </Routes>
            <Outlet/>
         </main>
    </div>
  </> 
  )
}

export default App
