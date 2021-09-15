import {
    Container, Grid, Typography, Divider,
    Box, Rating, List, ListItem, ListItemIcon, ListItemText, Button, Link
} from "@mui/material";
import CircleIcon from '@mui/icons-material/Circle';
import Image from 'next/image';

const Product = () => {
    return (
        <>
            <Container >


                <Grid container direction="row"
                    justifyContent="center"
                    alignItems="start" 
                    spacing={1} 
                    sx={{ my: 5 }} 
                    >
                    <Grid sx={{ mx: 3, my: 1 }} md={4} lg={5} alignItems='center'>
                        <Image src='/amazonbasics.png' height='400' width='400'></Image>
                        <Box sx={{ my: 2 }}>
                            <Button variant="contained" sx={{ ml: 1 }} size="medium" color="primary">
                                Buy now
                            </Button>
                        </Box>
                    </Grid>
                    <Grid md={6} lg={6} sx={{ mx: 3 }}>
                        <Typography variant='h5' component='h2'>
                            HP Pavilion 15 Laptop, 11th Gen Intel Core i7-1165G7 Processor, 16 GB RAM, 512 GB SSD Storage, Full HD IPS micro-edge Display, Windows 10 Pro, Compact Design, Long Battery Life (15-eg0021nr, 2020)
                        </Typography>
                        <Box sx={{

                            my: 1,
                            display: 'flex',
                            alignItems: 'center',
                        }}>
                            <Rating size='small' name="half-rating-read" defaultValue={4.5} precision={0.5} readOnly />
                            <Box sx={{ mx: 1 }}>500</Box>
                        </Box>
                        <Divider />
                        <List>
                            <ListItem alignItems="flex-start">
                                <ListItemIcon sx={{ mx: 0, py: 0 }} >
                                    <CircleIcon fontSize="small" sx={{ fontSize: 12 }} />
                                </ListItemIcon>
                                <ListItemText sx={{ mx: 0 }}>
                                    INSTANT GRATIFICATION – Experience a laptop with premium performance, so you can spend less time getting more done; it’s like a small PC that’s compact enough to go where you go with a long-lasting battery to power you through your day
                                </ListItemText>
                            </ListItem>
                            <ListItem alignItems="flex-start">
                                <ListItemIcon sx={{ mx: 0, py: 0 }} >
                                    <CircleIcon fontSize="small" sx={{ fontSize: 12 }} />
                                </ListItemIcon>
                                <ListItemText sx={{ mx: 0 }}>
                                    INSTANT GRATIFICATION – Experience a laptop with premium performance, so you can spend less time getting more done; it’s like a small PC that’s compact enough to go where you go with a long-lasting battery to power you through your day
                                </ListItemText>
                            </ListItem>
                            <ListItem alignItems="flex-start">
                                <ListItemIcon sx={{ mx: 0, py: 0 }} >
                                    <CircleIcon fontSize="small" sx={{ fontSize: 12 }} />
                                </ListItemIcon>
                                <ListItemText sx={{ mx: 0 }}>
                                    INSTANT GRATIFICATION – Experience a laptop with premium performance, so you can spend less time getting more done; it’s like a small PC that’s compact enough to go where you go with a long-lasting battery to power you through your day
                                </ListItemText>
                            </ListItem>
                            <ListItem alignItems="flex-start">
                                <ListItemIcon sx={{ mx: 0, py: 0 }} >
                                    <CircleIcon fontSize="small" sx={{ fontSize: 12 }} />
                                </ListItemIcon>
                                <ListItemText sx={{ mx: 0 }}>
                                    INSTANT GRATIFICATION – Experience a laptop with premium performance, so you can spend less time getting more done; it’s like a small PC that’s compact enough to go where you go with a long-lasting battery to power you through your day
                                </ListItemText>
                            </ListItem>
                            <ListItem alignItems="flex-start">
                                <ListItemIcon sx={{ mx: 0, py: 0 }} >
                                    <CircleIcon fontSize="small" sx={{ fontSize: 12 }} />
                                </ListItemIcon>
                                <ListItemText sx={{ mx: 0 }}>
                                    INSTANT GRATIFICATION – Experience a laptop with premium performance, so you can spend less time getting more done; it’s like a small PC that’s compact enough to go where you go with a long-lasting battery to power you through your day
                                </ListItemText>
                            </ListItem>
                        </List>
                    </Grid>

                </Grid>
            </Container>
        </>
    );
}

export default Product;
