import React from 'react';
import { string } from 'prop-types';

const Name = (props) => {
  return (
    <div>
      My name is "{props.name}"
    </div>
  );
};

Name.propTypes = {
  name: string
};

export default Name;
