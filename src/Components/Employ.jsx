import {
  Grid,
  Paper,
  TextField,
  Button,
  Typography,
  Link,
} from "@mui/material";
import React from "react";
import "./Employ.css";
import GoogleIcon from "@mui/icons-material/Google";
// import Login from "../../login/Login";

function Employ() {
  const paperStyle = {
    padding: 20,
    height: "65vh",
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
            <Grid>
              <TextField
                label="Official Email id"
                placeholder="name@company_name.com"
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
              <TextField
                label="Mobile Number"
                sx={{ mt: 2 }}
                placeholder="+ 91"
                type="number"
                fullWidth
                required
              ></TextField>
              <Typography style={btstyle}>
                By registering up, you agree to our
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
              Register Now
            </Button>
            <Grid sx={{ justifyContent: "center" }}>
              <Typography sx={{ ml: 18 }} style={font}>
                <Link href="#">Have a Question?</Link>
              </Typography>
            </Grid>
          </div>
        </Grid>
      </Paper>
    </Grid>
  );
}

export default Employ;
