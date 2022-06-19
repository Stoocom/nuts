import React, {useState} from 'react';
import { Box, Button } from '@material-ui/core';
import { makeStyles } from '@material-ui/core/styles';
import { changeLastType } from '../store/productsReducer';
import store from "../store";

const useStyles = makeStyles((theme) => ({
  main: {
    width: '100%',
    height: '100%',
    backgroundColor: '#F6F6F6',
    padding: '0px calc(50% - 800px)',
    paddingTop: 50
  },
  mainList: {
    padding: '15px',
  },
  buttons: {
    display: 'flex',
    textAlign: 'center',
    flexDirection: 'row',
    justifyContent: 'center',
    [theme.breakpoints.down('xs')]: {
      flexDirection: 'column',
    }
  },
  itemList: {
    width: '180px',
    height: '78px',
    fontFamily: 'Philosopher',
    fontStyle: 'Regular',
    fontSize: '22px',
    lineHeight: '25px',
    padding: '5px 50px',
    border: '1px solid #7DC048',
    borderRadious: 10,
    "&:hover": {
      color: '#FFFFFF',
      backgroundColor: "#7DC048",
    },
    "&:focus": {
      color: '#FFFFFF',
      backgroundColor: "#7DC048",
    }
  }
}));

interface Type {
  type_id: number;
  name: string;
}


const testArrayTypes = [{ type_id: 1, name: "Орехи" }, { type_id: 2, name: "Сухофрукты" }, { type_id: 3, name: "Пряности" }];

function TypesMenu() {
  const { main, mainList, buttons, itemList } = useStyles();
  const [ types, setTypes] = useState<Type[]>(null!);
  const filterProductsByType = (id: number) => {
    console.log("filterProductsByType" + id);
    store.dispatch(changeLastType(id));
  };

  return (
    <Box className={main}>
      <Box className={buttons}>
        {
          types
            ? types.map((card) => {
              return <Box key={card.type_id} className={mainList}>
                <Button
                    className={itemList}
                    onClick={ () => {
                      filterProductsByType(card.type_id);
                    }}
                >
                  {card.name}
                </Button>
              </Box>
            })
            : testArrayTypes.map((card: Type) => {
              return <Box key={card.type_id} className={mainList}>
                <Button className={itemList} onClick={() => filterProductsByType(card.type_id)}>
                  {card.name}
                </Button>
              </Box>
            })
        }
      </Box >
    </Box>
  );
}

export default TypesMenu;
