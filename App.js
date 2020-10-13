import React from 'react';
import Grid from '@material-ui/core/Grid';
import Paper from '@material-ui/core/Paper';
import AppBar from '@material-ui/core/AppBar';
import Drawer from '@material-ui/core/Drawer';
import Toolbar from '@material-ui/core/Toolbar';
import Typography from '@material-ui/core/Typography';
import IconButton from '@material-ui/core/IconButton';
import AccountCircle from '@material-ui/icons/AccountCircle';
import MenuItem from '@material-ui/core/MenuItem';
import Menu from '@material-ui/core/Menu';
import SettingsIcon from '@material-ui/icons/Settings';
import HelpOutlineRoundedIcon from '@material-ui/icons/HelpOutlineRounded';
import CssBaseline from '@material-ui/core/CssBaseline';
import List from '@material-ui/core/List';
import ListItem from '@material-ui/core/ListItem';
import ListItemText from '@material-ui/core/ListItemText';
import AddCircleOutlineRoundedIcon from '@material-ui/icons/AddCircleOutlineRounded';
import { left } from '@material-ui/system';
import { top } from '@material-ui/system';
import todo from './todo.png';
import { makeStyles } from '@material-ui/core/styles';

const drawerWidth = 150;

const useStyles = makeStyles((theme) => ({
  root: {
    flexGrow: 1,
    backgroundColor: '#B5B5AC',
  },
  paper: {
    padding: theme.spacing(0),
    background: '#B5B5AC',
    height: '100vh'
  },
  paper1: {
    padding: theme.spacing(1),
    textAlign: 'center',
    background: '#EEEEEC',
    marginTop: '15vh',
    marginLeft: '12vw',
    marginRight: '2vw',
    width: '54vw',
    height: '80vh'
  },
  paper2: {
    padding: theme.spacing(1),
    textAlign: 'center',
    background: '#EEEEEC',
    marginTop: '15vh',
    width: '30vw',
    height: '80vh'
  },
  appbar: {
    zIndex: theme.zIndex.drawer + 1,
    background: '#581511',
    
  },
  title: {
    flexGrow: 1,
    padding: theme.spacing(2),
  },
  drawer: {
    width: drawerWidth,
    flexShrink: 0,
  },
  drawerPaper: {
    width: drawerWidth,
    background: '#581511',
  },
  drawerContainer: {
    overflow: 'auto',
  },
  listItem: {
    width: '100%'
  },
  img: {
    width: '50%',
  },
}));


export default function ClippedDrawer() {
  const classes = useStyles();
  const [auth, setAuth] = React.useState(true);
  const [anchorEl, setAnchorEl] = React.useState(null);
  const open = Boolean(anchorEl);

  const handleMenu = (event) => {
    setAnchorEl(event.currentTarget);
  };

  const handleClose = () => {
    setAnchorEl(null);
  };


  return (
    <div className={classes.root}>
      <CssBaseline style={{background:'#B5B5AC'}}/>
      <Grid container spacing={0}>
        <Grid item lg={12}>
        <Paper className={classes.paper}>
          
          <AppBar position="fixed" className={classes.appbar}>
            <Toolbar>
              <Typography variant="h5" className={classes.title}>
                LOGO
              </Typography>
              {auth && (
                <div>
                  
                  <IconButton
                    aria-label="account of current user"
                    aria-controls="menu-appbar"
                    aria-haspopup="true"
                    onClick={handleMenu}
                    color="inherit"
                  >
                    <HelpOutlineRoundedIcon/> &emsp;
                    <SettingsIcon /> &emsp;
                    <AccountCircle fontSize="large" />
                    
                  </IconButton>
                  <Menu
                    id="menu-appbar"
                    anchorEl={anchorEl}
                    anchorOrigin={{
                      vertical: 'top',
                      horizontal: 'right',
                    }}
                    keepMounted
                    transformOrigin={{
                      vertical: 'top',
                      horizontal: 'right',
                    }}
                    open={open}
                    onClose={handleClose}
                  >
                    <MenuItem onClick={handleClose}>Profile</MenuItem>
                    <MenuItem onClick={handleClose}>My account</MenuItem>
                  </Menu>
                </div>
              )}
            </Toolbar>
          </AppBar>
          
          <Drawer
            className={classes.drawer}
            variant="permanent"
            classes={{
              paper: classes.drawerPaper,
            }}
            >
            <Toolbar/>
            <div className={classes.drawerContainer}>
              <List>
                {['Private', 'Teams'].map((text, index) => (
                <ListItem button key={text}>
                  <ListItemText primary={text}
                  style={{textAlign: 'center', color: 'white'}}
                  />
                </ListItem>
              ))}
              </List>

            </div>
          </Drawer>

          <Grid item lg={12} 
            container
            direction="row"
            justify="flex-start"
            alignItems="center">
            <Paper className={classes.paper1}>
              
            </Paper>
            <Paper className={classes.paper2}>
              <Typography variant="h5" className={classes.title} style={{textAlign:'left'}}>
                TODOLIST
              </Typography>
              <img src={todo} className={classes.img} style={{itemsAlign:'left'}}/>  

              
            </Paper>
          </Grid>

        </Paper>
        </Grid>


      </Grid> 
    </div>
  );
}