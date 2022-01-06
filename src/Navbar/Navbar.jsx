import { AppBar, Button, Toolbar, Typography } from "@mui/material";
import LoginIcon from '@mui/icons-material/Login';
import React from "react";
import { BrowserRouter,Route,Routes,Link } from "react-router-dom";
import About from "../Pages/About";
import Contact from "../Pages/Contact";
import Home from "../Pages/Home";
import Login from "../Login/Login";
// import { makeStyles } from "@mui/styles";

// const useStyles = makeStyles((theme) =>({
//     sectionDesktop: {
//         display: "none",
//         [theme.breakpoints.up("md")]:{
//             display:"flex",
//         },
//     },
// }));


const Navbar=() =>{
    // const classes = useStyles();
    return(
        <>
                <BrowserRouter>
                        <AppBar position="static">
                            <Toolbar>
                                <Typography variant="h6" style={{flexGrow:1}}>XcitEducation</Typography>
                                {/* <div className={classes.sectionDesktop}> */}
                                <div>
                                    <Button color="inherit" sx={{mr:2}} component={Link} to="/">Home</Button>
                                    <Button color="inherit" sx={{mr:2}}component={Link} to="/contact">Contact</Button>
                                    <Button color="inherit" sx={{mr:2}}component={Link} to="/about">About Us</Button>
                                    <Button variant="contained" sx={{mr:2}} color="success" endIcon={<LoginIcon />} component={Link} to="/login">Login</Button>
                                    <Button variant="contained" color="error" component={Link} to="/register">Register</Button>
                                </div>
                            </Toolbar>
                        </AppBar>
                        
                        <Routes>
                            <Route path="/" element={<Home/>}/>
                            <Route path="/contact" element={<Contact/>}/>
                            <Route path="/about" element={<About/>}/>
                            <Route path="/login" element={<Login/>}/>
                            {/* <Route path="/register" element={<Register/>}/> */}
                        </Routes>
                </BrowserRouter>
        </>
    )
}

export default Navbar