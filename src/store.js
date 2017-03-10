import { createStore, applyMiddleware } from 'redux'
import logger from 'redux-logger';
import reducer from './reducer'

//作成したreducerからstoreを作成
const store = (initialState) => (
  createStore(
    reducer,
    initialState,
    applyMiddleware(logger())
  )
);

export default store;
