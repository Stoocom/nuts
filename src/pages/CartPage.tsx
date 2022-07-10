import React from 'react';
import { Location } from '../components/Location';
import CartProduct from '../components/CartProduct';
import { Box, Grid, Button } from '@material-ui/core';
import { makeStyles } from '@material-ui/core/styles';
import { getCartProducts } from "../store/cartSelector";
import { getAuth } from "../store/userSelector"
import { useSelector, shallowEqual } from "react-redux";
import { AddProductToCart,  removeProductFromCart, removeFullProductFromCart} from '../store/cartReducer';
import { useForm, SubmitHandler } from "react-hook-form";
import { signupThunk } from '../store/userReducer';
import store from "../store";

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
  },
  form: {
    width: 400,
    marginButtom: '10px',
    fontFamily: 'Philosopher',
    fontWeight: 400,
    fontSize: '30px',
    lineHeight: '50px',
    display: 'flex',
    flexDirection: "column",
    gap: 20,
  },
  padding_content: {
    padding: '20px calc(50% - 585px)',
    marginLeft: '30px',
  },
  itemList: {
    height: '78px',
    fontFamily: 'Philosopher',
    fontStyle: 'Regular',
    fontSize: '22px',
    lineHeight: '25px',
    padding: '5px 50px',
    border: '1px solid #7DC048',
    borderRadious: 10,
    "&:hover": {
      color: '#FFFFFF',
      backgroundColor: "#7DC048",
    },
    "&:focus": {
      color: '#FFFFFF',
      backgroundColor: "#7DC048",
    }
  },
  input: {
    border: '1px solid #7DC048',
    padding: '10px 10px',
    fontFamily: 'Philosopher',
    fontStyle: 'Regular',
    fontSize: '22px',
    lineHeight: '25px',
  }
}));

const imageTypes = [
  { product_name: mindal }, { product_name: mindal }, { product_name: mindal },
  { product_name: gretskiy }, { product_name: gretskiy }, { product_name: gretskiy },
  { product_name: funduk }, { product_name: funduk }, { product_name: funduk },
  { product_name: keshiu }, { product_name: keshiu }, { product_name: keshiu },
  { product_name: arahis }, { product_name: arahis }, { product_name: arahis },
];

export type Inputs = {
  phone: string,
  email: string,
  comment: string,
};

function CartPage() {
  const { main, title, cartCount, form, itemList, padding_content, input } = useStyles();
  const { cartProducts } = useSelector(getCartProducts, shallowEqual);
  const { isAuth } = useSelector(getAuth, shallowEqual);
  const { register, handleSubmit, watch, formState: { errors } } = useForm<Inputs>({
    mode: "onChange"
  });
  const onSubmit: SubmitHandler<Inputs> = (data: Inputs) => {
    console.log(data);
    store.dispatch(signupThunk(data));
  }
  
  const sum = (array: any) => {
    return array.reduce((sum: number, prod: any) => {
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
              ? cartProducts.map((card: any, index: number) => (
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
          <Box className={padding_content}>
            {
              true ? <form className={form} onSubmit={handleSubmit(onSubmit)}>
                    <input className={input} placeholder={"телефон"} {...register("phone", {required: true})} />
                    {errors.phone && <span>Телефон необходим для подтверждения заказа</span>}
                    <input className={input} placeholder={"e-mail"} {...register("email")} />
                    <textarea className={input} placeholder={"Комментарий"} {...register("comment")} />
                    <input className={itemList} type="submit" value="Оформить заказ"/>
                  </form>
                  : <Button className={itemList}>Оформить заказ</Button>
            }
          </Box>

        </Box>
      </div>
    </section>
  );
}

export default CartPage;
