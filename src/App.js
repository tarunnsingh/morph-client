import React, {Component, Fragment } from 'react';
import { UploadBox }  from './components/index'
import { Typography, Toolbar, AppBar, Button, Grid } from "@material-ui/core";
import styles from './App.module.css'
import axios from 'axios'
// import FileDownload from 'js-file-download'

export default class App extends Component {
  state = {
    title: "Face Morping",
    filenames: [],
    disabled: true,
    connectedName: '',
    loading: false
  };

  createConnectedName = () => {
    if (this.state.filenames.length === 2) {
      const connectedName = this.state.filenames[0] + '|' + this.state.filenames[1]
      this.setState({ connectedName })
    }
  }

  handleFileName = (filename) => {
    this.setState({
      filenames: [...this.state.filenames, filename]
    })
    if(this.state.filenames.length === 2){
      this.setState({
        disabled: false
      })
    this.createConnectedName()
    }
  }

  handleClick = () => {
    if(!this.state.disabled){
      this.setState({loading: true})
      axios({
        url: `/api/morph/${this.state.connectedName}`,
        method: 'GET',
        responseType: 'blob',
      }).then((response) => {
         const url = window.URL.createObjectURL(new Blob([response.data]));
         const link = document.createElement('a');
         link.href = url;
         link.setAttribute('download', 'Morph.gif'); //or any other extension
         document.body.appendChild(link);
         link.click();
         this.resetPage()
      });
    }
  }

  resetPage = () => {
    this.setState({
      filenames: [],
    disabled: true,
    connectedName: '',
    loading: false
    })
  }
  
  

  render() {
    console.log(this.state)
    return (
      <Fragment>
        <AppBar position="static">
          <Toolbar>
            <Typography variant="h6">{this.state.title}</Typography>
          </Toolbar>
        </AppBar>
     <Grid container
      spacing={0}
      direction="column"
      alignItems="center"
      justify="center"
      className={styles.button}>
      <Button variant="contained" color="primary" disabled={this.state.disabled} onClick={this.handleClick}>
        Download Morph GIF
      </Button>
      {this.state.loading && 
      <Typography color="primary" variant="caption">Building Morph, your download will begin in few seconds...</Typography>}
      </Grid>
      <UploadBox handleFileName = {this.handleFileName}/>
      </Fragment>
    );
  }
}
