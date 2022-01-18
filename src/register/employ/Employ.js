import {
  Grid,
  Paper,
  TextField,
  Button,
  Typography,
  Link,
  Avatar,
  Box,
} from "@mui/material";
import React from "react";
import "./style.css";
import Edu from "../image/edu.svg";
import work from "../image/jobs.png";
import Carousel from "react-elastic-carousel";
// import "./styles.css";
import img1 from "../image/jobs.png";
import img2 from "../image/jobs.png";
import img3 from "../image/jobs.png";
import LinkedInIcon from "@mui/icons-material/LinkedIn";

const stle = {
  width: "70vw",
};
const breakPoints = [{ height: 100, itemsToShow: 1 }];
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
    <Grid container>
      <Grid item lg={6} md={12} sm={12}>
        <img style={{ width: "80%", marginTop: "105px" }} src={Edu} alt="img" />
      </Grid>
      <Grid item lg={6} md={12} sm={12}>
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
      <Grid
        display="flex"
        alignItems="center"
        flexDirection="column"
        ml={20}
        mt={5}
      >
        <Typography variant="h4">Hire interns in 3 simple steps</Typography>
        <Grid container spacing={3} mt={4} ml={6}>
          <Grid item lg={4} md={4} sm={6} xs={12}>
            <Box>
              <Paper fullWidth elevation={3}>
                <img className="img" src={work} />
              </Paper>
              <Typography sx={{ fontWeight: "bold" }} p={1} textAlign="center">
                1. Register
              </Typography>
              <Typography p={1} textAlign="center">
                Get started by creating your account
              </Typography>
            </Box>
          </Grid>
          <Grid item lg={4} md={4} sm={6} xs={12}>
            <Box>
              <Paper fullWidth elevation={3}>
                <img className="img" src={work} />
              </Paper>
              <Typography sx={{ fontWeight: "bold" }} p={1} textAlign="center">
                2. Post
              </Typography>
              <Typography p={1} textAlign="center">
                Post internships for any profile and location
              </Typography>
            </Box>
          </Grid>
          <Grid item lg={4} md={4} sm={6} xs={12}>
            <Box>
              <Paper fullWidth elevation={3}>
                <img className="img" src={work} />
              </Paper>
              <Typography sx={{ fontWeight: "bold" }} p={1} textAlign="center">
                3. Hire
              </Typography>
              <Typography p={1} textAlign="center">
                Screen and hire using our world class ATS
              </Typography>
            </Box>
          </Grid>
        </Grid>
      </Grid>
      <Grid mt="45px" ml="200px">
        <h1 style={{ textAlign: "center",marginBottom:"15px" }}>2,95,299 companies trust us</h1>
        <div style={stle}>
          <Carousel>
            <Grid>
              <Paper elevation={4}>
                <Box p={3}>
                  <Box display="flex" >
                    <Avatar alt="Travis Howard" src={img1} />
                    <Typography ml={2}>
                      <Typography>Arvind K | Achieve Thyself</Typography>
                      <Typography>
                        <LinkedInIcon />
                      </Typography>
                    </Typography>
                  </Box>
                  <Typography p={3}>
                  "I didn't expect such a quick response to my requirements.
                  Thanks to <br /> Internshala, I could hire interns within a day. This
                  is a boon for anyone <br /> looking for interns and also for the
                  people who want to build their repertoire <br /> of work."
                </Typography>
                </Box>
              </Paper>
            </Grid>
            <Grid>
            <Paper elevation={4}>
                <Box p={3}>
                  <Box display="flex" >
                    <Avatar alt="Travis Howard" src={img1} />
                    <Typography ml={2}>
                      <Typography>Arvind K | Achieve Thyself</Typography>
                      <Typography>
                        <LinkedInIcon />
                      </Typography>
                    </Typography>
                  </Box>
                  <Typography p={3}>
                  "I didn't expect such a quick response to my requirements.
                  Thanks to <br /> Internshala, I could hire interns within a day. This
                  is a boon for anyone <br /> looking for interns and also for the
                  people who want to build their repertoire <br /> of work."
                </Typography>
                </Box>
              </Paper>
            </Grid>
            <Grid>
            <Paper elevation={4}>
                <Box p={3}>
                  <Box display="flex" >
                    <Avatar alt="Travis Howard" src={img1} />
                    <Typography ml={2}>
                      <Typography>Arvind K | Achieve Thyself</Typography>
                      <Typography>
                        <LinkedInIcon />
                      </Typography>
                    </Typography>
                  </Box>
                  <Typography p={3}>
                  "I didn't expect such a quick response to my requirements.
                  Thanks to <br /> Internshala, I could hire interns within a day. This
                  is a boon for anyone <br /> looking for interns and also for the
                  people who want to build their repertoire <br /> of work."
                </Typography>
                </Box>
              </Paper>
            </Grid>
          </Carousel>
        </div>
      </Grid>
    </Grid>
  );
}

export default Employ;
