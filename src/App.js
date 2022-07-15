import React from 'react';
// style
import './App.css';

import AboutUs from './Components/AboutUs/AboutUs.jsx';
import Customers from './Components/Customers/Customers.jsx';
import DesignTech from './Components/DesignTech/DesignTech.jsx';
import DevTech from './Components/DevTech/DevTech.jsx';
import Footer from './Components/Footer/Footer.jsx';
import Hero from './Components/Hero/Hero.jsx';
import Navbar from "./Components/Navbar/Navbar.jsx";
import Portfolio from './Components/Portfolio/Portfolio.jsx';
import Pricing from './Components/Pricing/Pricing.jsx';
import Product from './Components/Products/Product.jsx';
import WhatWeDo from './Components/WhatWeDo/WhatWeDo.jsx';
import Workflow from './Components/Workflow/Workflow.jsx';

function App() {
  return (
    <>
      <div className='hero__bg'>
        <Navbar/>
        <Hero/>
      </div>

      <Customers class='container mt-12' />

      <div className='whatWeDo__bg'>
        <WhatWeDo class='container' />
      </div>

      <Product class='mt-12' />
      <Pricing class='container' />
      <AboutUs class='mt-5' />
      <Portfolio class='container mt-8' />
      <DevTech class='container mt-8' />
      <DesignTech class='container mt-8' />

      <div className='workflow__bg'>
        <Workflow />
      </div>

      <Footer/>
    </>
  );
}

export default App;
