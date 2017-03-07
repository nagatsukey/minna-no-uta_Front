import expect from 'expect'
import React from 'react'
import ReactDOM from 'react-dom'
import Test from './components/Test';
import store from './store';

//画面更新用の関数を作成
const render = () => {
  ReactDOM.render(
    <Test />,
    document.getElementById('root')
  );
}

//subscribe関数に、現在のstateの状況を画面に表示する関数をセット
store.subscribe(render)

//最初に画面を表示
window.onload = render;
