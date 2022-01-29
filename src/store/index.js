//import catalogReducer from './catalogReducer';
import typesReducer from './typesReducer';
// import userReducer from './userReducer';
import { configureStore } from '@reduxjs/toolkit';

const reducers = ({
    // catalog: catalogReducer,
    types: typesReducer,
    // user: userReducer    
 });

export const store = configureStore({
  reducer: reducers,
  devTools: process.env.NODE_ENV !== 'production',
})

export default store;