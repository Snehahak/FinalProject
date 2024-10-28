import './App.css';
import { BrowserRouter as Router, Routes, Route } from 'react-router-dom';
import Navbar from './components/Navbar';
import Home from './pages/Home';
import Categories from './pages/Categories';
import Cart from './pages/Cart';
import Layout from './components/Layout';
import ChunkingInfo from './components/ChunkingInfo';
import ProductList from './components/ProductList';
import SalesChart from './components/SalesChart';
import UserForm from './components/UserForm';

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
          <Route path="/product-list" element={<ProductList />} />
          <Route path="/sales-chart" element={<SalesChart />} />
          <Route path="/user-form" element={<UserForm />} />
        </Routes>
      </Layout>
    </Router>
  );
}

export default App;



