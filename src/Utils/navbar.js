import React from 'react';
import { Generic } from '../Pages/Generic/index';
import { Homepage } from '../Pages/Home/index';


export const navbar = [
  {
    id: 1,
    title: 'Home',
    path: '/home',
    Element: <Homepage />,
    search: '?',
    hidden: false,
    private: false,
  },
  {
    id: 2,
    title: 'Properties',
    path: '/properties',
    Element: <Generic />,
    search: '?',
    hidden: false,
    private: false,
  },
  {
    id: 3,
    title: 'Contacts',
    path: '/contacts',
    Element: <Generic />,
    search: '?',
    hidden: false,
    private: false,
  },
  {
    id: 4,
    title: 'Signin',
    path: '/signin',
    Element: <Generic />,
    search: '?',
    hidden: true,
    private: false,
  },
  {
    id: 5,
    title: 'Sign Up',
    path: '/signup',
    Element: <Generic />,
    search: '?',
    hidden: true,
    private: false,
  },
];