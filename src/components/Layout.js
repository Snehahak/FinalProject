// components/Layout.js
import React from 'react';
import { AppBar, Toolbar, Typography, Drawer, List, ListItem, Container, CssBaseline, Box } from '@mui/material';

export default function Layout({ children }) {
  return (
    <div>
      <CssBaseline />
      
      {/* Top Header Bar */}
      <AppBar position="sticky">
        <Toolbar>
          <Typography variant="h6" component="div" sx={{ flexGrow: 1 }}>
            OnMart Superstore
          </Typography>
        </Toolbar>
      </AppBar>

      {/* Sidebar Drawer */}
      <Drawer variant="permanent" anchor="left">
        <List>
          {['Electronics', 'Furniture', 'Groceries'].map((text) => (
            <ListItem button key={text}>
              {text}
            </ListItem>
          ))}
        </List>
      </Drawer>

      {/* Main Content Area */}
      <Box component="main" sx={{ marginLeft: '240px', padding: '20px' }}>
        <Container>
          <Typography variant="h4">Welcome to OnMart</Typography>
          <Typography variant="body1">Explore our wide range of products</Typography>
          
          {/* Render children components */}
          {children}
        </Container>
      </Box>
    </div>
  );
}

