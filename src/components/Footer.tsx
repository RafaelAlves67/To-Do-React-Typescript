import React from 'react'
import styles from './Footer.module.css'

type Props = {}

const Footer = () => {
  return (
    <footer className={styles.footer}>
    <p>
      <span>React + TS Todo @ 2024</span>
    </p>
    </footer>
  )
}

export default Footer