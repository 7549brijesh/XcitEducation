import {
  AppBar,
  Button,
  Toolbar,
  Typography,
  Menu,
  // Box,
  MenuItem,
  // Container,
  // Theme,
} from "@mui/material";
// import { makeStyles, ThemeProvider } from "@mui/styles";
import { Link } from "react-router-dom";
import LoginIcon from "@mui/icons-material/Login";
import ArrowDropDownOutlinedIcon from "@mui/icons-material/ArrowDropDownOutlined";
import PopupState, { bindMenu, bindTrigger } from "material-ui-popup-state";
import React from "react";

// const useStyles = makeStyles((theme) => ({
//   sectionDesktop: {
//     display: "none",
//     [theme.breakpoints.up("md")]: {
//       display: "flex",
//     },
//   },
// }));

const Navbar = () => {
  // const classes = useStyles();
  return (
    <>
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
            <Button color="inherit" sx={{ mr: 2 }} component={Link} to="/about">
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
                      to="/register/Student"
                    >
                      Student
                    </MenuItem>
                    <MenuItem
                      onClick={popupState.close}
                      component={Link}
                      to="/register/Company"
                    >
                      Company
                    </MenuItem>
                    <MenuItem
                      onClick={popupState.close}
                      component={Link}
                      to="/login/MyApplicationCard"
                    >
                      My Application
                    </MenuItem>
                  </Menu>
                </>
              )}
            </PopupState>
          </div>
        </Toolbar>
      </AppBar>
    </>
  );
};

export default Navbar;
