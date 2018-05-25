import React from 'react';
import { Consumer } from '../../state';

export default ({ to, children, ...rest }) => (
  <Consumer>
    {({ actions: { setPath } }) => (
      <a
        onClick={e => {
          e.preventDefault();
          setPath(to);
        }}
        href="#"
        {...rest}
      >
        {children}
      </a>
    )}
  </Consumer>
);
