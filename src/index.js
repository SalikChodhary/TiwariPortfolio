import React from 'react';
import ReactDOM from 'react-dom';
import './index.css';
import App from './App';
import * as serviceWorker from './serviceWorker';
import { Grommet, grommet } from 'grommet';
import './App.css'

import { store } from './redux/configStore'
import { Provider } from 'react-redux'

const theme = {
  global: {
    font: {
      family: "Poppins",
      size: "14px"
    }
  }
};

ReactDOM.render(
  
    <Provider store={store}>
      <Grommet full theme={theme}>
        <App />
      </Grommet>
    </Provider>,
  document.getElementById('root')
);

// If you want your app to work offline and load faster, you can change
// unregister() to register() below. Note this comes with some pitfalls.
// Learn more about service workers: https://bit.ly/CRA-PWA
serviceWorker.unregister();
