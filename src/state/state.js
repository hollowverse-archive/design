import React from 'react';

export const { Consumer, Provider } = React.createContext();

export const defaultState = {
  path: '/',
  showNotablePersonImage: true,
  withLoading: false,
  isMenuOpen: false,
  user: {
    name: 'Chelsea Handler',
    avatar: 'assets/chelsea-handler.jpg',
  },
  showError: false,
};

export const createActions = setState => ({
  setPath: path => {
    setState({ path });
  },

  toggleMenu: () => {
    setState(state => ({ isMenuOpen: !state.isMenuOpen }));
  },
});
