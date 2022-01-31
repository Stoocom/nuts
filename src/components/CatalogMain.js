import React, { useState, useEffect } from 'react';
import { Container, Box, Grid, Card, CardMedia, Button } from '@material-ui/core';
import { makeStyles } from '@material-ui/core/styles';
import { getAllProducts } from "../store/productsSelector";
import { useSelector, shallowEqual } from "react-redux";
import { addAllProductsThunk } from '../store/productsReducer';
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
    margin: 'auto'
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
//   { product_id: 1, product_name: "Миндаль" }, { product_id: 2, product_name: "Миндаль" }, { product_id: 3, product_name: "Миндаль" },
//   { product_id: 4, product_name: "Грецкий орех" }, { product_id: 5, product_name: "Грецкий орех" }, { product_id: 6, product_name: "Грецкий орех" },
//   { product_id: 7, product_name: "Фундук" }, { product_id: 8, product_name: "Фундук" }, { product_id: 9, product_name: "Фундук" },
//   { product_id: 10, product_name: "Кешью" }, { product_id: 11, product_name: "Кешью" }, { product_id: 12, product_name: "Кешью" },
//   { product_id: 13, product_name: "Арахис" }, { product_id: 14, product_name: "Арахис" }, { product_id: 15, product_name: "Арахис" },
// ];

function CatalogMain() {
  const { main, title, card_container, item_media, title_box_new, buttons_container, button_item,
    line_box, size_box, box_item, price_box } = useStyles();

  const [typeName] = useState("Каталог");
  //const [products] = useState(testArray);
  const { filtered } = useSelector(getAllProducts, shallowEqual);

  const requestProducts = () => {
    store.dispatch(addAllProductsThunk());
  };
  useEffect(() => {
    console.log('useEffect CatalogProducts');
    console.log(filtered);
    // fetch('/products').then(res => res.json())
    //   .then(data => setTypes(data))
    //   .catch((err) => console.log(err));
    requestProducts();
  }, []);

  return (
    <Box className={main}>

      {/* <TypesMenu types={types ? types : testArrayTypes}/> */}

      { typeName
          ? <div className={title}>{typeName}</div>
          : null
      }
      
      <Container maxWidth="lg" style={{ padding: 30 }}>
        <Grid container spacing={8}>
          {
            filtered
              ?
              filtered.map((card) => (
                <Grid item key={card.product_id} xs={12} sm={6} md={4}>
                  <Card className={card_container}>
                    <CardMedia
                      className={item_media}
                      image={imageTypes[card.product_id - 1].product_name}
                      title="image title"
                    />
                    <Box className={line_box}>
                    </Box>
                    <Box className={title_box_new}>
                      {card.product_name}
                    </Box>
                    <Box className={size_box}>
                      <Box className={box_item}>
                        <Box style={{ display: 'flex' }}>
                          <svg width="13" height="2" viewBox="0 0 13 2" fill="none" xmlns="http://www.w3.org/2000/svg">
                            <line y1="1" x2="13" y2="1" stroke="black" />
                          </svg>
                        </Box>
                        <Box style={{ display: 'flex' }}>
                          {card.size ? card.size + ' г' : '100 г'}
                        </Box>
                        <Box style={{ display: 'flex' }}>
                          <svg width="13" height="13" viewBox="0 0 13 13" fill="none" xmlns="http://www.w3.org/2000/svg">
                            <line y1="6.5" x2="13" y2="6.5" stroke="black" />
                            <line x1="6.5" y1="2.18557e-08" x2="6.5" y2="13" stroke="black" />
                          </svg>
                        </Box>
                      </Box>
                    </Box>
                    <Box className={price_box}>
                      {card.price ? card.price + ' р' : '200 р'}
                    </Box>
                    <Box className={buttons_container}>
                      <Button className={button_item}>
                        Добавить
                      </Button>
                    </Box>
                  </Card>
                </Grid>
              ))
              : <div>No Data</div>
          }
        </Grid>
      </Container>
    </Box>
  );
}

export default CatalogMain;
