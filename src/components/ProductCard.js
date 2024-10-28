import { Card, CardMedia, CardContent, Typography, Button, CardActions } from '@mui/material';

const ProductCard = ({ product }) => (
  <Card sx={{ maxWidth: 345, m: 2 }}>
    <CardMedia component="img" height="140" image={product.image} alt={product.name} />
    <CardContent>
      <Typography gutterBottom variant="h5" component="div">
        {product.name}
      </Typography>
      <Typography variant="body2" color="text.secondary">
        Price: ${product.price}
      </Typography>
    </CardContent>
    <CardActions>
      <Button size="small" color="primary">Add to Cart</Button>
    </CardActions>
  </Card>
);

export default ProductCard;
