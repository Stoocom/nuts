import React from 'react';
import { useLocation, useNavigate, Link as LinkRouter } from 'react-router-dom';
import { Box } from '@material-ui/core';
import { makeStyles } from '@material-ui/core/styles';

const useStyles = makeStyles((theme: any) => ({
  main: {
    padding: '0px calc(50% - 585px)',
    zIndex: 1,
    fontSize: 18,
    lineHeight: '23px',
    //paddingLeft: '4%',
    //paddingTop: '5%',
    textDecoration: 'none',
    fontWeight: 300,
    backgroundColor: '#F6F6F6'
  },
  path: {
    display: 'flex',
    justifyContent: 'flex-start',
    flexDirection: 'row',
    alignItems: 'center',
    marginBottom: 10,
    paddingTop: '5%',
    paddingLeft: '3%'
  },
  links: {
    display: 'flex',
    flexDirection: 'row',
    justifyContent: 'start',
    alignItems: 'center',
    paddingLeft: '3%'
  }
}))


const Location = (props: any) => {
  const { main, path, links } = useStyles();
  const navigate = useNavigate();
  const location = useLocation();
  //console.log(location.pathname.split('/'));
  const locationArray = location.pathname.split('/');
  locationArray.splice(0, 1);
  let namesArray = [...locationArray];
  //console.log(namesArray);
  //console.log(locationArray);

  if (namesArray.length === 1) {
    if (namesArray[0] === "catalog") {
      namesArray[0] = "Каталог";
    } else if (namesArray[0] === "basket") {
      namesArray[0] = "Корзина";
    }
  } else if (namesArray.length === 2) {
    namesArray[0] = "Каталог";
    namesArray[1] = props.nameCategory;
  } else if (namesArray.length === 3) {
    namesArray[1] = props.nameCategory;
    namesArray[2] = props.productName;
  }

  function split(arr: any, index: number) {
    let newArray = [...arr];
    return "/" + newArray.splice(0, (index + 1)).join('/');
  }

  return (
    <Box className={main}>
      <Box className={path}>
        {
          namesArray.map((el, index) => {
            if (namesArray.length === index + 1) {
              return (
                <Box key={index}>
                  <LinkRouter style={{ textDecoration: 'none', color: '#000000' }} to={`${split(locationArray, index)}`} key={index} >
                    {el
                      ? <span>{namesArray[index]}</span>
                      : null
                    }
                  </LinkRouter>
                </Box>
              )
            } else {
              return (
                <Box key={index}>
                  <LinkRouter to={`${split(locationArray, index)}`} key={index}>
                    {el
                      ? <span>{namesArray[index]}</span>
                      : null
                    }
                  </LinkRouter>
                  <svg width="10" height="18" viewBox="0 0 10 18" fill="none" xmlns="http://www.w3.org/2000/svg">
                    <path d="M1 1L8.5 10L1 17.5" stroke="black" />
                  </svg>
                </Box>
              )
            }
          })
        }
      </Box>
      <Box className={links} onClick={() => navigate(-1)}>
        <svg width="26" height="14" viewBox="0 0 26 14" fill="none" xmlns="http://www.w3.org/2000/svg">
          <path d="M14 1L2 7.5M2 7.5L14 13.5M2 7.5H25.5" stroke="black" />
        </svg>
        <Box style={{ marginLeft: 10, marginTop: 1, fontWeight: 300, fontFamily: 'Roboto', }} >Назад</Box>
      </Box>
    </Box>
  );
};

export { Location };
