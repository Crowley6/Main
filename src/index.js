import React from 'react';
import ReactDOM from 'react-dom/client';
import './index.css';
import App from './Main/App';
import reportWebVitals from './reportWebVitals';
import Backend, {pushProject, subscribe, onChangeFunc, deleteProject} from './Redux';

const root = ReactDOM.createRoot(document.getElementById('root'));
let rerender = (Backend) => {
root.render(
  <React.StrictMode>
    <App pushProject={pushProject} Backend={Backend} h1a={Backend} onChangeFunc={onChangeFunc} deleteProject={deleteProject} />
  </React.StrictMode>
);
}
rerender(Backend);
subscribe(rerender);
// If you want to start measuring performance in your app, pass a function
// to log results (for example: reportWebVitals(console.log))
// or send to an analytics endpoint. Learn more: https://bit.ly/CRA-vitals
reportWebVitals();
