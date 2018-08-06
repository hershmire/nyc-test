
import App from './App.jsx';

function location() {
  const location = 'src/pages/page-1/page-1.js';
  return location;
}

function renderApp() {
  App(location());
}

module.exports = { location, renderApp };
