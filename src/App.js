import React, { Component, Fragment } from "react";
import { UploadBox, Footer } from "./components/index";
import { Typography, Toolbar, AppBar, Button, Grid } from "@material-ui/core";
import { FontAwesomeIcon } from "@fortawesome/react-fontawesome";
import LoadingScreen from './components/Loading';
import {
  faSpinner,
  faCircleNotch,
  faArrowAltCircleDown,
} from "@fortawesome/free-solid-svg-icons";
import styles from "./App.module.css";
import axios from "axios";
// import FileDownload from 'js-file-download'

export default class App extends Component {
  state = {
    title: "Face Morping",
    filenames: [],
    disabled: true,
    connectedName: "",
    loading: false,
    sessionComplete: false,
  };

  createConnectedName = () => {
    if (this.state.filenames.length === 2) {
      const connectedName =
        this.state.filenames[0] + "|" + this.state.filenames[1];
      this.setState({ connectedName });
    }
  };

  handleFileName = (filename) => {
    this.setState({
      filenames: [...this.state.filenames, filename],
    });
    if (this.state.filenames.length === 2) {
      this.setState({
        disabled: false,
      });
      this.createConnectedName();
    }
  };

  handleClick = () => {
    if (!this.state.disabled) {
      this.setState({ loading: true });
      axios({
        url: `/api/morph/${this.state.connectedName}`,
        method: "GET",
        responseType: "blob",
      }).then((response) => {
        const url = window.URL.createObjectURL(new Blob([response.data]));
        const link = document.createElement("a");
        link.href = url;
        link.setAttribute("download", "Morph.gif"); //or any other extension
        document.body.appendChild(link);
        link.click();
        this.resetPage();
      });
    }
  };
  componentDidUpdate = () => {};

  resetPage = () => {
    this.setState({
      filenames: [],
      disabled: true,
      connectedName: "",
      loading: false,
    });
  };

  render() {
    console.log(this.state);
    return (
      <Fragment>
        <AppBar position="static">
          <Toolbar>
            <Typography variant="h6">{this.state.title}</Typography>
          </Toolbar>
        </AppBar>
        <Grid
          container
          spacing={0}
          direction="column"
          alignItems="center"
          justify="center"
          className={styles.button}
        >
          <Grid item xs={12} md={6} lg={6}>
            <Button
              variant="contained"
              color="primary"
              disabled={this.state.disabled}
              onClick={this.handleClick}
            >
              <Typography variant="button">
                <FontAwesomeIcon icon={faArrowAltCircleDown} /> Download Morph
                GIF{" "}
              </Typography>
            </Button>
          </Grid>
          {this.state.loading && (
            <Fragment>
              <LoadingScreen />
            </Fragment>
          )}
          <UploadBox handleFileName={this.handleFileName} />
        </Grid>
        <Footer />
      </Fragment>
    );
  }
}
