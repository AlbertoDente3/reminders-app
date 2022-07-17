import React from 'react'
import classes from './Header.module.scss'
import logo from './../images/logo.png'

export default function Header() {
  return (
    <div className={classes.header}>
      <div className={classes.header__content}>
        <div className={classes.header__logo}>
          <img src={logo} alt="" />
        </div>
      </div>
    </div>
  )
}
