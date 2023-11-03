
import { Button } from '@mui/material';
import {Route, Routes, Navigate} from 'react-router-dom';

export const AppRoutes = () => {

 return(
    <Routes>
      <Route path="/pagina-inicial" element={<Button variant='contained' color='primary'>Página Inicial</Button>} />

      <Route path="*" element={<Navigate to="/pagina-inicial" />} />
    </Routes>
 );
}