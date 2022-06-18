import React from 'react';
import { Location } from '../components/Location';
import CartProduct from '../components/CartProduct';
import { Box, Grid } from '@material-ui/core';
import { makeStyles } from '@material-ui/core/styles';
import { getCartProducts } from "../store/cartSelector";
import { useSelector, shallowEqual } from "react-redux";
import { AddProductToCart,  removeProductFromCart, removeFullProductFromCart} from '../store/cartReducer';

import funduk from "../images/catalog/products/funduk.jpeg";
import gretskiy from "../images/catalog/products/gretskiy.jpeg";
import keshiu from "../images/catalog/products/keshiu.jpeg";
import mindal from "../images/catalog/products/mindal.jpeg";
import arahis from "../images/catalog/products/arahis.jpeg";

const useStyles = makeStyles((theme) => ({
  main: {
    padding: '0px calc(50% - 585px)',
    backgroundColor: '#F6F6F6',
    paddingTop: 60,
    paddingBottom: 30,
  },
  title: {
    padding: '0px calc(50% - 585px)',
    marginLeft: '30px',
    fontFamily: 'Philosopher',
    fontWeight: 400,
    fontSize: '50px',
    lineHeight: '82px',
    marginBottom: '30px'
  },
  cartCount: {
    padding: '20px calc(50% - 585px)',
    marginLeft: '30px',
    marginButtom: '10px',
    fontFamily: 'Philosopher',
    fontWeight: 400,
    fontSize: '30px',
    lineHeight: '50px'
  }
}));

const imageTypes = [
  { product_name: mindal }, { product_name: mindal }, { product_name: mindal },
  { product_name: gretskiy }, { product_name: gretskiy }, { product_name: gretskiy },
  { product_name: funduk }, { product_name: funduk }, { product_name: funduk },
  { product_name: keshiu }, { product_name: keshiu }, { product_name: keshiu },
  { product_name: arahis }, { product_name: arahis }, { product_name: arahis },
];


function CartPage() {
  const { main, title, cartCount } = useStyles();
  const { cartProducts } = useSelector(getCartProducts, shallowEqual);
  console.log(cartProducts);
  
  const sum = (array) => {
    return array.reduce((sum, prod) => {
      return sum + (prod.quantity * prod.price);
    }, 0);
  }
  
  return (
    <section>
      <div style={{ padding: '0 calc(50% - 800px)', minWidth: '100px' }}>
        <Location />
        <Box className={main}>
          <Box className={title}>Корзина</Box>
          <Grid style={{ width: '100%' }} container spacing={6}>
          {
            cartProducts
              ? cartProducts.map((card, index) => (
                <CartProduct 
                  card={card} 
                  imageUrl={imageTypes[card.product_id - 1].product_name}
                  key={index+2022}
                  addProduct={AddProductToCart}
                  removeProduct={removeProductFromCart}
                  removeFullProduct={removeFullProductFromCart}
                />
              ))
              : <Box>Корзина пустая</Box>
          }
          </Grid>
          <Box className={cartCount}> В корзине товара на сумму { " " + sum(cartProducts) + " рублей" } </Box>
        </Box>

      </div>
    </section>
  );
}

export default CartPage;
