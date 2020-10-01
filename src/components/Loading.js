import React from 'react';
import { Typography } from '@material-ui/core';

import LoadingIcon from '../assets/loader.gif';
import styles from '../App.module.css';

export default function LoadingScreen() {
  const changingText = () => {
    const text = [
      'Processing Image',
      'Building Morph',
      'Some final touches',
      'Almost done',
    ];
    let iter = 0;
    const time = Math.random() * 3000;
    const textChanger = setInterval(() => {
      document.getElementById("text-slider").textContent = text[iter];
      iter<3 ? iter++ : stopTimer();
    }, time + 3000);
    const stopTimer = () => clearInterval(textChanger);
  };

  return (
    <>
      <Typography className={styles.typo} style={{fontSize: "20px"}} color="primary" variant="caption" id="text-slider">
        {changingText()}
      </Typography>
      <img src={LoadingIcon} style={{ maxWidth: '100px' }} alt="Loading..." />
    </>
  );
}
