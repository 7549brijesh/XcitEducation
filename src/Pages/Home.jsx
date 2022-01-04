import React from "react";
import {
  Box,
  Typography,
  Grid,
  Container,
  Button,
  Link,
  Paper,
} from "@mui/material";
import SearchIcon from '@mui/icons-material/Search';
import SendIcon from "@mui/icons-material/Send";
import "./home.css";
import work from "./image/work.jfif";
import job from "./image/jobs.png";
const Home = () => {
  return (
    <>
      <Grid m={15}>
          <div className="search">
              <input type="search" name="search" id="search" autoComplete="false" placeholder="What are you looking for?" />
              <Button variant="contained"><SearchIcon /></Button>
          </div>
        <Typography variant="h4">Internships</Typography>
        <Typography display="flex" justifyContent="space-between">
          <div>Apply to 10,000+ internships for free</div>
          <Button
            className="btnstyle"
            variant="contained"
            endIcon={<SendIcon />}
          >
            View all internships
          </Button>
        </Typography>
        <Typography mt={5} mb={3} variant="h6">
          Popular Cities
        </Typography>
        <Grid display="flex" justifyContent="space-between">
          <Grid>
            <Link className="u-line" href="#">
              <Paper elevation={3}>
                <img className="img" src={work} />
                <Typography p={2} textAlign="center">
                  Work from home
                </Typography>
              </Paper>
            </Link>
          </Grid>
          <Grid>
            <Link className="u-line" href="#">
              <Paper elevation={3}>
                <img className="img" src={work} />
                <Typography p={2} textAlign="center">
                  Work from home
                </Typography>
              </Paper>
            </Link>
          </Grid>
          <Grid>
            <Link className="u-line" href="#">
              <Paper elevation={3}>
                <img className="img" src={work} />
                <Typography p={2} textAlign="center">
                  Work from home
                </Typography>
              </Paper>
            </Link>
          </Grid>
          <Grid>
            <Link className="u-line" href="#">
              <Paper elevation={3}>
                <img className="img" src={work} />
                <Typography p={2} textAlign="center">
                  Work from home
                </Typography>
              </Paper>
            </Link>
          </Grid>
          <Grid>
            <Link className="u-line" href="#">
              <Paper elevation={3}>
                <img className="img" src={work} />
                <Typography p={2} textAlign="center">
                  Work from home
                </Typography>
              </Paper>
            </Link>
          </Grid>
          <Grid>
            <Link className="u-line" href="#">
              <Paper elevation={3}>
                <img className="img" src={work} />
                <Typography p={2} textAlign="center">
                  Work from home
                </Typography>
              </Paper>
            </Link>
          </Grid>
        </Grid>
        <Typography mt={5} mb={3} variant="h6">
          Popular Categories
        </Typography>
        <Grid display="flex" justifyContent="space-between">
          <Grid>
            <Link className="u-line" href="#">
              <Paper elevation={3}>
                <img className="img" src={work} />
                <Typography p={2} textAlign="center">
                  Work from home
                </Typography>
              </Paper>
            </Link>
          </Grid>
          <Grid>
            <Link className="u-line" href="#">
              <Paper elevation={3}>
                <img className="img" src={work} />
                <Typography p={2} textAlign="center">
                  Work from home
                </Typography>
              </Paper>
            </Link>
          </Grid>
          <Grid>
            <Link className="u-line" href="#">
              <Paper elevation={3}>
                <img className="img" src={work} />
                <Typography p={2} textAlign="center">
                  Work from home
                </Typography>
              </Paper>
            </Link>
          </Grid>
          <Grid>
            <Link className="u-line" href="#">
              <Paper elevation={3}>
                <img className="img" src={work} />
                <Typography p={2} textAlign="center">
                  Work from home
                </Typography>
              </Paper>
            </Link>
          </Grid>
          <Grid>
            <Link className="u-line" href="#">
              <Paper elevation={3}>
                <img className="img" src={work} />
                <Typography p={2} textAlign="center">
                  Work from home
                </Typography>
              </Paper>
            </Link>
          </Grid>
          <Grid>
            <Link className="u-line" href="#">
              <Paper elevation={3}>
                <img className="img" src={work} />
                <Typography p={2} textAlign="center">
                  Work from home
                </Typography>
              </Paper>
            </Link>
          </Grid>
        </Grid>
        <Typography mt={3} mb={2} variant="h4">
          Internshala Trainings
        </Typography>
        <Typography display="flex" justifyContent="space-between" mb={4}>
            <div>Learn new-age skills on the gob</div>
            <Button
            className="btnstyle"
            variant="contained"
            endIcon={<SendIcon />}
          >
            View all tranings
          </Button>
        </Typography>
        <Grid display="flex" justifyContent="space-between">
          <Grid>
            <Link className="u-line" href="#">
              <Paper elevation={3}>
                <img className="img" src={work} />
                <Typography p={2} textAlign="center">
                  Work from home
                </Typography>
              </Paper>
            </Link>
          </Grid>
          <Grid>
            <Link className="u-line" href="#">
              <Paper elevation={3}>
                <img className="img" src={work} />
                <Typography p={2} textAlign="center">
                  Work from home
                </Typography>
              </Paper>
            </Link>
          </Grid>
          <Grid>
            <Link className="u-line" href="#">
              <Paper elevation={3}>
                <img className="img" src={work} />
                <Typography p={2} textAlign="center">
                  Work from home
                </Typography>
              </Paper>
            </Link>
          </Grid>
          <Grid>
            <Link className="u-line" href="#">
              <Paper elevation={3}>
                <img className="img" src={work} />
                <Typography p={2} textAlign="center">
                  Work from home
                </Typography>
              </Paper>
            </Link>
          </Grid>
          <Grid>
            <Link className="u-line" href="#">
              <Paper elevation={3}>
                <img className="img" src={work} />
                <Typography p={2} textAlign="center">
                  Work from home
                </Typography>
              </Paper>
            </Link>
          </Grid>
          <Grid>
            <Link className="u-line" href="#">
              <Paper elevation={3}>
                <img className="img" src={work} />
                <Typography p={2} textAlign="center">
                  Work from home
                </Typography>
              </Paper>
            </Link>
          </Grid>
        </Grid>
        <Typography mt={3} mb={2} variant="h4">
          Fresher Jobs
        </Typography>
        <Typography display="flex" justifyContent="space-between" mb={4}>
            <div>Premium fresher jobs on your fingertips</div>
            <Button
            className="btnstyle"
            variant="contained"
            endIcon={<SendIcon />}
          >
            View all jobs
          </Button>
        </Typography>
        <Grid ml={23} mr={23} display="flex" justifyContent="space-between">
          <Grid>
            <Link className="u-line" href="#">
              <Paper elevation={3}>
                <img className="img" src={job} />
                <Typography p={2} textAlign="center">
                Minimum CTC of 3LPA
                </Typography>
              </Paper>
            </Link>
          </Grid>
          <Grid>
            <Link className="u-line" href="#">
              <Paper elevation={3}>
                <img className="img" src={job} />
                <Typography p={2} textAlign="center">
                  Minimum CTC of 3LPA
                </Typography>
              </Paper>
            </Link>
          </Grid>
          <Grid>
            <Link className="u-line" href="#">
              <Paper elevation={3}>
                <img className="img" src={job} />
                <Typography p={2} textAlign="center">
                  100% verified jobs
                </Typography>
              </Paper>
            </Link>
          </Grid>
        </Grid>
    </Grid>
    </>
  );
};

export default Home;
