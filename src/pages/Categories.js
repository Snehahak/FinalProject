import { List, ListItem, ListItemButton, ListItemText, Box, Typography } from '@mui/material';

const categories = ['Electronics', 'Furniture', 'Groceries'];

const Categories = () => (
  <Box sx={{ m: 5 }}>
    <Typography variant="h4" gutterBottom>Product Categories</Typography>
    <List>
      {categories.map((category, index) => (
        <ListItem key={index}>
          <ListItemButton component="a" href={`/categories/${category.toLowerCase()}`}>
            <ListItemText primary={category} />
          </ListItemButton>
        </ListItem>
      ))}
    </List>
  </Box>
);

export default Categories;
