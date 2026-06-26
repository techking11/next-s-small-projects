"use client";

import React from 'react'
import styles from './darkModeToggle.module.css'
import { useTheme } from '@/context/ThemeContext'

function DarkModeToggle() {
  const { toggle, mode } = useTheme();
  return (
    <div className={styles.container} onClick={toggle}>
      <div className={styles.icon}>🌙</div>
      <div className={styles.icon}>☀️</div>

      <div className={styles.ball} style={mode === 'light' ? { left: '3px' } : { right: '3px' }}></div>

    </div>
  )
}

export default DarkModeToggle
