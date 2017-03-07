import { createStore } from 'redux'
import reducer from './reducer.jsx'

//作成したreducerからstoreを作成
const store = createStore(reducer);

export default store;
