import React from 'react';
import { render } from 'react-dom';
import Location from './components/Location.jsx';

const App = ({ location } = props) => {
  if (!location) {
    location = 'unknown path';
  }

  return render(
    <Location {...props} />,
    document.getElementById('root'));
};

export default App;
