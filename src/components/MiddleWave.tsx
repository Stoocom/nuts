import React from 'react';
import { Box } from '@material-ui/core';
import { makeStyles } from '@material-ui/core/styles';

const useStyles = makeStyles((theme) => ({
  slider: {
    width: '100%',
    height: '100%',
    marginTop: '-1%',
    justifyContent: 'space-evenly',
    display: 'flex',
    flex: 1,
    flexDirection: 'row',
    opacity: 1,
    position: 'absolute',
    zIndex: 30,
    [theme.breakpoints.down('sm')]: {
      marginTop: '5%',
    },
    [theme.breakpoints.down('xs')]: {
      marginTop: '10%',
    }
  },
  slider_img: {
    left: 0,
    top: 0,
    width: '100%',
    opacity: 1,
  },
}));

function MiddleWave() {
  const { slider, slider_img } = useStyles();
  return (
    <Box className={slider}>
      <Box className={slider_img}>
        <svg viewBox="0 0 1600 271" fill="none" xmlns="http://www.w3.org/2000/svg">
          <path fill-rule="evenodd" clip-rule="evenodd" d="M0 251.909L89.8917 218.388C178.442 184.867 358.225 117.824 536.667 117.824C715.108 117.824 894.892 184.867 1073.33 176.487C1251.78 168.106 1431.56 84.3031 1520.11 42.4016L1610 0.5V42.4016V27.9492C1521.45 27.9492 1251.78 193.143 1073.33 193.143C894.892 193.143 715.108 137.746 536.667 137.746C358.225 137.746 184.762 198.134 98.1707 232.071L0 270.5V251.909Z" fill="#DDDDDD" fill-opacity="0.5" />
        </svg>
      </Box>
    </Box>
  );
}

export default MiddleWave;
