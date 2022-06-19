import React, { useState } from 'react';
import { Box, Grid, Card, CardMedia, Button } from '@material-ui/core';
import { makeStyles } from '@material-ui/core/styles';
import { Link } from "react-router-dom";
import store from "../store";

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

function CatalogProduct({ card, imageUrl, addFullProductToCart }: any) {
  const { card_container, item_media, title_box_new, buttons_container, button_item,
    line_box, size_box, box_item, price_box } = useStyles();
  console.log(card);
  const [productQuantity, setProductQuantity] = useState(1);

  const incrementQuantity = (count: number) => {
    console.log('Увеличение');
    if (count < 20) {
      setProductQuantity(count + 1);
    }
  }
  const decrementQuantity = (count: number) => {
    console.log('Уменьшение');
    if (count > 1) {
      setProductQuantity(count - 1);
    }
  }

  return (
    <Grid item key={card.product_id} style={{ zIndex: 50 }} xs={12} sm={6} md={4}>
      <Card className={card_container}>
        <Link to={'/catalog/' + card.product_id} state={card} >
          <CardMedia
            className={item_media}
            //image={imageTypes[card.product_id - 1].product_name}
            image={imageUrl}
            title="image title"
          />
        </Link>
        <Box className={line_box}>
        </Box>
        <Box className={title_box_new}>
          {card.product_name}
        </Box>
        <Box className={size_box}>
          <Box className={box_item}>
            <Box
              style={{ display: 'flex', cursor: 'pointer' }}
              onClick={() => decrementQuantity(productQuantity)}
            >
              <svg width="13" height="2" viewBox="0 0 13 2" fill="none" xmlns="http://www.w3.org/2000/svg">
                <line y1="1" x2="13" y2="1" stroke="black" />
              </svg>
            </Box>
            <Box style={{ display: 'flex' }}>
              {card.size ? card.size + ' г' : '100 г'}
            </Box>
            <Box
              style={{ display: 'flex', cursor: 'pointer' }}
              onClick={() => incrementQuantity(productQuantity)}
            >
              <svg width="13" height="13" viewBox="0 0 13 13" fill="none" xmlns="http://www.w3.org/2000/svg">
                <line y1="6.5" x2="13" y2="6.5" stroke="black" />
                <line x1="6.5" y1="2.18557e-08" x2="6.5" y2="13" stroke="black" />
              </svg>
            </Box>
          </Box>
        </Box>
        <Box className={price_box}>
          {card.price &&  productQuantity? productQuantity + ' уп. ' + (card.price * productQuantity) + ' р' : 'Нет в наличии'}
        </Box>
        <Box className={buttons_container}>
          <Button 
            className={button_item}
            onClick={() => store.dispatch(addFullProductToCart({...card, quantity: productQuantity }))}
          >
            Добавить
          </Button>
        </Box>
      </Card>
    </Grid>
  );
}

export default CatalogProduct;
