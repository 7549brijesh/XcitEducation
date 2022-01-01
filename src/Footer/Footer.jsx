import React from 'react'
import { Typography,Container,Grid,Box,Link, Divider,Button } from "@mui/material"
// import { Instagram,Facebook, } from '@material-ui/icons'
// import { LinkedIn ,Twitter } from '@material-ui/icons'
import FacebookIcon from '@mui/icons-material/Facebook';
import TwitterIcon from '@mui/icons-material/Twitter';
import InstagramIcon from '@mui/icons-material/Instagram';
import LinkedInIcon from '@mui/icons-material/LinkedIn';
const Footer = () => {
    return (
        <>
            <footer>
                <Box 
                    sx={{
                    marginLeft:0,
                    marginRight:0,
                    backgroundColor:"#404040",
                    }}  
                
                color="white" p ={5} m ={10}  
                textAlign='center' >
                    <Container maxWidth="lg">
                        <Grid container spacing={5}>
                            <Grid item xs={12} sm = {3}>
                                <Box borderBottom={1} mb={1} sx={{fontWeight:'bold'}} >Product</Box>
                                <Box pb={0.8} ><Link href = "/"  color="inherit" >Internship In India</Link></Box>
                                <Box pb={0.8}><Link href ="/"   color="inherit">Internship in Delhi</Link></Box>
                                <Box pb={0.8}><Link href ="/"   color="inherit">Internship in Banglore</Link></Box>
                                <Box pb={0.8}><Link href ="/"   color="inherit">Internship in Hyderabad</Link></Box>
                                <Box pb={0.8}><Link href ="/"   color="inherit">Internship in Mumbai</Link></Box>
                                <Box pb={0.8}><Link href ="/"   color="inherit">Internship in Chennai</Link></Box>
                                <Box pb={0.8}><Link href ="/"   color="inherit">Internship in Gurugaon</Link></Box>
                                <Box pb={0.8}><Link href ="/"   color="inherit">Internship in Kolkata</Link></Box>
                                <Box pb={0.8}><Link href ="/"   color="inherit">View Internship</Link></Box>
                                
                            </Grid>
                            <Grid item xs={12} sm = {3}>
                                <Box borderBottom={1} mb={1}  sx={{fontWeight:'bold'}}>Internship by Stream</Box>
                                <Box pb={0.8}><Link href ="/"  color="inherit">Computer Science Internship</Link></Box>
                                <Box pb={0.8}><Link href ="/"  color="inherit">Electronics Internship</Link></Box>
                                <Box pb={0.8}><Link href ="/"  color="inherit">Mechanical Internship</Link></Box>
                                <Box pb={0.8}><Link href ="/"  color="inherit">Civil Internship</Link></Box>
                                <Box pb={0.8}><Link href ="/"  color="inherit">Marketing Internship</Link></Box>
                                <Box pb={0.8}><Link href ="/"  color="inherit">Chemical Internship</Link></Box>
                                <Box pb={0.8}><Link href ="/"  color="inherit">Finance Internship</Link></Box>
                                <Box pb={0.8}><Link href ="/"  color="inherit">Summer Research Fellowship</Link></Box>
                                <Box pb={0.8}><Link href ="/"  color="inherit">Campus Ambassador Program</Link></Box>
                            </Grid>
                            <Grid item xs={12} sm = {3}>
                                <Box borderBottom={1} mb={1}  sx={{fontWeight:'bold'}}>Online Trainings</Box>
                                <Box pb={0.8}><Link href ="/"   color="inherit">Programming with Python</Link></Box>
                                <Box pb={0.8}><Link href ="/"   color="inherit">Digital Marketing</Link></Box>
                                <Box pb={0.8}><Link href ="/"   color="inherit">Web Development</Link></Box>
                                <Box pb={0.8}><Link href ="/"   color="inherit">Machine Learning</Link></Box>
                                <Box pb={0.8}><Link href ="/"   color="inherit">Advanced Excel</Link></Box>
                                <Box pb={0.8}><Link href ="/"   color="inherit">AutoCAD</Link></Box>
                                <Box pb={0.8}><Link href ="/"   color="inherit">Creative Writing</Link></Box>
                                <Box pb={0.8}><Link href ="/"   color="inherit">Data Science</Link></Box>
                            </Grid>
                            <Grid item xs={12} sm = {3} bp={5}>
                                <Box borderBottom={1} mb={1}  sx={{fontWeight:'bold'}}>About Internhsala</Box>
                                <Box pb={0.8}><Link href ="/"   color="inherit">About Us</Link></Box>
                                <Box pb={0.8}><Link href ="/"   color="inherit">We're hiring</Link></Box>
                                <Box pb={0.8}><Link href ="/"   color="inherit">Hire interns for your company</Link></Box>
                                <Box pb={0.8}><Link href ="/"   color="inherit">Team Diary</Link></Box>
                                <Box pb={0.8}><Link href ="/"   color="inherit">Blog</Link></Box>
                                <Box pb={0.8}><Link href ="/"   color="inherit">Our Services</Link></Box>
                                <Box pb={0.8}><Link href ="/"   color="inherit">Terms & Conditions</Link></Box>
                                <Box pb={0.8}><Link href ="/"   color="inherit">Privacy</Link></Box>
                                <Box pb={0.8}><Link href ="/"   color="inherit">Contact US</Link></Box>
                            </Grid>
                            
                        </Grid>

                    </Container>
                    
                    <Box pt= {3} >
                        <Divider style={{ background: 'white' }}/> 
                        <container maxWidth = "lg">
                     
                            <Grid container spacing={5}>
                    
                                <Grid item xs={12} sm = {6}>
                   
                                    <Typography variant='h6' sx={{fontWeight:'bold'}}>Follow Us</Typography>
                                    <Button color='inherit'  to='/' component={Link}><InstagramIcon/></Button>
                                    <Button color='inherit' ><FacebookIcon/></Button>
                                    <Button color='inherit' ><LinkedInIcon/></Button>
                                    <Button color='inherit' ><TwitterIcon/></Button>
                                </Grid>
                    
                                <Grid item xs={12} sm = {6}  bgcolor='secondary' textAlign='center'  >
                                    <Typography variant='h6'align='center' >©Copyright 2021 XcitEducation</Typography>
                                </Grid>
                    
                    
                            </Grid>

                        </container>
                    </Box>
                </Box>
            </footer>
        </>
    )
}

export default Footer