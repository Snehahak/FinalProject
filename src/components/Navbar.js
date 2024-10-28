import { AppBar, Toolbar, Typography, IconButton, InputBase } from '@mui/material';
import SearchIcon from '@mui/icons-material/Search';
import ShoppingCartIcon from '@mui/icons-material/ShoppingCart';
import { Box } from '@mui/system';

const Navbar = () => (
  <AppBar position="sticky">
    <Toolbar>
      <Typography variant="h6" component="a" href="/" sx={{ flexGrow: 1 }}>
        OnMart Superstore
      </Typography>
      <Box sx={{ display: 'flex', alignItems: 'center' }}>
        <InputBase
          placeholder="Search…"
          sx={{ color: 'inherit', ml: 2 }}
          startAdornment={<SearchIcon />}
        />
        <IconButton href="/cart" color="inherit">
          <ShoppingCartIcon />
        </IconButton>
      </Box>
    </Toolbar>
  </AppBar>
);

export default Navbar;
