import React from 'react';
import { Box, Grid, Card, CardMedia, Button } from '@material-ui/core';
import { makeStyles } from '@material-ui/core/styles';
import { Link } from "react-router-dom";
import store from "../store";

const useStyles = makeStyles((theme) => ({
  main: {
    width: '100%',
    height: '100%',
  },
  card_container: {
    boxShadow: '4px 4px 6px rgba(116, 111, 111, 0.25)',
    border: '0.2px solid #DDDDDD',
    height: '88px',
    width: '290px',
    margin: 'auto',
    zIndex: 40,
    display: 'flex',
    justifyDirection: 'row'
  },
  item_media: {
    paddingTop: '45px',
    width: '100%',
    height: '20%',
    backgroundSize: 'cover',
    marginLeft: 5
  },
  title: {
    fontFamily: 'Philosopher',
    fontStyle: 'Regular',
    fontSize: '18px',
    fontWeight: 400,
    marginLeft: 10,
    marginTop: 10,
    marginBottom: 7,
  },
  content: {
    width: '100%',
    display: 'flex',
    flexDirection: 'row',
    justifyContent: 'start',
    alignItems: 'center'
  },
  quantity: {
    width: 75,
    height: '100%',
    marginLeft: 10,
  },
  total: {
    width: 55,
    height: '100%',
    marginLeft: 10,
  },
  close: {
    width: 30,
    height: '50%',
    minWidth: '35px'
  },
  text_title: {
    fontSize: 10,
    left: 0
  },
  size_box: {
    display: 'flex',
    justifyContent: 'start',
    marginTop: 10
  },
  box_item: {
    width: '100%',
    height: '12px',
    border: '0.2px solid #DDDDDD',
    display: 'flex',
    flexDirection: 'row',
    justifyContent: 'space-between',
    alignItems: 'center',
    fontSize: '10px',
    lineHeight: '10px',
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
}));

function CartProduct({ card, imageUrl, addProduct, removeProduct, removeFullProduct }) {
  const { main, card_container, item_media,
    title, content, quantity, total, close,
    text_title, size_box, box_item } = useStyles();
  console.log(card);
  return (
    <Grid item style={{ zIndex: 50 }} xs={12} sm={6} md={4} lg={4}>
      <Card className={card_container}>
        <Link style={{
          width: '150px', height: '100%', display: 'flex', justifyContent: 'center',
          alignItems: "center",
        }} to={'/catalog/' + card.product_id} state={card}>
          <CardMedia
            className={item_media}
            image={imageUrl}
            title="image_title"
          />
        </Link>
        <Box className={main}>
          <Box className={title}>
            {card.product_name}
          </Box>
          <Box className={content}>
            <Box className={quantity}>
              <Box className={text_title}>
                Количество
              </Box>
              <Box className={size_box}>
                <Box className={box_item}>
                  <Box 
                    style={{ display: 'flex', cursor: 'pointer' }}
                    onClick={() => store.dispatch(removeProduct(card))}
                  >
                    <svg width="9" height="2" viewBox="0 0 13 2" fill="none" xmlns="http://www.w3.org/2000/svg">
                      <line y1="1" x2="13" y2="1" stroke="black" />
                    </svg>
                  </Box>
                  <Box style={{ display: 'flex' }}>
                    {card.size ? card.size + ' г' : '100 г'}
                  </Box>
                  <Box 
                    style={{ display: 'flex', cursor: 'pointer' }}
                    onClick={() => store.dispatch(addProduct(card))}
                  >
                    <svg width="9" height="13" viewBox="0 0 13 13" fill="none" xmlns="http://www.w3.org/2000/svg">
                      <line y1="6.5" x2="13" y2="6.5" stroke="black" />
                      <line x1="6.5" y1="2.18557e-08" x2="6.5" y2="13" stroke="black" />
                    </svg>
                  </Box>
                </Box>
              </Box>
            </Box>
            <Box className={total}>
              <Box className={text_title}>
                Итого
              </Box>
              <Box style={{ marginTop: 10, fontSize: 12 }}>
                    { card.quantity*card.price } руб
              </Box>
            </Box>
            <Button 
              className={close}
              onClick={ () => store.dispatch(removeFullProduct(card))}
            >
              <Box style={{ width: '15px' }}>
                <svg viewBox="0 0 30 30" fill="none" xmlns="http://www.w3.org/2000/svg">
                  <path fillRule="evenodd" clipRule="evenodd" d="M19.435 20.1422L10.2426 10.9498L10.9497 10.2427L20.1421 19.4351L19.435 20.1422Z" fill="black" />
                  <path fillRule="evenodd" clipRule="evenodd" d="M10.2426 19.435L19.435 10.2426L20.1421 10.9497L10.9497 20.1421L10.2426 19.435Z" fill="black" />
                  <circle cx="15" cy="15" r="14.5" stroke="black" />
                </svg>
              </Box>

            </Button>
          </Box>
        </Box>
      </Card>

    </Grid>
  );
}

export default CartProduct;
