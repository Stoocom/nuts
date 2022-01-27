import React from 'react';
import { Box } from '@material-ui/core';
import { makeStyles } from '@material-ui/core/styles';

const useStyles =  makeStyles((theme) => ({
  slider: {
    height: '100%',
    justifyContent: 'space-evenly',
    display: 'flex',
    flex: 1,
    flexDirection: 'row',
    opacity: 1,
    position: 'relative',
    zIndex: 10,
  },
  slider_img: {
    left: 0,
    top: 0,
    width: '100%',
    opacity: 1,
  },
}));

function DownWave() {
  const { slider, slider_img } = useStyles();
  return (
    <Box className={slider}>
      <Box className={slider_img}>
        <svg viewBox="0 954 1600 273" fill="none" xmlns="http://www.w3.org/2000/svg" xmlnsXlink="http://www.w3.org/1999/xlink">
          <path d="M0 269L228 186L348.5 156L408 147.5L466.5 141L578.5 134.5L1037.5 195.5L1235 161L1437 82.4999L1443 80.4999L1535.5 40.4999L1600 26.9999V269V977L1548 987.5L1362.5 1066L1250 1104L1130.5 1129.5L1026.5 1138.5L792.5 1105L548.5 1075.5L303.5 1104L204.5 1138.5L96 1170L0 1208V269Z" fill="#FDFDFC"/>
          <path fillRule="evenodd" clipRule="evenodd" d="M0 1208.27L89.3333 1174.5C177.333 1140.73 356 1073.19 533.333 1073.19C710.667 1073.19 889.333 1140.73 1066.67 1132.29C1244 1123.85 1422.67 1039.42 1510.67 997.212L1600 955V997.212V982.652C1512 982.652 1244 1149.07 1066.67 1149.07C889.333 1149.07 710.667 1093.26 533.333 1093.26C356 1093.26 183.615 1154.1 97.561 1188.29L0 1227V1208.27Z" fill="#DDDDDD"/>
        </svg>
      </Box>
    </Box>
  );
}

export default DownWave;
