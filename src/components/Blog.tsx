import React, { useEffect, useState } from 'react';
import { Box, Typography, Container } from '@material-ui/core';
import { makeStyles } from '@material-ui/core/styles';

const useStyles =  makeStyles((theme: any) => ({
  box: {
    width: '100%',
    display: 'flex',
    justifyContent: 'center',
    flexDirection: 'column',
    padding: 20
  }
}));

interface Props {
}


const Blog: React.FC<Props> = () => {
  const { box } = useStyles();
  const [str, setData] = useState<any>([]);

  useEffect( () => {
    console.log(str);
    fetch('/users').then(res => res.json())
      .then(data => setData(data))
      .catch((err) => console.log(err));
  }, [])

  return (
    <Container maxWidth="md">
      <Box className={box}>
        <Typography gutterBottom variant="h4" component="h2">
          Уход за дикими животными
        </Typography>
        <Typography variant="body1" color="textSecondary" component="p">
        { str.length ? 'Полученные данные' + str[0].email : 'Данных нет!'}
        </Typography>
      </Box>
    </Container>
  );
}

export default Blog;
