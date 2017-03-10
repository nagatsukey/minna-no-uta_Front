import React from 'react'
import ReactDOM from 'react-dom'
import { Provider } from 'react-redux';
import { AppContainer } from 'react-hot-loader';
import createStore from './store';

const store = createStore();

function RootDOM()　{
  const MinnaNoUta = require('./containers/MinnaNoUta');
  return (
    <Provider store={store}>
      <MinnaNoUta />
    </Provider>
  );
}

//画面更新用の関数を作成
const render = () => {
  ReactDOM.render(
    <AppContainer>
      <RootDOM />
    </AppContainer>,
    document.getElementById('root'),
  );
  if (module.hot) {
    module.hot.accept('./containers/MinnaNoUta', () => {
      ReactDOM.render(
        <AppContainer>
          <Provider store={store}>
            <RootDOM />
          </Provider>
        </AppContainer>,
        document.getElementById('root'),
      );
    });
  }
}

//subscribe関数に、現在のstateの状況を画面に表示する関数をセット
store.subscribe(render);

//最初に画面を表示
window.onload = render;
