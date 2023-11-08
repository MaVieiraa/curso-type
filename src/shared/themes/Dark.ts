import { createTheme } from '@mui/material';
import {  pink, blue, orange, grey } from '@mui/material/colors';

export const DarkTheme = createTheme({ 
  palette: {
    primary: {
      main:'#bff4081',
      dark: '#b22c5a', 
      light: '#ff669a',
      contrastText: '#ffffff',

    },

    secondary: {
      main:  '#00b0ff',
      dark: '#007bb2', 
      light:  '#33bfff',
      contrastText: '#ffffff',
           
    },

    background: {
      default:'#eeeeee',
      paper: '#ff9800', 

    }}
});