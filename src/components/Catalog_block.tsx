import React from 'react';
import { Box } from '@material-ui/core';
import { makeStyles } from '@material-ui/core/styles';

const useStyles =  makeStyles((theme: any) => ({
  slider: {
    height: '100%',
    justifyContent: 'space-evenly',
    display: 'flex',
    flex: 1,
    flexDirection: 'row',
    opacity: 1,
    marginTop: '-13.4%',
    zIndex: 10,
    position: 'relative',
  },
  slider_img: {
    left: 0,
    top: 0,
    width: '100%',
    opacity: 1,
  },
  catalog: {
    backgroundColor: '#000',
    height: '100%',
    width: '100%',
    top: '50%',
    left: '50%',
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

function TopWave_block() {
  const { slider, slider_img, catalog } = useStyles();
  return (
    <Box className={slider}>
      <Box className={slider_img}>
        <svg viewBox="0 0 1599 270" fill="none" xmlns="http://www.w3.org/2000/svg" xmlnsXlink="http://www.w3.org/1999/xlink">
          <path d="M0 269L228 186L348.5 156L408 147.5L466.5 141L578.5 134.5L1037.5 195.5L1235 161L1437 82.4999L1443 80.4999L1535.5 40.4999L1600 26.9999V269V977L1548 987.5L1362.5 1066L1250 1104L1130.5 1129.5L1026.5 1138.5L792.5 1105L548.5 1075.5L303.5 1104L204.5 1138.5L96 1170L0 1208V269Z" fill="#FDFDFC"/>
          <path fillRule="evenodd" clipRule="evenodd" d="M-4.5 215.5L31 202.5L77.5 188C165.503 154.569 355.825 109.482 533.047 109.789C710.269 110.095 888.692 186.863 1065.93 178.774C1243.17 170.685 1421.87 87.0356 1509.88 45.2087L1599.23 3.38419L1599.16 45.3633L1599.19 30.8841C1511.24 30.7319 1243.12 195.768 1065.9 195.461C888.678 195.154 710.219 139.345 532.997 139.039C355.774 138.732 183.392 198.934 97.3336 232.785L-0.232882 271.116L-4.5 215.5Z" fill="#DDDDDD"/>
        </svg>
      </Box>
    </Box>
  );
}

export default TopWave_block;
