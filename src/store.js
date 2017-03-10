import { createStore } from 'redux'
import reducer from './reducer'

//作成したreducerからstoreを作成
const store = createStore(reducer);

export default store;
