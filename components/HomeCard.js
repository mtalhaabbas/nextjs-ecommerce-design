import * as React from 'react';
import Card from '@mui/material/Card';
import CardContent from '@mui/material/CardContent';
import CardMedia from '@mui/material/CardMedia';
import Typography from '@mui/material/Typography';
import { Button, CardActionArea, CardActions, Container, Grid } from '@mui/material';
import Link from 'next/link'


export default function MultiActionAreaCard() {





    return (
        <Container>

            <Typography variant="h3" component='h2' color="initial" sx={{ pt: 3}}>
                  All Categories
            </Typography>
            <Grid container
                direction="row"
                justifyContent="center"
                alignItems="center">

                <Grid item xs='auto' sm={6} md={4} >
                    <Card sx={{ maxWidth: 345, my: 4, mx: 2 }}>
                        <CardActionArea> 
                            <CardContent>
                                <Typography gutterBottom variant="h5" component="div">
                                    Computer Accessories 
                                </Typography>
                            </CardContent>
                            <CardMedia
                                component="img"
                                height="350"
                                width="300"
                                sx={{ px: 2 }}
                                image="/amazonbasics.png"
                                alt="green iguana"
                            />

                        </CardActionArea>
                        <CardActions>
                            <Button size="small" color="primary">
                                <Link href='#'>View more</Link>
                            </Button>
                        </CardActions>

                    </Card>
                </Grid>
                <Grid item xs='auto' sm={6} md={4} >
                    <Card sx={{ maxWidth: 345, my: 4, mx: 2 }}>
                        <CardActionArea>
                            <CardContent>
                                <Typography gutterBottom variant="h5" component="div">
                                    Computer Accessories 
                                </Typography>
                            </CardContent>
                            <CardMedia
                                component="img"
                                height="350"
                                width="300"
                                sx={{ px: 2 }}
                                image="/amazonbasics.png"
                                alt="green iguana"
                            />

                        </CardActionArea>
                        <CardActions>
                            <Button size="small" color="primary">
                                <Link href='#'>View more</Link>
                            </Button>
                        </CardActions>

                    </Card>
                </Grid>
                <Grid item xs='auto' sm={6} md={4} >
                    <Card sx={{ maxWidth: 345, my: 4, mx: 2 }}>
                        <CardActionArea>
                            <CardContent>
                                <Typography gutterBottom variant="h5" component="div">
                                    Computer Accessories 
                                </Typography>
                            </CardContent>
                            <CardMedia
                                component="img"
                                height="350"
                                width="300"
                                sx={{ px: 2 }}
                                image="/amazonbasics.png"
                                alt="green iguana"
                            />

                        </CardActionArea>
                        <CardActions>
                            <Button size="small" color="primary">
                                <Link href='#'>View more</Link>
                            </Button>
                        </CardActions>

                    </Card>
                </Grid>
                <Grid item xs='auto' sm={6} md={4} >
                    <Card sx={{ maxWidth: 345, my: 4, mx: 2 }}>
                        <CardActionArea>
                            <CardContent>
                                <Typography gutterBottom variant="h5" component="div">
                                    Computer Accessories 
                                </Typography>
                            </CardContent>
                            <CardMedia
                                component="img"
                                height="350"
                                width="300"
                                sx={{ px: 2 }}
                                image="/amazonbasics.png"
                                alt="green iguana"
                            />

                        </CardActionArea>
                        <CardActions>
                            <Button size="small" color="primary">
                                <Link href='#'>View more</Link>
                            </Button>
                        </CardActions>

                    </Card>
                </Grid>
                <Grid item xs='auto' sm={6} md={4} >
                    <Card sx={{ maxWidth: 345, my: 4, mx: 2 }}>
                        <CardActionArea>
                            <CardContent>
                                <Typography gutterBottom variant="h5" component="div">
                                    Computer Accessories 
                                </Typography>
                            </CardContent>
                            <CardMedia
                                component="img"
                                height="350"
                                width="300"
                                sx={{ px: 2 }}
                                image="/amazonbasics.png"
                                alt="green iguana"
                            />

                        </CardActionArea>
                        <CardActions>
                            <Button size="small" color="primary">
                                <Link href='#'>View more</Link>
                            </Button>
                        </CardActions>

                    </Card>
                </Grid>
                <Grid item xs='auto' sm={6} md={4} >
                    <Card sx={{ maxWidth: 345, my: 4, mx: 2 }}>
                        <CardActionArea>
                            <CardContent>
                                <Typography gutterBottom variant="h5" component="div">
                                    Computer Accessories 
                                </Typography>
                            </CardContent>
                            <CardMedia
                                component="img"
                                height="350"
                                width="300"
                                sx={{ px: 2 }}
                                image="/amazonbasics.png"
                                alt="green iguana"
                            />

                        </CardActionArea>
                        <CardActions>
                            <Button size="small" color="primary">
                                <Link href='#'>View more</Link>
                            </Button>
                        </CardActions>

                    </Card>
                </Grid>

            </Grid>
        </Container>
    );
}
