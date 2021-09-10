import { AppBar, Container, Grid, Link, Toolbar, Typography } from '@mui/material'

import Image from 'next/image'
// import CameraIcon from '@mui/icons-material/PhotoCamera';
import CardGiftcardIcon from '@mui/icons-material/CardGiftcard';
import * as React from 'react';
import Box from '@mui/material/Box';
import InputLabel from '@mui/material/InputLabel';
import MenuItem from '@mui/material/MenuItem';
import FormControl from '@mui/material/FormControl';
import Select from '@mui/material/Select';
import TextField from '@mui/material/TextField';

import { styled } from '@mui/material/styles';
// import Box from '@mui/material/Box';
// import Paper from '@mui/material/Paper';
// import Grid from '@mui/material/Grid';

// const Item = styled(Paper)(({ theme }) => ({
//   ...theme.typography.body2,
//   padding: theme.spacing(1),
//   textAlign: 'center',
//   color: theme.palette.text.secondary,
// }));




const Header = () => {


    const [age, setAge] = React.useState('');

    const handleChange = (event) => {
        setAge(event.target.value);
    };



    return (
        <>
            <AppBar position="relative">
                <Toolbar>
                    <CardGiftcardIcon sx={{ mr: 2 }} />

                    <Typography variant="h6" color="inherit" noWrap>
                        Mini Amazon
                    </Typography>
                    <Box sx={{ width: 200 }}>
                        {/* <FormControl fullWidth>
                            <div>
                            <InputLabel variant='outlined' shrink= "false" id="demo-simple-select-label"></InputLabel>
                            <Select
                                labelId="demo-simple-select-label"
                                id="demo-simple-select"
                                value={age}
                                label="Age"
                                sx={{ width: 70 }}
                                onChange={handleChange}
                            >
                                <MenuItem value={10}>All Departments</MenuItem>
                                <MenuItem value={20}>Arts & Crafts</MenuItem>
                                <MenuItem value={30}>Beauty & Personal Care</MenuItem>
                                <MenuItem value={30}>Baby</MenuItem>
                                <MenuItem value={30}>Digital Music</MenuItem>
                                <MenuItem value={30}>Women's Fashion</MenuItem>
                                <MenuItem value={30}>Men's Fashion</MenuItem>
                                <MenuItem value={30}>Health & Household</MenuItem>
                            </Select>
                            </div>

                           
                            <TextField  />

                        </FormControl> */}
                    </Box>
                </Toolbar>
            </AppBar>


          
        </>
    );
}

export default Header;