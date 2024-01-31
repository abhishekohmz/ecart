import { Route, Routes } from 'react-router-dom';
import './App.css';
import Cart from './Pages/Cart';
import Home from './Pages/Home';
import Whishlist from './Pages/Whishlist';
import Footer from './components/Footer';
import Header from './components/Header';
import './bootstrap.min.css'

function App() {
  return (
    <div className="App">
      <Header />
      <Routes>
        <Route path='/' element={<Home />} />
        <Route path='/cart' element={<Cart />} />
        <Route path='/wishlist' element={<Whishlist />} />
      </Routes>
      <Footer />
    </div>
  );
}

export default App;
