import React, { Component, Fragment } from "react";

import styles from "./Footer.module.css";
import Typography from "@material-ui/core/Typography";


class Footer extends Component {
  render() {
    return (
      
        <Typography className={styles.footer} >Created with 💙 by Tarun</Typography>
      
    );
  }
}

export default Footer;