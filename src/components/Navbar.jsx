import React from 'react';
import { makeStyles, AppBar, Toolbar, Typography, IconButton } from '@material-ui/core';
import MenuIcon from '@material-ui/icons/Menu';

const useStyles = makeStyles((theme) => ({
    root: {
        flexGrow: 1,
        background: "#f4f4f4"
    },
    menuButton: {
        marginRight: theme.spacing(2),
        color:'blue'
    },
    appbg: {
        background: 'white'
    }
}));

export default function Navbar() {
    const classes = useStyles();

    return (
        <>
            <div className={classes.root}>
                <AppBar position="static" className={classes.appbg}>
                    <Toolbar variant="dense">
                        <IconButton edge="start" className={classes.menuButton} color="inherit" aria-label="menu">
                            <MenuIcon />
                        </IconButton>
                        <Typography variant="h6" color="inherit">
                            Photos
                        </Typography>
                    </Toolbar>
                </AppBar>
            </div>
        </>
    );
}
