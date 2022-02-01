import React from 'react';
import { Box, Link, Button } from '@material-ui/core';
import { makeStyles } from '@material-ui/core/styles';
// import { filterByType } from '../store/productsReducer'
// import store from "../store";

const useStyles = makeStyles((theme) => ({
  burgerMenu: {
    top: 0,
    left: 0,
    width: '100vw',
    height: '100vh',
    position: 'absolute',
    backgroundColor: '#C5E0B0',
    zIndex: '30',
    display: 'flex',
    alignItems: 'center',
   
  },
  buttons: {
    width: '100vw',
    display: 'flex',
    flexDirection: 'column',
    textAlign: 'center',
    '& a': {
      fontSize: '25px',
      padding: '5px 50px'
    }
  },
  closeButton: {
    position: 'absolute',
    top: 10,
    left: 10,
    padding: '20px'
  }
}));



function BurgerMenu({ setIsOpenBurgerMenu }) {
  const { burgerMenu, buttons, closeButton } = useStyles();
  return (
    <Box className={burgerMenu}>
      <Box className={buttons}>
        <Link color="textPrimary" href="#" onClick={() => console.log('Click')}>
          Каталог
        </Link>
        <Link color="textPrimary" href="#" onClick={() => console.log('Click')}>
          О нас
        </Link>
        <Link color="textPrimary" href="#" onClick={() => console.log('Click')}>
          Акции
        </Link>
        <Link color="textPrimary" href="#" onClick={() => console.log('Click')}>
          Доставка
        </Link>
      </Box >
      <Button className={closeButton} onClick={() => setIsOpenBurgerMenu(false)}>
        <svg width="31" height="19" viewBox="0 0 31 19" fill="none" xmlns="http://www.w3.org/2000/svg">
          <path d="M1 10L1.25 9.75M10 1L1.25 9.75M10 18.5L1.25 9.75M1.25 9.75H31" stroke="black" />
        </svg>
      </Button>
    </Box>
  );
}

export default BurgerMenu;
