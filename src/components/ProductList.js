// src/ProductList.js
import React from 'react';
import { Grid, Card, CardContent, CardActions, Button, Typography } from '@mui/material';

export default function ProductList() {
  return (
    <Grid container spacing={3}>
      {[1, 2, 3].map((product) => (
        <Grid item xs={4} key={product}>
          <Card>
            <CardContent>
              <Typography variant="h5">Product {product}</Typography>
              <Typography variant="body2">Product details...</Typography>
            </CardContent>
            <CardActions>
              <Button size="small" color="primary">Add to Cart</Button>
            </CardActions>
          </Card>
        </Grid>
      ))}
    </Grid>
  );
}
