import React, { useState } from 'react';
import AppBar from '@mui/material/AppBar';
import Box from '@mui/material/Box';
import CssBaseline from '@mui/material/CssBaseline';
import Divider from '@mui/material/Divider';
import Drawer from '@mui/material/Drawer';
import IconButton from '@mui/material/IconButton';
import List from '@mui/material/List';
import ListItem from '@mui/material/ListItem';
import ListItemButton from '@mui/material/ListItemButton';
import ListItemText from '@mui/material/ListItemText';
import MenuIcon from '@mui/icons-material/Menu';
import Toolbar from '@mui/material/Toolbar';
import Typography from '@mui/material/Typography';
import Button from '@mui/material/Button';
import { useTheme } from '@mui/material/styles';
import { useMediaQuery } from '@mui/material';

function NavBar() {
  const [open, setOpen] = useState(false);
  const Theme = useTheme();
  const IsMobile = useMediaQuery(Theme.breakpoints.down('sm'));
  const menuItems = ['About', 'Services', 'Projects', 'Contacts'];

  return (
    <>
      <AppBar
        elevation={0}
        className="Navbar"
        position="static"
        sx={{
          backgroundColor: 'white',
          color: 'black',
          borderBottom: '2px solid #fafafa',
        }}
      >
        <Toolbar>
          {IsMobile ? (
            <div>
              <IconButton color="inherit" onClick={() => setOpen(true)}>
                <MenuIcon />
              </IconButton>
            </div>
          ) : (
            <>
              <Typography sx={{ flexGrow: '1' }}>
                <img className="navLogo" src="/public/Logo1.png" alt="logo" />
              </Typography>

              {menuItems.map((item) => (
                <Button
                  className="signUpBtn"
                  sx={{ color: 'black', fontSize: '1rem' }}
                  key={item}
                >
                  {item}
                </Button>
              ))}

              <Button
                variant="outlined"
                sx={{
                  backgroundColor: 'white',
                  color: '#2AB691',
                  borderRadius: '10px',
                  '&:hover': {
                    backgroundColor: '#2AB666',
                    color: 'wheat',
                  },
                }}
              >
                Sign Up
              </Button>
            </>
          )}
        </Toolbar>
      </AppBar>

      <Drawer anchor="left" open={open} onClose={() => setOpen(false)}>
        <List>
          {menuItems.map((item) => (
            <ListItem Button key={item} onClick={() => setOpen(false)}>
              <ListItemText>{item}</ListItemText>
            </ListItem>
          ))}
          <ListItem>
            <ListItemText primary="Sign Up" />
          </ListItem>

          <ListItem>
            <ListItemText>
              <img className="navLogoSm" src="/public/Logo1.png" alt="logo" />
            </ListItemText>
          </ListItem>
        </List>
      </Drawer>
    </>
  );
}

export default NavBar;
