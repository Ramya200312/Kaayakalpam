import React, { useState } from 'react';
import {
  AppBar,
  Toolbar,
  Typography,
  IconButton,
  Drawer,
  List,
  ListItem,
  ListItemText,
  Box,
  useTheme,
  useMediaQuery,
} from '@mui/material';
import MenuIcon from '@mui/icons-material/Menu';
import { NavLink } from 'react-router-dom';

const NavBar = () => {
  const [drawerOpen, setDrawerOpen] = useState(false);
  const theme = useTheme();
  const isMobile = useMediaQuery(theme.breakpoints.down('md'));

  const navItems = ['home', 'about', 'our-products', 'why-us', 'contact'];

  const toggleDrawer = (open) => () => {
    setDrawerOpen(open);
  };

  const drawer = (
    <Box
      onClick={toggleDrawer(false)}
      onKeyDown={toggleDrawer(false)}
      sx={{ width: 250 }}
    >
      <List>
        {navItems.map((page) => (
          <ListItem
            button
            key={page}
            component={NavLink}
            to={`/${page}`}
            sx={{
              '&.active': {
                backgroundColor: '#556B2F',
                color: 'white',
                fontWeight: 'bold',
              },
            }}
          >
            <ListItemText
              primary={page.charAt(0).toUpperCase() + page.slice(1).replace('-', ' ')}
            />
          </ListItem>
        ))}
      </List>
    </Box>
  );

  return (
    <>
      <AppBar position="fixed" sx={{ backgroundColor: 'rgba(0, 0, 0, 0.5)', backdropFilter: 'blur(10px)' }}>
      <Toolbar>
          <Typography variant="h6" sx={{ flexGrow: 1 }}>
            Kaayakalpam
          </Typography>
          {isMobile ? (
        <>
          <IconButton
            edge="start"
            color="inherit"
            aria-label="menu"
            onClick={toggleDrawer(true)}
          >
            <MenuIcon />
          </IconButton>
          <Drawer anchor="left" open={drawerOpen} onClose={toggleDrawer(false)}>
            {drawer}
          </Drawer>
        </>
         ) : (
        <Box sx={{ display: 'flex', gap: 2 }}> 
          {navItems.map((page) => (
            <NavLink
              key={page}
              to={`/${page}`}
              style={({ isActive }) => ({
                color: isActive ? '#556B2F' : 'white',
                fontWeight: isActive ? 'bold' : 'normal',
                textDecoration: isActive ? 'underline' : 'none',
                padding: '8px 12px', 
                transition: '0.3s',
              })}
              >
                {page.charAt(0).toUpperCase() + page.slice(1).replace('-', ' ')}
              </NavLink>
            ))}
          </Box>
        )}
      </Toolbar>
      </AppBar>
      <Toolbar /> 
    </>
  );
};

export default NavBar;
