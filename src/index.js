import React from 'react';
import ReactDOM from 'react-dom';

import App from './App';

// call ReactDOM that render that method on it, 
// iit accept the parament app-component, the 2:end parameter
// is the element(document) we want to render it on
// document - you can find in the public its the index.html, in the body there is the root
ReactDOM.render(<App />, document.getElementById('root'));

