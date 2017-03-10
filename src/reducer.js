import _ from 'lodash';
import axios from 'axios';

const initialState = {
  mediums: [], // 音楽データ一覧
};

export default function reducer(state = initialState, action) {
  switch(action.type) {
    case 'DONWLOAD_MUSIC':
      axios({
        method: 'get',
        header: {
          'Access-Control-Allow-Origin': '*',
        },
        url: 'http://133.92.145.250:3000/api/medium'
      }).then(res => {
        const nextState = _.merge(state, { mediums: res.data.media });
        return nextState;
      });
    default:
      return state
  }
}
