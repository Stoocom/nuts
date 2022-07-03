import React, { useState } from 'react';
import { Box } from '@material-ui/core';
import { makeStyles } from '@material-ui/core/styles';


const textProduct = {
  product_id: 1,
  product_name: "Миндаль",
  size: 100,
  price: 100
}


const useStyles = makeStyles((theme) => ({
  main: {
    padding: '60px calc(50% - 585px)',
    backgroundColor: "#F6F6F6",
  },
  box: {
    padding: '60px 5px',
    width: '100%',
    height: '300px',
    backgroundColor: "#FFFFFF",
    display: 'flex',
    flexDirection: 'row',
    [theme.breakpoints.down('xs')]: {
      flexDirection: 'column',
    }
  },
  image_block: {
    width: '50%',
    height: '100%',
    backgroundColor: 'red',
    marginLeft: 36,
    [theme.breakpoints.down('xs')]: {
      width: '100%',
      marginLeft: 0,
    }
  },
  description_block: {
    width: '50%',
    height: '100%',
    backgroundColor: 'blue',
    marginRight: 36,
    [theme.breakpoints.down('xs')]: {
      width: '100%',
      marginRight: 0,
    }
  },


}));

function Product({ card }: any) {
  const { main, box, image_block, description_block } = useStyles();
  const [prod, setProduct] = useState(card);
  //console.log(prod);

  return (
    <Box className={main}>
      <Box className={box}>
        <Box className={image_block}>
          ImageBlock
        </Box>
        <Box className={description_block}>
          {
            textProduct
              ? textProduct.product_name
              : <Box>Нет данных</Box>
          }
        </Box>
      </Box>
    </Box>
  );
}

export default Product;
