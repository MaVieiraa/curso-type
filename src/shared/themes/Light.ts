import { createTheme } from '@mui/material';
import { cyan, pink } from '@mui/material/colors';

export const LightTheme = createTheme({
    palette: {
        primary: {
            main: pink [700],
            dark: pink [200], 
            light: '[100]',
            contrastText: '#ffffff',

        },

        secondary: {
            main:  '[500]',
            dark: pink [100], 
            light: '[50]',
            contrastText: '#ffffff',
           
        },

        background: {
            default: '#f7f6f3',
            paper:'#ffffff', 

        }
    }
});