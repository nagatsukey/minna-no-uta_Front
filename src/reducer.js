import _ from 'lodash';
import axios from 'axios';

const initialState = {
  mediums: [], // 音楽データ一覧
   source: null,
   equalizer: {
      "31.25Hz": 0,
      "62.5Hz": 0,
      "125Hz": 0,
      "250Hz": 0,
      "500Hhz": 0,
      "1kHz": 0,
      "2kHz": 0,
      "4kHz": 0,
      "8kHz": 0,
      "16kHz": 0,
   }
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
    case 'PUT_SOURCE_FILE':
        return _.merge(state, { source: action.source });
        // return nextState;
    case 'CHANGE_EQUILAIZER':
        return _.merge(state, { equalizer: {[action.hz]: action.value}});
        // return nextState;
    default:
      return state
  }
}
