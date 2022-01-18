import {
  AppBar,
  Button,
  Toolbar,
  Typography,
  Menu,
  // Box,
  MenuItem,
  IconButton,
  Drawer,
  List,
  ListItemText,
  ListItemButton,
  // Container,
  // Theme,
} from "@mui/material";
// import { makeStyles, ThemeProvider } from "@mui/styles";
import { Link } from "react-router-dom";
import LoginIcon from "@mui/icons-material/Login";
import ArrowDropDownOutlinedIcon from "@mui/icons-material/ArrowDropDownOutlined";
import MenuRoundedIcon from "@mui/icons-material/MenuRounded";
import PopupState, { bindMenu, bindTrigger } from "material-ui-popup-state";
import React, { useState } from "react";

const Navbar = () => {
  const [open, setOpen] = useState(false);
  return (
    <>
      <Drawer open={open} onClose={() => setOpen(false)}>
        <List
          disablePadding
          sx={{ width: "250px" }}
          onClick={() => setOpen(false)}
        >
          <ListItemButton component={Link} to="/">
            <ListItemText primary="Home"></ListItemText>
          </ListItemButton>
          <ListItemButton component={Link} to="/contact">
            <ListItemText primary="Contact Us"></ListItemText>
          </ListItemButton>
          <ListItemButton component={Link} to="/about">
            <ListItemText primary="About Us"></ListItemText>
          </ListItemButton>
          <ListItemButton component={Link} to="/Internship">
            <ListItemText primary="Internship"></ListItemText>
          </ListItemButton>
          <ListItemButton component={Link} to="/Ide">
            <ListItemText primary="Ide"></ListItemText>
          </ListItemButton>
          <ListItemButton component={Link} to="/individualPage">
            <ListItemText primary="individualPage"></ListItemText>
          </ListItemButton>
          <ListItemButton component={Link} to="/postIntern">
            <ListItemText primary="postIntern"></ListItemText>
          </ListItemButton>
          <ListItemButton component={Link} to="/question">
            <ListItemText primary="question"></ListItemText>
          </ListItemButton>
          <ListItemButton component={Link} to="/login/MyApplicationCard">
            <ListItemText primary="My Application"></ListItemText>
          </ListItemButton>
          <ListItemButton component={Link} to="/Employee/Dashboard">
            <ListItemText primary="Employee Dashboard"></ListItemText>
          </ListItemButton>
          <ListItemButton component={Link} to="/Employee/Internship">
            <ListItemText primary="Employee Internships"></ListItemText>
          </ListItemButton>
        </List>
      </Drawer>
      <AppBar position="static">
        <Toolbar>
          <IconButton color="inherit" onClick={() => setOpen(true)}>
            <MenuRoundedIcon />
          </IconButton>
          <Typography
            variant="h6"
            style={{ flexGrow: 1, textDecoration: "none" }}
            color="inherit"
            component={Link}
            to="/"
          >
            XcitEducation
          </Typography>
          {/* <div className={classes.sectionDesktop}> */}
          <div>
            <Button
              variant="outlined"
              sx={{ mr: 2 }}
              color="inherit"
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
                    variant="outlined"
                    color="inherit"
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
