import React from 'react';
import Navbar from './Navbar';
import Comp1 from './Comp1';
import Inputfield from './Textfield';
import Comp2 from './Comp2';
import Container from '@material-ui/core/Container';

const Home = () => {
  return (
    <>

      <Navbar />

      <Container maxWidth="lg">
        <Comp1 />
        <Inputfield />
        <Comp2 />

      </Container>



g
    </>
  )
}

export default Home