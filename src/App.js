import React from 'react';
import { Container } from 'react-bootstrap';
import './App.css';
import Footer from './components/Footer';
import Header from './components/Header';
import HomeScreen from './screens/HomeScreen';
import { Routes, Route } from 'react-router-dom'
import ProductDetails from './screens/ProductDetails';
import { BrowserRouter } from 'react-router-dom';
import CartScreen from './screens/CartScreen';

function App() {
  return (
    <BrowserRouter>
      <Header />
      <main>
        <Container>
          <Routes>
            <Route exact path='/' element={<HomeScreen />} />
            <Route exact path='/product/:id' element={<ProductDetails />} />
            <Route exact path='/cart/:id' element={<CartScreen />} />
          </Routes>
        </Container>
      </main>
      <Footer />
    </BrowserRouter>
  );
}

export default App;
