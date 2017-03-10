import expect from 'expect'
import React from 'react'
import ReactDOM from 'react-dom'
import { AppContainer } from 'react-hot-loader';
import store from './store';

function RootDOM()　{
  const Test = require('./components/Test').default;
  const MinnaNoUta = require('./containers/MinnaNoUta' ).default;
  return (
    <MinnaNoUta />
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
    module.hot.accept('./components/Test', () => {
      ReactDOM.render(
        <AppContainer>
          <RootDOM />
        </AppContainer>,
        document.getElementById('root'),
      );
    });
  }
}

//subscribe関数に、現在のstateの状況を画面に表示する関数をセット
store.subscribe(render)

//最初に画面を表示
window.onload = render;
