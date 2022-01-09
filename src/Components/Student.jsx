import {
  Grid,
  Paper,
  TextField,
  Button,
  Typography,
  Link,
} from "@mui/material";
import React from "react";
import "./Student.css";
import GoogleIcon from "@mui/icons-material/Google";

function Student() {
  const paperStyle = {
    padding: 20,
    height: "72vh",
    width: 450,
    margin: "20px auto",
  };
  const btstyle = { margin: "10px 0" };
  const Textstyle = { margin: "0 4px" };
  const font = { fontSize: 17 };
  return (
    <Grid>
      <Paper className="paper" elevation={10} style={paperStyle}>
        <Grid>
          <div className="container">
            <a className="g-login" href="www.google.com">
              <div id="g-login">
                <div className="g-img">
                  <GoogleIcon />
                </div>
                <div className="g-content">Sign Up with Google</div>
              </div>
            </a>
            <div className="seprate">
              <div className="text">
                <p>OR</p>
              </div>
              <div className="border"></div>
            </div>
            <Grid>
              <TextField
                label="Email"
                placeholder="@example.com"
                fullWidth
                required
              ></TextField>
              <TextField
                label="Password"
                sx={{ mt: 2 }}
                placeholder="Enter Password"
                type="password"
                fullWidth
                required
              ></TextField>
              <Typography display="flex" mt={3}>
                <TextField
                  style={Textstyle}
                  label="First Name"
                  placeholder="Joe"
                ></TextField>
                <TextField label="Last Name" placeholder="Doe"></TextField>
              </Typography>
              <Typography style={btstyle}>
                By signing up, you agree to our
                <Link sx={{ ml: 1 }} href="#">
                  Term and condition
                </Link>
              </Typography>
            </Grid>
            <Button
              type="submit"
              color="primary"
              variant="contained"
              style={btstyle}
              fullWidth
            >
              Sign Up
            </Button>
            <Grid sx={{ justifyContent: "center" }}>
              <Typography ml={5} style={font}>
                Already registered?
                <Link href="#">Login</Link>
              </Typography>
            </Grid>
          </div>
        </Grid>
      </Paper>
    </Grid>
  );
}

export default Student;
