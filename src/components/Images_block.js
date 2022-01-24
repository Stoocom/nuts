import React, {useState} from 'react';
import { Box } from '@material-ui/core';
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
    zIndex: 10
  },
  slider_img: {
    height: '700px',
    left: 0,
    top: 0,
    width: '100%',
    opacity: 1,
    objectFit: 'cover',
    backgroundColor: '#000',
  },
  links_slider: {
    position: 'absolute',
    top: '50%',
    left: '50%',
    marginRight: '-50%',
    transform: 'translate(-50%, -50%)',
    display: 'flex',
    flexWrap: 'wrap'
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
}));


const img = [
  { key: '124', src: foto },
]


function Images_block() {
  const { slider, slider_img } = useStyles();
  const [activeUrl] = useState(foto);
  return (
    <Box className={slider}>
        <img
          className={slider_img}
          key={img[0].key}
          src={activeUrl}
          alt="no_picture"
        />
    </Box>
  );
}

export default Images_block;
