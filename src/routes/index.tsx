
import { Button } from '@mui/material';
import {Route, Routes, Navigate} from 'react-router-dom';
import { useAppThemeContext } from '../shared/context';

export const AppRoutes = () => {
  const { toggleTheme } = useAppThemeContext();

  return(
    <Routes>
      <Route path="/pagina-inicial" element={<Button variant='contained' color='primary' onClick=   {toggleTheme}>Inicio</Button>}/>
      <Route path="*" element={<Navigate to="/pagina-inicial" />} />
    </Routes>
  );
};