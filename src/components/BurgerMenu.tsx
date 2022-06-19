import React from 'react';
import { Box, Button } from '@material-ui/core';
import { makeStyles } from '@material-ui/core/styles';
import { Link } from "react-router-dom";

const useStyles = makeStyles((theme) => ({
  burgerMenu: {
    top: 0,
    left: 0,
    width: '100vw',
    height: '100vh',
    position: 'absolute',
    backgroundColor: '#C5E0B0',
    zIndex: 100,
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



function BurgerMenu({ setIsOpenBurgerMenu }: any) {
  const { burgerMenu, buttons, closeButton } = useStyles();
  return (
    <Box className={burgerMenu}>
      <Box className={buttons}>
        <Link color="textPrimary" to={"/catalog"} onClick={() => setIsOpenBurgerMenu(false)} >
          Каталог
        </Link>
        <Link color="textPrimary" to={"/about"} onClick={() => setIsOpenBurgerMenu(false)} >
          О нас
        </Link>
        <Link color="textPrimary" to={"/promo"} onClick={() => setIsOpenBurgerMenu(false)} >
          Акции
        </Link>
        <Link color="textPrimary" to={"/delivery"} onClick={() => setIsOpenBurgerMenu(false)} >
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
