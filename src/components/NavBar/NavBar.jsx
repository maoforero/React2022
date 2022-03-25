import React from 'react';
import Container from '@material-ui/core/Container';
import { AppBar, IconButton, Button, Toolbar } from '@material-ui/core';

const navbar = () => {
  return (
    <>
      <Container>
        <AppBar position='static'>
          <Toolbar>
            <IconButton edge='start' color='inherit' arial-table='menu' />
            <Button>
              <p>Home</p>
            </Button>
            <Button>
              <p>List</p>
            </Button>
              
            <Button>
              <p>More</p>
            </Button>
            <Button>
              <p>Cart</p>
            </Button>
            
            <Button>
              <p>h</p>
              <img src="../../../public/carriage64.png"  alt="" />
            </Button>
          </Toolbar>

        </AppBar>

    </Container>
    </>
  )
}

export default navbar

