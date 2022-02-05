import React, { useState } from 'react';
import { useNavigate } from "react-router-dom";
import { Box, Button, TextField } from '@material-ui/core';
import { makeStyles } from '@material-ui/core/styles';
import { Link } from "react-router-dom";

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
    marginTop: 50,
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
    width: '200px',
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

function SignupPage() {
  const { main, title, formArea, form_box, input, buttons_container,
    button_item, notes, notes__text, notes__button, err_box } = useStyles();
  const [email, setEmail] = useState("");
  const [password, setPassword] = useState("");
  const [confirmPassword, setConfirmPassword] = useState("");
  const [error, setError] = useState("");
  const navigate = useNavigate();

  const handleSignup = async (e) => {
    e.preventDefault();
    console.log('handleSignup');

    if (password !== confirmPassword) {
      setError('Пароли не совпадают');
      return;
    }
    try {
      const response = await fetch('/users/signup', {
        method: 'POST',
        headers: { 'Content-Type': 'application/json' },
        body: JSON.stringify({ email, password })
      });
      const data = await response.json();
      if (data.message) {
        setError(data.message);
      }
      if (data.token) {
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
          <form className={form_box} onSubmit={handleSignup}>
            <Box className={title}>Регистрация</Box>
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
            <TextField
              className={input}
              id="standard-password-input"
              label="Подтверждение пароля"
              type="password"
              autoComplete="confirm-password"
              onChange={(e) => setConfirmPassword(e.target.value)}
            />
            {
              error
              ? <Box className={err_box}> {error} </Box>
              : <Box className={err_box}></Box>
            }
            <Box className={buttons_container}>
              <Button type="submit" className={button_item}>
                Зарегистрироваться
              </Button>
            </Box>
          </form>
          <Box className={notes}>
            <Box className={notes__text}>
              Зарегистрированы?
            </Box>
            <Link to={"/login"} className={notes__button}>
              Войти как зарегистрированный пользователь
            </Link>
          </Box>
        </Box>
      </Box>
    </section>
  );
}

export default SignupPage;
