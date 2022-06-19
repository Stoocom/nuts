import React, { useState, useEffect } from 'react';
import MiddleWave from '../components/MiddleWave';
import CatalogProduct from '../components/CatalogProduct';
import { Container, Box, Grid } from '@material-ui/core';
import { makeStyles } from '@material-ui/core/styles';
import { getAllProducts } from "../store/productsSelector";
import { useSelector, shallowEqual } from "react-redux";
import { addAllProductsThunk } from '../store/productsReducer';
import { addFullProductToCart } from '../store/cartReducer';
import store from "../store";

import funduk from "../images/catalog/products/funduk.jpeg";
import gretskiy from "../images/catalog/products/gretskiy.jpeg";
import keshiu from "../images/catalog/products/keshiu.jpeg";
import mindal from "../images/catalog/products/mindal.jpeg";
import arahis from "../images/catalog/products/arahis.jpeg";

const useStyles = makeStyles((theme) => ({
  main: {
    backgroundColor: "#F6F6F6",
    width: "100%",
    height: "100%",
    position: "relative",
    margin: 0,
    paddingTop: '50px'
  },
  title: {
    padding: '0px calc(50% - 585px)',
    marginLeft: '30px',
    marginButtom: '10px',
    fontFamily: 'Philosopher',
    fontWeight: 400,
    fontSize: '64px',
    lineHeight: '82px',
  },
  card_container: {
    boxShadow: '4px 4px 6px rgba(116, 111, 111, 0.25)',
    border: '0.2px solid #DDDDDD',
    height: '373px',
    width: '270px',
    margin: 'auto',
    zIndex: 40,
  },
  button_box: {
    width: '100%',
    height: '46px',
    backgroundColor: "#FFFFFF",
    display: 'flex',
    justifyContent: 'center',
    alignItems: "center",
  },
  title_box_new: {
    fontFamily: 'Philosopher',
    fontStyle: 'Regular',
    fontWeight: 400,
    fontSize: '22px',
    lineHeight: '25px',
    width: '100%',
    height: '41px',
    display: 'flex',
    justifyContent: 'center',
    alignItems: "center",
  },
  item_media: {
    paddingTop: '78%',
    backgroundSize: 'contain'
  },
  line_box: {
    width: '100%',
    height: '1px',
    backgroundColor: 'rgba(116, 111, 111, 0.25)'
  },
  size_box: {
    display: 'flex',
    justifyContent: 'center',
  },
  box_item: {
    width: '140px',
    height: '20px',
    border: '0.2px solid #DDDDDD',
    display: 'flex',
    flexDirection: 'row',
    justifyContent: 'space-between',
    alignItems: 'center',
    fontSize: '14px',
    lineHeight: '16px',
    color: 'rgba(116, 111, 111, 1)',
    padding: '0 6px'
  },
  price_box: {
    marginTop: '12px',
    marginBottom: '12px',
    color: '#71B83A',
    textAlign: 'center',
    fontSize: '20px',
    lineHeight: '23px'
  },
  buttons_container: {
    width: '100%',
    backgroundColor: "#FFFFFF",
    display: 'flex',
    justifyContent: 'center',
    alignItems: "center",
  },
  button_item: {
    border: '1px solid #99D967',
    backgroundColor: "#99D967",
    color: "#FFFFFF",
    borderRadius: '0',
    width: '152px',
    height: '33px',
    "&:hover": {
      color: '#99D967',
      backgroundColor: "#FFFFFF",
    },
  },
}));

const imageTypes = [
  { product_name: mindal }, { product_name: mindal }, { product_name: mindal },
  { product_name: gretskiy }, { product_name: gretskiy }, { product_name: gretskiy },
  { product_name: funduk }, { product_name: funduk }, { product_name: funduk },
  { product_name: keshiu }, { product_name: keshiu }, { product_name: keshiu },
  { product_name: arahis }, { product_name: arahis }, { product_name: arahis },
];
// const testArray = [
//   {
//     product_id: 10,
//     product_name: "Миндаль",
//     size: 100,
//     price: 100,
//   },
//   {
//     product_id: 15,
//     product_name: "Миндаль",
//     size: 200,
//     price: 300,
//   },
//   {
//     product_id: 1,
//     product_name: "Кешью",
//     size: 100,
//     price: 100,
//   },
//   {
//     product_id: 2,
//     product_name: "Кешью",
//     size: 300,
//     price: 500,
//   },
// ];

function CatalogMain() {
  const { main, title} = useStyles();

  const [typeName] = useState("Каталог");

  const products = useSelector(getAllProducts, shallowEqual);

  const requestProducts = () => {
    store.dispatch(addAllProductsThunk());
  };

  useEffect(() => {
    console.log('useEffect CatalogProducts');
    // fetch('/products').then(res => res.json())
    //   .then(data => setTypes(data))
    //   .catch((err) => console.log(err));
    requestProducts();
  }, []);

  return (
    <Box className={main}>
      <MiddleWave />
      {/* <TypesMenu types={types ? types : testArrayTypes}/> */}

      {typeName
        ? <div className={title}>{typeName}</div>
        : null
      }

      <Container maxWidth="lg" style={{ padding: 30 }}>
        <Grid container spacing={8}>
          {
            products
              ?
              products.map((card: any) => (
                <CatalogProduct 
                  card={card} 
                  imageUrl={imageTypes[card.product_id - 1].product_name}
                  addFullProductToCart={addFullProductToCart}
                />
              ))
              : <div>No Data</div>
          }
        </Grid>
      </Container>
    </Box>
  );
}

export default CatalogMain;
