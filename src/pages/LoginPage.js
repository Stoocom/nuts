import React, { useState } from 'react';
import { useNavigate } from "react-router-dom";
import { Box, Button, TextField } from '@material-ui/core';
import { makeStyles } from '@material-ui/core/styles';
import { Link } from "react-router-dom";
import { getAuth } from "../store/userSelector";
import { useSelector, shallowEqual } from "react-redux";
//import store from "../store";

const useStyles = makeStyles((theme) => ({
  main: {
    padding: '0px calc(50% - 585px)',
    zIndex: 1,
    fontSize: 18,
    lineHeight: '23px',
    textDecoration: 'none',
    fontWeight: 300,
    backgroundColor: '#F6F6F6',
    display: 'flex',
    justifyContent: 'center',
  },
  formArea: {
    width: '70%',
    height: '70%',
    paddingTop: 100,
    paddingBottom: 100
  },
  form_box: {
    display: 'flex',
    justifyContent: 'center',
    alignItems: 'center',
    flexDirection: 'column',
    backgroundColor: '#FFFFFF'
  },
  title: {
    display: 'flex',
    justifyContent: 'center',
    fontFamily: "Philosopher",
    fontSize: 40,
    marginTop: 60,
    marginBottom: 54,
  },
  input: {
    width: 350,
    marginTop: 26,
  },
  buttons_container: {
    marginTop: 40,
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
  notes: {
    height: 30,
    display: 'flex',
    flexDirection: 'row',
    justifyContent: 'center',
    alignItems: 'center',
    paddingBottom: 100,
    paddingTop: 40,
    backgroundColor: "#FFFFFF",
  },
  notes__text: {
    marginRight: 20,
    fontFamily: "Roboto",
  },
  notes__button: {
    textDecoration: 'none',
    fontFamily: "Philosopher",
    fontWeight: 600,
    color: 'black'
  },
  err_box: {
    marginTop: 10,
    display: 'flex',
    justifyContent: 'center',
    fontFamily: 'Roboto',
    width: '100%',
    height: 25,
    color: 'red'
  }
}))

function LoginPage() {
  const { main, title, formArea, form_box, input, buttons_container,
    button_item, notes, notes__text, notes__button, err_box } = useStyles();
  const [email, setEmail] = useState("");
  const [password, setPassword] = useState("");
  const [error, setError] = useState("");
  const { isAuth } = useSelector(getAuth, shallowEqual);
  const navigate = useNavigate();

  if (isAuth) {
    navigate('/');
  }

  const handleLogin = async (e) => {
    e.preventDefault();
    console.log('handleLogin');
    try {
      const response = await fetch('/users/login', {
        method: 'POST',
        headers: { 'Content-Type': 'application/json' },
        body: JSON.stringify({ email, password })
      })
      const data = await response.json();
      console.log(data);
      if (data.message) {
        setError(data.message);
      }
      if (data.token) {
        setError("");
        localStorage.setItem("user", JSON.stringify(data));
        navigate("/");
        window.location.reload();
      }
    } catch (err) {
      console.log(err);
    }
  };


  return (
    <section>
      <Box className={main}>
        <Box className={formArea}>
          <form className={form_box} onSubmit={handleLogin}>
            <Box className={title}>Авторизация</Box>
            <TextField
              className={input}
              id="standard-required"
              label="Почта"
              onChange={(e) => setEmail(e.target.value)}
            />
            <TextField
              className={input}
              id="standard-password-input"
              label="Пароль"
              type="password"
              autoComplete="current-password"
              onChange={(e) => setPassword(e.target.value)}
            />
            {
              error
              ? <Box className={err_box}> {error} </Box>
              : <Box className={err_box}></Box>
            }
            <Box className={buttons_container}>
              <Button type="submit" className={button_item}>
                Войти
              </Button>
            </Box>
          </form>
          <Box className={notes}>
            <Box className={notes__text}>
              Не зарегистрированы?
            </Box>
            {/* <Button className={notes__button}>
              Регистрация
            </Button> */}
            <Link to={"/signup"} className={notes__button}>
              Регистрация
            </Link>
          </Box>
        </Box>
      </Box>
    </section>
  );
}

export default LoginPage;
