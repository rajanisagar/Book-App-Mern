import React from 'react';
import {AppBar, Tab, Tabs, Toolbar, Typography} from '@mui/material'
import LibraryBooksIcon from '@mui/icons-material/LibraryBooks';
function Header(props) {
    return (
        <div>
            <AppBar position='sticky'>
                <Toolbar>
                    <Typography>
                        <LibraryBooksIcon></LibraryBooksIcon>
                    </Typography>
                <Tabs value={1} indicatorColor='secondary' textColor='inherit'>
                    <Tab label="Add Book"></Tab>
                    <Tab label="About Us"></Tab>
                   
               </Tabs>
                </Toolbar>

            </AppBar>
        </div>
    );
}

export default Header;