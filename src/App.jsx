/* eslint-disable no-unused-vars */
import React from 'react'
import Box from '@mui/material/Box';
import Drawer from '@mui/material/Drawer';
import Button from '@mui/material/Button';
import List from '@mui/material/List';
import Divider from '@mui/material/Divider';
import ListItem from '@mui/material/ListItem';
import ListItemButton from '@mui/material/ListItemButton';
import ListItemText from '@mui/material/ListItemText';
import { useState } from 'react';
import Navbar from './components/Navbar.jsx';


const App = () => {
  const [open, setOpen] = useState(false);

  const toggleDrawer = (newOpen) => () => {
    setOpen(newOpen);
  };


  

  return (
   <div>
    <Navbar/>
   </div>
  )
}

export default App