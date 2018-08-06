import React from 'react';
import { string } from 'prop-types';

const Location = (props) => {
  return (
    <div>
      My location is "{props.location}"
    </div>
  );
};

Location.propTypes = {
  location: string
};

export default Location;
