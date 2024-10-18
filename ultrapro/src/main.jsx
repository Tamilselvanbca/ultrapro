import { StrictMode } from 'react'
import { createRoot } from 'react-dom/client'
import './index.css'
import Navbar from './components/Navbar.jsx'
import Cards from './Cards.jsx'
import Content from './components/Content.jsx'
import Offer from './components/Offer.jsx'
import Service from './components/Service.jsx'
import Events from './Events.jsx'
import Gallary from './components/Gallary.jsx'
import Footer from './components/Footer.jsx'

createRoot(document.getElementById('root')).render(
  <StrictMode>
    <Navbar/>
    <Cards />
    <Content/>
    <Offer/>
    <Events/>
    <Service/>
    <Gallary/>
    <Footer/>
  </StrictMode>,
)
