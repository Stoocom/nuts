import React, {useState} from 'react';
import { Box, Button } from '@material-ui/core';
import { makeStyles } from '@material-ui/core/styles';
const foto =  require("../images/catalog/nuts_images.jpg");

const useStyles =  makeStyles((theme) => ({
  slider: {
    backgroundColor: '#000',
    width: '100%',
    height: '100%',
    justifyContent: 'space-evenly',
    display: 'flex',
    flex: 1,
    flexDirection: 'row',
    opacity: 1,
    zIndex: 10,
    position: 'relative'
  },
  slider_img: {
    height: '700px',
    left: 0,
    top: 0,
    width: '100%',
    opacity: 1,
    objectFit: 'cover',
    backgroundColor: '#000',
    [theme.breakpoints.down('md')]: {
      height: '650px',
      objectPosition: '10%'
    },
    [theme.breakpoints.down('xs')]: {
      height: '550px'
    },
  },
  links__active: {
    borderRadius: 0,
    backgroundColor: "grey",
    color: 'white',
    opacity: '0.4',
    padding: '20px',
    margin: '10px',
    "&:hover": {
      backgroundColor: "grey",
      color: 'white',
      opacity: '0.6',
    },
    [theme.breakpoints.down('xs')]: {
      display: 'none'
    }
  },
  text_box: {
    position: 'absolute',
    top: '100px',
    left: '5%',
    width: '90%',
    height: '500px',
    display: 'flex',
    flexWrap: 'wrap',
    zIndex: 20,
    flexDirection: 'column',
    justifyContent: 'start',
    color: '#000000'
  },
  box_title: {
    fontSize: 'calc(12px + 44 * (100vmin / 1200))',
    lineHeight: '5vmin',
    fontFamily: 'Philosopher',
    [theme.breakpoints.down('sm')]: {
      textAlign: 'center',
      lineHeight: '8vmin',
    },
    [theme.breakpoints.up('md')]: {
      textAlign: 'start',
      lineHeight: '5vmin',
    },
    [theme.breakpoints.up('lg')]: {
      fontSize: '56px',
    },
  },
  box_text: {
    marginTop: 50,
    fontSize: 'calc(4px + 20 * (100vmin / 1200))',
    lineHeight: '3vmin',
    fontWeight: 300,
    [theme.breakpoints.down('sm')]: {
      textAlign: 'center',
      lineHeight: '2.5vmin',
    },
    [theme.breakpoints.up('lg')]: {
      fontSize: '30px',
    },
  },
  box_button: {
    marginTop: 50,
    fontSize: '12px',
    fontWeight: 500,
    border: '1px solid #99D967',
    backgroundColor: "#99D967",
    color: "#FFFFFF",
    borderRadius: '0',
    width: '45%',
    height: '70px',
    display: 'flex',
    justifyContent: 'center',
    alignItems: "center",
    transition: '0.4s',
    "&:hover": {
      color: '#99D967',
      backgroundColor: "#FFFFFF",

    },
    [theme.breakpoints.down('sm')]: {
      margin: '0 auto',
      fontSize: '14px',
      marginTop: 50,
      height: '50px',
    },
    [theme.breakpoints.up('sm')]: {
      marginTop: 50,
      fontSize: '18px',
    },
    [theme.breakpoints.up('md')]: {
      fontSize: '25px',
      width: '40%',
    },
    [theme.breakpoints.up('lg')]: {
      width: '45%',
    },
  },
}));

const img = [
  { key: '124', src: foto },
]

function Images_block() {
  const { slider, slider_img, text_box, box_button, box_text, box_title } = useStyles();
  const [activeUrl] = useState(foto);
  return (
    <Box className={slider}>
        <img
          className={slider_img}
          key={img[0].key}
          src={activeUrl}
          alt="no_picture"
        />
      <Box className={text_box}>
          <Box className={box_title}>
            Отборные орехи <br /> и сухофрукты
          </Box>
          <Box className={box_text}>
            Первая бесплатная доставка <br /> всем новым покупателям
          </Box>
          <Button className={box_button}>
            Перейти к покупкам
          </Button>
        </Box>
    </Box>
  );
}

export default Images_block;
