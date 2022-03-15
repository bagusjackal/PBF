import React from 'react';
import ReactDOM from 'react-dom';
import './index.css';
// import App from './App';
import reportWebVitals from './reportWebVitals';

import Test from './Test';
// import HelloComponent from './component/HelloComponent';

function HelloComponent(){
  return <p>HelloComponent</p>
}

  class StateFullComponent extends React.Component{
    render(){
      return<p>StateFullComponent</p>
    }
  }
  
  ReactDOM.render (<HelloComponent/>, document.getElementById('root'));
  
reportWebVitals();
