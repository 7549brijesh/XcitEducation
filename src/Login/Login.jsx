import { Grid, Paper, TextField,Button,Typography,Link } from "@mui/material";
import React from "react";
import './login.css';
import CloseIcon from '@mui/icons-material/Close';
import GoogleIcon from '@mui/icons-material/Google';


function Login() {
    const paperStyle={padding:20,height:'75vh',width:450,margin:"20px auto"}
    const btstyle={margin:"8px 0"}
    const font={fontSize:17}
  return (
    <Grid>
      <Paper className="paper" elevation={10} style={paperStyle}>
          <div className="close">
              <Button><CloseIcon /></Button>
          </div>
          <Grid>
              <div className="container">
                  <div className="user-menu">
                      <div id="student">
                          <a className="u-line" href="#">Student</a> 
                      </div>
                      <div id="Employee">
                          <a className="u-line" href="#">Employer/T&P</a>
                      </div>
                  </div>
                  <a className="g-login" href="www.google.com">
                      <div id="g-login">
                          <div className="g-img">
                              <GoogleIcon/>
                              
                          </div>
                          <div className="g-content">
                              Login with Google
                          </div>
                      </div>
                  </a>
                  <div className="seprate">
                      <div className="text"><p>OR</p></div>
                      <div className="border"></div>
                  </div>
                  <Grid>
                      <TextField label='Email' placeholder="@example.com" fullWidth required></TextField>
                      <TextField label='Password' sx={{mt:2}} placeholder="Enter Password" type="password" fullWidth required></TextField>
                      <Typography style={btstyle}>
                          <Link href="#">
                          Forgot Password
                          </Link>
                      </Typography>
                  </Grid>
                  <Button type="submit" color="primary" variant="contained" style={btstyle} fullWidth>Login</Button>
                  <Grid>
                      <Typography style={font}>
                      New to Internshala? Register(
                          <Link href="#">Student</Link>/
                          <Link href="#">Company</Link>
                      )
                      </Typography>
                  </Grid>
                  

              </div>
          </Grid>
      </Paper>
    </Grid>
  );
}

export default Login;
