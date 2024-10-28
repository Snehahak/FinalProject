import ProductCard from '../components/ProductCard';
import { Box } from '@mui/material';

const products = [
  { name: 'Laptop', price: 999, image: 'https://via.placeholder.com/150' },
  { name: 'Phone', price: 699, image: 'https://via.placeholder.com/150' }
];

const Home = () => (
  <Box sx={{ display: 'flex', justifyContent: 'center', flexWrap: 'wrap', mt: 5 }}>
    {products.map((product, index) => (
      <ProductCard key={index} product={product} />
    ))}
  </Box>
);

export default Home;
