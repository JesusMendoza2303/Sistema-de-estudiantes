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
import { Link } from '@mui/material';
import { redirect, useNavigate } from 'react-router-dom';

const Navbar = () => {
  const [open, setOpen] = useState(false);

  const toggleDrawer = (newOpen) => () => {
    setOpen(newOpen);
  };

  const navigate = useNavigate()
  
  const handleMaterias = () => {
    navigate(`/materias`)
  }
  const handleEstudiantes = () => {
    navigate(`/estudiantes`)
  }
  const handleDocentes = () => {
    navigate(`/docentes`)
  }
  const handleUsuarios = () => {
    navigate(`/usuarios`)
  }

  return (
    <div>
    <Button onClick={toggleDrawer(true)}>Open drawer</Button>
    <Drawer open={open} onClose={toggleDrawer(false)}>
    <Box sx={{ width: 250 }} role="presentation" onClick={toggleDrawer(false)}>
      <List>
       
          <ListItem>
            <ListItemButton>
            <Link className='linkNavbar' to='/'>
               <p>Inicio</p>
               </Link>
              <ListItemText  />
            </ListItemButton>
          </ListItem>
          <ListItem>
            <ListItemButton onClick={handleUsuarios}>
               <p>Usuarios</p>
              <ListItemText  />
            </ListItemButton>
          </ListItem>
          <ListItem>
            <ListItemButton  onClick={handleMaterias}>
               <p>Materias</p>
              <ListItemText  />
            </ListItemButton>
          </ListItem>
          <ListItem>
            <ListItemButton  onClick={handleEstudiantes}>
               <p>Estudiantes</p>
              <ListItemText  />
            </ListItemButton>
          </ListItem>
          <ListItem>
            <ListItemButton  onClick={handleDocentes}>
               <p>Docentes</p>
              <ListItemText  />
            </ListItemButton>
          </ListItem>
       
      </List>
      <Divider />
    </Box>
    </Drawer>
  </div>
  )
}

export default Navbar