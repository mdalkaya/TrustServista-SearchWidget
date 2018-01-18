import React from 'react'
import { AppContainer } from 'react-hot-loader'
import  App from "./SearchWidgetMain.js";
import { render } from "react-dom";


render(<AppContainer><App /></AppContainer>, document.getElementById('root'));

 if (process.env.NODE_ENV !== 'production') {
     console.log('Looks like we are in development mode!');
   }

if (module.hot) {
  module.hot.accept('./SearchWidgetMain.js', () => { 
    console.log("index.js HMR");
		const App = require('./SearchWidgetMain').default;
		render(<AppContainer> <App /></AppContainer>, document.getElementById('root'));
  //  render(App) 
  })
}
