import React, { useEffect } from 'react';
import { Container, Box, Grid, Card, CardMedia, Button } from '@material-ui/core';
import { makeStyles } from '@material-ui/core/styles';
import nuts from "../images/catalog/types/type_nuts.jpg";
import dried_fruits from "../images/catalog/types/type_dried_fruits.jpg";
import spices from "../images/catalog/types/type_spices.jpg";
import { getAllTypes } from "../store/typesSelector";
import { useSelector, shallowEqual } from "react-redux";
import { addAllTypesThunk } from '../store/typesReducer';
import store from "../store";

const useStyles = makeStyles((theme) => ({
  main: {
    backgroundColor: "#FDFDFC",
    width: "100%",
    height: "100%",
    position: "relative",
    margin: 0,
  },
  card_container: {
    boxShadow: '4px 4px 6px rgba(116, 111, 111, 0.25)',
    border: '0.2px solid #DDDDDD'
  },
  button_box: {
    width: '100%',
    height: '46px',
    backgroundColor: "#FFFFFF",
    display: 'flex',
    justifyContent: 'center',
    alignItems: "center",
  },
  title_box: {
    width: '100%',
    height: '46px',
    backgroundColor: "#D6F7BC",
    display: 'flex',
    justifyContent: 'center',
    fontSize: "22px",
    lineHeight: "25px",
    alignItems: "center",
  },
  item_media: {
    paddingTop: '58%',
    margin: '15px 5px'
  },
  buttons_container: {
    width: '100%',
    height: '66px',
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
    width: '120px',
    height: '33px',
    "&:hover": {
      color: '#99D967',
      backgroundColor: "#FFFFFF",
    },
  }
}));

const imageTypes = [
  { type: nuts }, { type: dried_fruits }, { type: spices }
];
//const testArray = [{ id: 1, name: "nuts" }, { id: 2, name: "dried_fruits" }, { id: 3, name: "spices" }];

function Catalog() {
  const { main, card_container, item_media, title_box, buttons_container, button_item } = useStyles();
  const { types } = useSelector(getAllTypes, shallowEqual);

  const requestTypes = () => {
    store.dispatch(addAllTypesThunk());
  };


  useEffect(() => {
    //console.log(imageTypes[0].type);
    console.log('useEffect types');
    // fetch('types').then(res => res.json())
    //   .then(data => setTypes(data))
    //   .catch((err) => console.log(err));
    requestTypes();

  }, [])
  return (
    <Box className={main}>
      <Container maxWidth="lg" style={{ padding: 30 }}>
        <Grid container spacing={8}>
          {
            types
              ?
              types.map((card) => (
                <Grid item key={card.type_id} xs={12} sm={6} md={4}>
                  <Card className={card_container}>
                    <CardMedia
                      className={item_media}
                      image={imageTypes[card.type_id - 1].type}
                      title="image title"
                    />
                    <Box className={title_box}>
                      {card.name}
                    </Box>
                    <Box className={buttons_container}>
                      <Button className={button_item}>
                        Перейти
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

export default Catalog;
