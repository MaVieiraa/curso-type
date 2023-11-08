import { Avatar, Box, Drawer, useTheme } from "@mui/material";
import React from "react";

export const MenuLateral: React.FC <{ children: React.ReactNode }> = ( { children}) => {
    const theme = useTheme();

  return (
    <>
      <Drawer variant= 'permanent'>
        <Box width={theme.spacing(28)}>
          <Box width="100%" height={theme.spacing(20)} 
            display="flex" alignItems="center" justifyContent="center">

             <Avatar  
               sx={{ heigth: theme.spacing(100), width: theme.spacing(6)}}
               src="https://scontent.frao2-1.fna.fbcdn.net/v/t39.30808-6/366612026_1327970827928466_2222982189822265676_n.jpg?_nc_cat=104&ccb=1-7&_nc_sid=5f2048&_nc_ohc=4VCL6e4GmIIAX__vyf-&_nc_ht=scontent.frao2-1.fna&oh=00_AfBZmvsu0cb3SYYfK1S0z0LIrIq_8maRkdwcLRqnD4ETig&oe=654EDCF2"/>
           </Box>
        </Box>
      </Drawer>
       <Box height="100vh" marginLeft={theme.spacing(28)}>
           {children}
       </Box>
   </>
  );
};