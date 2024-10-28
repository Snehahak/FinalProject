import '../App.css';
import { BrowserRouter as Router, Routes, Route } from 'react-router-dom';
import Navbar from './Navbar';
import Home from '../pages/Home';
import Categories from '../pages/Categories';
import Cart from '../pages/Cart';
import Layout from './Layout';
import ChunkingInfo from './ChunkingInfo'; 

function App() {
  return (
    <Router>
      <Layout>
        <Navbar />
        <Routes>
          <Route path="/" element={<Home />} />
          <Route path="/categories" element={<Categories />} />
          <Route path="/cart" element={<Cart />} />
          <Route path="/chunking-info" element={<ChunkingInfo />} />
        </Routes>
      </Layout>
    </Router>
  );
}

export default App;
