import React, { useState } from 'react';
import {AppBar, Tab, Tabs, Toolbar, Typography} from '@mui/material'
import LibraryBooksIcon from '@mui/icons-material/LibraryBooks';
import { Link } from 'react-router-dom'
function Header(props) {
    const [value, setValue] = useState()
    return (
        <div>
            <AppBar sx={{backgroundColor:'#232f3d'}} position='sticky'>
                <Toolbar>
                    <Typography>
                        <LibraryBooksIcon></LibraryBooksIcon>
                    </Typography>
                <Tabs 
                sx={{ml:'auto'}}
                value={value}
                indicatorColor='primary'
                textColor='inherit' 
                onChange={(e,val)=>setValue(val)}>
                    <Tab LinkComponent={Link} to='/add' label="Add Book"></Tab>
                    <Tab LinkComponent={Link} to='/books' label="Books"></Tab>
                    <Tab LinkComponent={Link} to='/about' label="About Us"></Tab>
                   
               </Tabs>
                </Toolbar>

            </AppBar>
        </div>
    );
}

export default Header;