import React, { useState } from 'react';
import Navbar from './Componanats/Navbar';
import { BrowserRouter, Routes,Route } from 'react-router-dom';
import Footer from './Componanats/Footer';
import Home from './Pages/Home';
import Product from './Pages/Product';
import Create from './Pages/Create';
import Edit from './Pages/Edit';


const App = () => {
  const[id,setId]=useState(0)
  return (
    <div>
      <BrowserRouter>
    <div>
      <Navbar/>
    </div>
    <Routes>
     <Route path="/" element={<Home/>}/>
     <Route path='/product' element={<Product setId={setId}/>}/>
     <Route path='/create' element={<Create/>}/>
     <Route path='/edit/:id' element={<Edit id={id}/>}/>
     




    </Routes>
    <div>
      <Footer />    
      </div>
    </BrowserRouter>
    </div>
  );
};

export default App;