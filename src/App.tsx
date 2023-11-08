
import { BrowserRouter } from "react-router-dom";
import { AppRoutes } from './routes';
import { AppThemeProvider } from "./shared/context";
import { MenuLateral } from "./shared/componentes";

export const App = () => {
  return (
  <AppThemeProvider>
      <BrowserRouter>
        <MenuLateral>
         <AppRoutes />
        </MenuLateral>
        
        
      </BrowserRouter>
   </AppThemeProvider>
  );
};


