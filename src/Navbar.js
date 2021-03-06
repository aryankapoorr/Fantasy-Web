import * as React from 'react';
import { AppBar, Toolbar, IconButton, Box } from '@mui/material';
import { Typography, MenuItem, Button } from '@mui/material';
import MenuIcon from '@mui/icons-material/Menu';

function Navbar() {
    return (
        <div>
            <Box sx={{ flexGrow: 1 }}>
                <AppBar position="static" sx={{backgroundColor:'#000000'}}>
                    <Toolbar>
                    <IconButton
                        size="large"
                        edge="start"
                        color="inherit"
                        aria-label="menu"
                        sx={{ mr: 2 }}
                    >
                        <MenuIcon />
                    </IconButton>
                    <Typography variant="h6" component="div" sx={{ flexGrow: 1 }}>
                        Fantasy
                    </Typography>
                    <Button color="inherit">Login</Button>
                    </Toolbar>
                </AppBar>
            </Box>
        </div>
    );
}

export default Navbar;