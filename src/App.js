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
import LoginScreen from './screens/LoginScreen';

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
            <Route exact path='/signin' element={<LoginScreen />} />
          </Routes>
        </Container>
      </main>
      <Footer />
    </BrowserRouter>
  );
}

export default App;
