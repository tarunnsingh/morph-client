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
    const loadingEl = document.getElementById('loading-box');
    loadingEl.style.display = 'flex';
    loadingEl.style.flexDirection = 'column';
    loadingEl.style.marginTop = '10px';
    loadingEl.style.marginRight = 'auto';
    loadingEl.style.marginLeft = 'auto';
    const textChanger = setInterval(() => {
      loadingEl.firstElementChild.textContent = text[iter];
      iter < 3 ? iter++ : stopTimer();
    }, time + 3000);
    const stopTimer = () => clearInterval(textChanger);
  };

  return (
    <>
      <Typography
        className={styles.typo}
        style={{ fontSize: '20px', marginLeft: 'auto', marginRight: 'auto' }}
        color="primary"
        variant="caption"
      >
        {changingText()}
      </Typography>
      <img src={LoadingIcon} style={{ maxWidth: '100px', marginLeft: 'auto', marginRight: 'auto' }} alt="Loading..." />
    </>
  );
}
