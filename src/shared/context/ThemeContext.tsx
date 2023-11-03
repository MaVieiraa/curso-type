
import { DarkTheme, LightTheme } from "./../themes";
import { createContext, useCallback, useState } from "react";
import { ThemeProvider } from '@mui/material';

interface IThemeContextData {
    themeName: 'light' | 'dark';
    toggleTheme: () => void;
} 

const ThemeContext = createContext({});

export const AppThemeProvider: React.FC = ({ children }) => {
    const [themeName, setThemeName] = useState<'light' | 'dark'>('light');

    const toggleTheme = useCallback(() => {
        setThemeName(setThemeName =>setThemeName === 'light' ? 'dark' : 'light');
    }, []);
    
    
    return(
        <ThemeContext.Provider value={{ themeName, toggleTheme }}>
          <ThemeProvider theme={DarkTheme}>
            {children}


          </ThemeProvider>
        </ThemeContext.Provider>
    );
}
