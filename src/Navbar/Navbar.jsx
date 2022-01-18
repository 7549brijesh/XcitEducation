import {
  AppBar,
  Button,
  Toolbar,
  Typography,
  Menu,
  MenuItem,
} from "@mui/material";
// import { makeStyles,ThemeProvider } from "@mui/styles";
import { BrowserRouter, Route, Routes, Link } from "react-router-dom";
import LoginIcon from "@mui/icons-material/Login";
import ArrowDropDownOutlinedIcon from "@mui/icons-material/ArrowDropDownOutlined";
import PopupState, { bindMenu, bindTrigger } from "material-ui-popup-state";
import React from "react";
import About from "../Pages/Question";
import Contact from "../Pages/Contact";
import Home from "../Pages/Home";
import Login from "../Login/Login";
import StudentReg from "../register/student/Student";
import CompanyReg from "../register/employ/Employ";
import StudentLog from "../Login/Login";
// import CompanyLog from "../Login/CompanyLog";

// const useStyles = makeStyles((theme) =>({
//     sectionDesktop: {
//         display: "none",
//         [theme.breakpoints.up("md")]:{
//             display:"flex",
//         },
//     },
// }));

const Navbar = () => {
  // const classes = useStyles();
  return (
    <>
      {/* <ThemeProvider> */}
      <BrowserRouter>
        <AppBar position="static">
          <Toolbar>
            <Typography variant="h6" style={{ flexGrow: 1 }}>
              XcitEducation
            </Typography>
            {/* <div className={classes.sectionDesktop}> */}
            <div>
              <Button color="inherit" sx={{ mr: 2 }} component={Link} to="/">
                Home
              </Button>
              <Button
                color="inherit"
                sx={{ mr: 2 }}
                component={Link}
                to="/contact"
              >
                Contact
              </Button>
              <Button
                color="inherit"
                sx={{ mr: 2 }}
                component={Link}
                to="/about"
              >
                About Us
              </Button>
              <Button
                variant="contained"
                sx={{ mr: 2 }}
                color="success"
                endIcon={<LoginIcon fontSize="small" />}
                component={Link}
                to="/login"
              >
                Login
              </Button>
              {/* <Button variant="contained" color="error" {...bindTrigger(popupState)} component={Link} to="/register" endIcon={<ArrowDropDownOutlinedIcon fontSize="small"/>}>Register</Button> */}
              <PopupState variant="popover" popupId="demo-popup-menu">
                {(popupState) => (
                  <>
                    <Button
                      variant="contained"
                      color="error"
                      {...bindTrigger(popupState)}
                      endIcon={<ArrowDropDownOutlinedIcon fontSize="small" />}
                    >
                      Register
                    </Button>
                    <Menu {...bindMenu(popupState)}>
                      <MenuItem
                        onClick={popupState.close}
                        component={Link}
                        to="/register/StudentReg"
                      >
                        Student
                      </MenuItem>
                      <MenuItem
                        onClick={popupState.close}
                        component={Link}
                        to="/register/CompanyReg"
                      >
                        Company
                      </MenuItem>
                    </Menu>
                  </>
                )}
              </PopupState>
            </div>
          </Toolbar>
        </AppBar>
        <Routes>
          <Route path="/" element={<Home />} />
          <Route path="/about" element={<About />} />
          <Route path="/contact" element={<Contact />} />
          <Route path="/login/*" element={<Login />} />
          <Route path="/register/StudentReg" element={<StudentReg />} />
          <Route path="/register/CompanyReg" element={<CompanyReg />} />
          <Route path="/login/StudentLog" element={<StudentLog />} />
          {/* <Route path="/login/CompanyLog" element={<CompanyLog />} /> */}
        </Routes>
      </BrowserRouter>
      {/* </ThemeProvider> */}
    </>
  );
};

export default Navbar;
