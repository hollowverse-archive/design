import React from 'react';
import { Consumer } from '../../state/state';

export const Link = ({ to, children, ...rest }) => (
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
