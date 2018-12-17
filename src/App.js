import React from 'react';
import { Provider } from 'react-redux';
import {} from 'reactstrap';

import store from './public/store/index.store';
import Router from './public/routes/route';

export default class App extends React.Component {
  render(){
    return(
      <Provider store={store}>
        <Router/>
      </Provider>  
    )
  }
}