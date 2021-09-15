import { Container, Grid, Typography, Card, CardMedia, CardActions, Link, CardContent, Button, Rating, Box } from "@mui/material";
import React,{useEffect,useState} from 'react'
import styles from '../styles/Home.module.css'

const All_product = () => {

const get_products=()=>{    
    var axios = require("axios").default;

    var options = {
      method: 'GET',
      url: 'https://ebay-products.p.rapidapi.com/product',
      params: {
        url: 'https%3A%2F%2Fwww.ebay.co.uk%2Fitm%2FBox-Celeron-15-6-Quad-Core-Laptop-4GB-Ram-500GB-Wireless%2F274237631139'
      },
      headers: {
        'x-rapidapi-host': 'ebay-products.p.rapidapi.com',
        'x-rapidapi-key': '884f9315eemshfc17ca4d618877ap1a09aajsnf3bfa3f6d501'
      }
    };
    
    axios.request(options).then(function (response) {
        console.log(response.data);
    }).catch(function (error) {
        console.error(error);
    });
}

useEffect(() => {
    get_products()
}, [])



    return (
        <Container>
            <Typography sx={{ pt: 3 }} variant="h4" component='h2' color="initial">
                Computer Accessories
            </Typography>
            <Typography variant="h6" color="initial" component='h3' sx={{ mb: 1 }} >
                Shop laptops, desktops, monitors, tablets, PC gaming, hard drives and storage, accessories and more
            </Typography>

            <Grid sx={{ my: 2, mt: 1, pt: 0 }} container spacing={4}>


                <Grid item xs='auto' xs={12} sm={6} md={4} lg={3} >
                    <Card className={styles.card}>
                        <CardMedia
                            component="img"
                            height="200"
                            width='400'
                            image="/amazonbasics.png"
                            alt="basics"
                        />
                        <CardContent className={styles.gridbox} sx={{ mb: 1, pb: 1 }} >
                            <Typography gutterBottom variant="h5" component="div">
                                Lizard
                            </Typography>
                            <Typography variant="body2" color="text.secondary">
                                Lizards are a widespread group of squamate reptiles, with over 6,000
                                species, ranging across all continents except Antarctica lore
                            </Typography >
                            <Typography sx={{ my: .5 }} variant="subtitle2" color="text.secondary">
                                By Hp
                            </Typography>
                            <Box sx={{
                                width: 200,
                                display: 'flex',
                                alignItems: 'center',
                            }}>
                                <Rating size='small' name="half-rating-read" defaultValue={4.5} precision={0.5} readOnly />
                                <Box sx={{ mx: 1 }}>500</Box>
                            </Box>
                            <Typography variant='h6'>$100</Typography>
                        </CardContent >
                        <CardActions sx={{ my: 1, pt: 0 }}>
                            <Button size="small" color="primary">
                                <Link underline="hover" href='#'>Read more</Link>
                            </Button>
                            <Button sx={{ ml: 1 }} size="small" color="primary">
                                <Link underline="hover" href='#'>Buy now</Link>
                            </Button>
                        </CardActions>
                    </Card>
                </Grid>
                <Grid item xs='auto' xs={12} sm={6} md={4} lg={3} >
                    <Card className={styles.card}>
                        <CardMedia
                            component="img"
                            height="200"
                            width='400'
                            image="/amazonbasics.png"
                            alt="basics"
                        />
                        <CardContent className={styles.gridbox} sx={{ mb: 1, pb: 1 }} >
                            <Typography gutterBottom variant="h5" component="div">
                                Lizard
                            </Typography>
                            <Typography variant="body2" color="text.secondary">
                                Lizards are a widespread group of squamate reptiles, with over 6,000
                                species, ranging across all continents except Antarctica lore
                            </Typography >
                            <Typography sx={{ my: .5 }} variant="subtitle2" color="text.secondary">
                                By Hp
                            </Typography>
                            <Box sx={{
                                width: 200,
                                display: 'flex',
                                alignItems: 'center',
                            }}>
                                <Rating size='small' name="half-rating-read" defaultValue={4.5} precision={0.5} readOnly />
                                <Box sx={{ mx: 1 }}>500</Box>
                            </Box>
                            <Typography variant='h6'>$100</Typography>
                        </CardContent >
                        <CardActions sx={{ my: 1, pt: 0 }}>
                            <Button size="small" color="primary">
                                <Link underline="hover" href='#'>Read more</Link>
                            </Button>
                            <Button sx={{ ml: 1 }} size="small" color="primary">
                                <Link underline="hover" href='#'>Buy now</Link>
                            </Button>
                        </CardActions>
                    </Card>
                </Grid>
                <Grid item xs='auto' xs={12} sm={6} md={4} lg={3} >
                    <Card className={styles.card}>
                        <CardMedia
                            component="img"
                            height="200"
                            width='400'
                            image="/amazonbasics.png"
                            alt="basics"
                        />
                        <CardContent className={styles.gridbox} sx={{ mb: 1, pb: 1 }} >
                            <Typography gutterBottom variant="h5" component="div">
                                Lizard
                            </Typography>
                            <Typography variant="body2" color="text.secondary">
                                Lizards are a widespread group of squamate reptiles, with over 6,000
                                species, ranging across all continents except Antarctica lore
                            </Typography >
                            <Typography sx={{ my: .5 }} variant="subtitle2" color="text.secondary">
                                By Hp
                            </Typography>
                            <Box sx={{
                                width: 200,
                                display: 'flex',
                                alignItems: 'center',
                            }}>
                                <Rating size='small' name="half-rating-read" defaultValue={4.5} precision={0.5} readOnly />
                                <Box sx={{ mx: 1 }}>500</Box>
                            </Box>
                            <Typography variant='h6'>$100</Typography>
                        </CardContent >
                        <CardActions sx={{ my: 1, pt: 0 }}>
                            <Button size="small" color="primary">
                                <Link underline="hover" href='#'>Read more</Link>
                            </Button>
                            <Button sx={{ ml: 1 }} size="small" color="primary">
                                <Link underline="hover" href='#'>Buy now</Link>
                            </Button>
                        </CardActions>
                    </Card>
                </Grid>
                <Grid item xs='auto' xs={12} sm={6} md={4} lg={3} >
                    <Card className={styles.card}>
                        <CardMedia
                            component="img"
                            height="200"
                            width='400'
                            image="/amazonbasics.png"
                            alt="basics"
                        />
                        <CardContent className={styles.gridbox} sx={{ mb: 1, pb: 1 }} >
                            <Typography gutterBottom variant="h5" component="div">
                                Lizard
                            </Typography>
                            <Typography variant="body2" color="text.secondary">
                                Lizards are a widespread group of squamate reptiles, with over 6,000
                                species, ranging across all continents except Antarctica lore
                            </Typography >
                            <Typography sx={{ my: .5 }} variant="subtitle2" color="text.secondary">
                                By Hp
                            </Typography>
                            <Box sx={{
                                width: 200,
                                display: 'flex',
                                alignItems: 'center',
                            }}>
                                <Rating size='small' name="half-rating-read" defaultValue={4.5} precision={0.5} readOnly />
                                <Box sx={{ mx: 1 }}>500</Box>
                            </Box>
                            <Typography variant='h6'>$100</Typography>
                        </CardContent >
                        <CardActions sx={{ my: 1, pt: 0 }}>
                            <Button size="small" color="primary">
                                <Link underline="hover" href='#'>Read more</Link>
                            </Button>
                            <Button sx={{ ml: 1 }} size="small" color="primary">
                                <Link underline="hover" href='#'>Buy now</Link>
                            </Button>
                        </CardActions>
                    </Card>
                </Grid>
                <Grid item xs='auto' xs={12} sm={6} md={4} lg={3} >
                    <Card className={styles.card}>
                        <CardMedia
                            component="img"
                            height="200"
                            width='400'
                            image="/amazonbasics.png"
                            alt="basics"
                        />
                        <CardContent className={styles.gridbox} sx={{ mb: 1, pb: 1 }} >
                            <Typography gutterBottom variant="h5" component="div">
                                Lizard
                            </Typography>
                            <Typography variant="body2" color="text.secondary">
                                Lizards are a widespread group of squamate reptiles, with over 6,000
                                species, ranging across all continents except Antarctica lore
                            </Typography >
                            <Typography sx={{ my: .5 }} variant="subtitle2" color="text.secondary">
                                By Hp
                            </Typography>
                            <Box sx={{
                                width: 200,
                                display: 'flex',
                                alignItems: 'center',
                            }}>
                                <Rating size='small' name="half-rating-read" defaultValue={4.5} precision={0.5} readOnly />
                                <Box sx={{ mx: 1 }}>500</Box>
                            </Box>
                            <Typography variant='h6'>$100</Typography>
                        </CardContent >
                        <CardActions sx={{ my: 1, pt: 0 }}>
                            <Button size="small" color="primary">
                                <Link underline="hover" href='#'>Read more</Link>
                            </Button>
                            <Button sx={{ ml: 1 }} size="small" color="primary">
                                <Link underline="hover" href='#'>Buy now</Link>
                            </Button>
                        </CardActions>
                    </Card>
                </Grid>
                <Grid item xs='auto' xs={12} sm={6} md={4} lg={3} >
                    <Card className={styles.card}>
                        <CardMedia
                            component="img"
                            height="200"
                            width='400'
                            image="/amazonbasics.png"
                            alt="basics"
                        />
                        <CardContent className={styles.gridbox} sx={{ mb: 1, pb: 1 }} >
                            <Typography gutterBottom variant="h5" component="div">
                                Lizard
                            </Typography>
                            <Typography variant="body2" color="text.secondary">
                                Lizards are a widespread group of squamate reptiles, with over 6,000
                                species, ranging across all continents except Antarctica lore
                            </Typography >
                            <Typography sx={{ my: .5 }} variant="subtitle2" color="text.secondary">
                                By Hp
                            </Typography>
                            <Box sx={{
                                width: 200,
                                display: 'flex',
                                alignItems: 'center',
                            }}>
                                <Rating size='small' name="half-rating-read" defaultValue={4.5} precision={0.5} readOnly />
                                <Box sx={{ mx: 1 }}>500</Box>
                            </Box>
                            <Typography variant='h6'>$100</Typography>
                        </CardContent >
                        <CardActions sx={{ my: 1, pt: 0 }}>
                            <Button size="small" color="primary">
                                <Link underline="hover" href='#'>Read more</Link>
                            </Button>
                            <Button sx={{ ml: 1 }} size="small" color="primary">
                                <Link underline="hover" href='#'>Buy now</Link>
                            </Button>
                        </CardActions>
                    </Card>
                </Grid>
                <Grid item xs='auto' xs={12} sm={6} md={4} lg={3} >
                    <Card className={styles.card}>
                        <CardMedia
                            component="img"
                            height="200"
                            width='400'
                            image="/amazonbasics.png"
                            alt="basics"
                        />
                        <CardContent className={styles.gridbox} sx={{ mb: 1, pb: 1 }} >
                            <Typography gutterBottom variant="h5" component="div">
                                Lizard
                            </Typography>
                            <Typography variant="body2" color="text.secondary">
                                Lizards are a widespread group of squamate reptiles, with over 6,000
                                species, ranging across all continents except Antarctica lore
                            </Typography >
                            <Typography sx={{ my: .5 }} variant="subtitle2" color="text.secondary">
                                By Hp
                            </Typography>
                            <Box sx={{
                                width: 200,
                                display: 'flex',
                                alignItems: 'center',
                            }}>
                                <Rating size='small' name="half-rating-read" defaultValue={4.5} precision={0.5} readOnly />
                                <Box sx={{ mx: 1 }}>500</Box>
                            </Box>
                            <Typography variant='h6'>$100</Typography>
                        </CardContent >
                        <CardActions sx={{ my: 1, pt: 0 }}>
                            <Button size="small" color="primary">
                                <Link underline="hover" href='#'>Read more</Link>
                            </Button>
                            <Button sx={{ ml: 1 }} size="small" color="primary">
                                <Link underline="hover" href='#'>Buy now</Link>
                            </Button>
                        </CardActions>
                    </Card>
                </Grid>



            </Grid>
        </Container>
    );
}

export default All_product;