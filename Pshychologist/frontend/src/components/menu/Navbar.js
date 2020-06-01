import React from 'react'
import { NavLink } from 'react-router-dom'
import { makeStyles } from '@material-ui/core/styles';
import AppBar from '@material-ui/core/AppBar';
import Toolbar from '@material-ui/core/Toolbar';
import IconButton from '@material-ui/core/IconButton';

const useStyles = makeStyles(theme => ({

  root: {
    flexGrow: 1,
  },
  menuButton: {
    marginRight: theme.spacing(4),

  },
  title: {
    flexGrow: 1,
  },
}));

const Navbar = () => {

  const classes = useStyles();

  return (

    <div className={classes.root}>
      <AppBar position="sticky" color="transparent" margin-bottom="50" style={{ alignItems: 'center' }}>
        <Toolbar className="appBar">

          <IconButton edge="start" className={classes.menuButton} aria-label="menu">
            {/* <MenuIcon /> */}
          </IconButton>
          <div className="ButtonNav">
            <NavLink to="/" className="navlink" exact >
              <p className="ButtonNav">Главная</p>
            </NavLink>
          </div>
          <div className="ButtonNav">
            <NavLink to="/aboutme" className="navlink" exact >
              <p className="ButtonNav">Обо мне</p>
            </NavLink>
          </div>
          <div className="ButtonNav">
            <NavLink to="/services" className="navlink" exact >
              <p className="ButtonNav">Услуги</p>
            </NavLink>
          </div>
          <div className="ButtonNav">
            <NavLink to="/reviews" className="navlink" exact >
              <p className="ButtonNav">Отзывы</p>
            </NavLink>
          </div>
          <div className="ButtonNav">
            <NavLink to="/blog" className="navlink" exact >
              <p className="ButtonNav">Блог</p>
            </NavLink>
          </div>
          <div className="ButtonNav">
            <NavLink to="/contacts" className="navlink" exact >
              <p className="ButtonNav">Контакты</p>
            </NavLink>
          </div>
          <div className="ButtonNav">
            <NavLink to="/literature" className="navlink" exact >
              <p className="ButtonNav">Литература</p>
            </NavLink>
          </div>
          <div className="ButtonNav">
            <p className="ButtonNav">Язык</p>
          </div>
        </Toolbar>
      </AppBar>
    </div>
  )
}

export default Navbar