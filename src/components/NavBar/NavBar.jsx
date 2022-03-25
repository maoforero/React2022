import React from 'react';
import Container from '@material-ui/core/Container';
import { AppBar, IconButton, Button, Toolbar } from '@material-ui/core';
import CartWidget from '../CartWidget/CartWidget';

const navbar = () => {
  return (
    <>
      <Container>
        <AppBar position='static'>
          <Toolbar>
            <IconButton edge='start' color='inherit' arial-table='menu' />
            <Button color="inherit" to='/'>
              <p>Home</p>
            </Button>

            <Button color="inherit" to='/'>
              <p>List</p>
            </Button>
              
            <Button color="inherit" to='/'>
              <p>More</p>
            </Button>

            <Button color="inherit" to='/'>
              <p>Cart</p>
            </Button>
            <CartWidget/>
          </Toolbar>

        </AppBar>

    </Container>
    </>
  )
}

export default navbar

