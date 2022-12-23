import React from 'react';
import ReactDOM from 'react-dom/client';
import './index.css';
import App from './Main/App';
import reportWebVitals from './reportWebVitals';
// import { onChangeFunc, deleteProject, pushProject} from './Redux';
import Backend, {subscribe, getAllProject} from './Redux';

const root = ReactDOM.createRoot(document.getElementById('root'));
let rerender = (Backend) => {
root.render(
  <React.StrictMode>
    <App Backend={Backend} h1a={Backend} />
  </React.StrictMode>
);
}

getAllProject().then(r => {
    rerender(Backend);
    subscribe(rerender);
});
//subscribe(rerender);
// If you want to start measuring performance in your app, pass a function
// to log results (for example: reportWebVitals(console.log))
// or send to an analytics endpoint. Learn more: https://bit.ly/CRA-vitals
reportWebVitals();
