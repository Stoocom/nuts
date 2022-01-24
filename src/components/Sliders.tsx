import React, {useState, useEffect} from 'react';
import { Box, } from '@material-ui/core';
import { makeStyles } from '@material-ui/core/styles';

const foto1 =  require("../images/PicsDesktop_net_7.jpg");
const foto2 =  require("../images/PicsDesktop_net_3.jpg");
const foto3 =  require("../images/PicsDesktop_net_4.jpg");
const foto4 =  require("../images/PicsDesktop_net_9.jpg");

const useStyles =  makeStyles((theme: any) => ({
  "@keyframes myEffect": {
    "0%": {
      opacity: 0.1
    },
    "20%": {
      opacity: 1
    },
    "80%": {
      opacity: 1
    },
    "100%": {
      opacity: 0.1
    }
  },
  myEffect: {
    animationName: '$myEffect',
    animationDuration: '7000ms',
    animationIterationCount: 'infinite',
    animationDirection: 'alternate',
    animationTimingFunction: 'ease-in-out',
  },
  slider: {
    backgroundColor: '#000',
    marginTop: '100px', 
    justifyContent: 'space-evenly',
    display: 'flex',
    flex: 1,
    flexDirection: 'row',
  },
  slider_img: {
    left: 0,
    top: 0,
    width: '100%',
    opacity: 1,
    //transition: 'all 0.2s',
  },
  slider_img_prev: {
    transform: 'translateX(-100%)',
    display: 'none',
  },
  slider_img_next: {
    transform: 'translateX(100%)',
    display: 'none',
  }
}));


const img2 = [
  { key: '124', src: foto1 },
  { key: '125', src: foto2 },
  { key: '126', src: foto3 },
  { key: '127', src: foto4 },
]


function Sliders() {
  const { myEffect, slider, slider_img, slider_img_prev, slider_img_next } = useStyles();
  const [activeIndex, setActiveIndex] = useState(0);

  useEffect(() => {
    setInterval(() => {
        setActiveIndex((current: any = 0) => {
            const res = current === img2.length - 1 ? 0 : current + 1
            return res
        })
    }, 7000)
    return () => clearInterval()
  }, []);

  const prevImgIndex = activeIndex ? activeIndex - 1 : img2.length - 1;
  const nextImgIndex = activeIndex === img2.length - 1 ? 0 : activeIndex + 1;
  return (
    <Box className={slider}>
        <img 
          key={img2[prevImgIndex].key} 
          className={`${slider_img} ${slider_img_prev}`} 
          src={img2[prevImgIndex].src}
          alt="no_picture"
        />
        <img 
          key={img2[activeIndex].key} 
          className={`${slider_img} ${myEffect}`} 
          src={img2[prevImgIndex].src}
          alt="no_picture"
        />
        <img 
          key={img2[nextImgIndex].key} 
          className={`${slider_img} ${slider_img_next}`} 
          src={img2[nextImgIndex].src}
          alt="no_picture" 
        /> 
    </Box>
  );
}

export default Sliders;
