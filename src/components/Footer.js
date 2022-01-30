import React from 'react';
import { Box, Container, Grid, Card, Link } from '@material-ui/core';
import { makeStyles } from '@material-ui/core/styles';

const useStyles =  makeStyles((theme) => ({
  main: {
    width: '100%',
    height: "100%",
    backgroundColor: '#DCF6C7',
    margin: 0
  },
  item: {
    width: '170px',
    margin: '0 auto',
    marginBottom: 10,
    display: 'flex',
    flexDirection: 'column',
    justifyContent: 'center',
    color: '#000000',
    backgroundColor: '#DCF6C7',
    boxShadow: 'none',
    [theme.breakpoints.down('md')]: {
      height: "160px",
    },
    [theme.breakpoints.down('sm')]: {
      height: "120px",
      fontSize: '12px',
      justifyContent: 'start',
    }
  }
}));

const menusList = [ 
  { id: '1', isHaveButtons: true, title: 'Каталог', listArray: [ { idList: 2, name: "О нас" }, { idList: 3, name: "Акции" }, { idList: 4, name: "Доставка" }]},
  { id: '2', isHaveButtons: true, title: 'Личный кабинет', listArray: [ { idList: 2, name: "Вход" }, { idList: 3, name: "Регистрация" } ]},
  { id: '3', isHaveButtons: false, title: 'Контакты', listArray: [ { idList: 2, name: "89008002020" }, { idList: 3, name: "bonappetite@gmail.com" }, { idList: 4, name: "Санкт-Петербург" }]},
]

function ItemsList({ title, isHaveButtons, list }) {
  console.log(isHaveButtons);
  console.log(list);
  return (
    <Box style={{ height: '100%', marginLeft: 10, display: 'flex', justifyContent: 'start',flexDirection: 'column'}}>
      { 
      isHaveButtons == true
        ? 
          <>
            <Link style={{ fontWeight: 500, height: '30px' }}>
              {title}
            </Link>
            { list.map((card, index) => {
                return (
                  <Link key={index} style={{ fontWeight: 300, height: '30px' }}>
                    {card.name}
                  </Link>
                )
              })
            }
          </>
        : 
        <>
          <Box style={{ fontWeight: 500, height: '30px' }}>
            {title}
          </Box>
          { list.map((card, index) => {
              return (
                <Box key={index} style={{ fontWeight: 300, height: '30px' }}>
                  {card.name}
                </Box>
              )
            })
          }
        </>
      }
    </Box>
  )
}

function Footer() {
  const { main, item } = useStyles();
  //console.log(menusList);
  return (
    <Box className={main}>
      <Container maxWidth="lg" style={{ padding: 30 }}>
        <Grid container>
          { 
            menusList.length 
            ? menusList.map(( {id, isHaveButtons, title, listArray } ) => (
                <Grid item key={id} xs={6} sm={6} md={4}>
                  <Card className={item}>
                    <ItemsList title={title} list={listArray} isHaveButtons={isHaveButtons}/>
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

export default Footer;
