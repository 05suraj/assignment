import React from 'react'
import { makeStyles, Button, Grid, IconButton } from '@material-ui/core';
import pushicon from '../image/pushpin.svg';
import Popover from '@material-ui/core/Popover';

import Typography from '@material-ui/core/Typography';
import ErrorOutlineIcon from '@material-ui/icons/ErrorOutline';


const useStyles = makeStyles((theme) => ({
    root: {
        flexGrow: 1,
    },
    popover: {
        pointerEvents: 'none',
    },
    indigo: {
        fontSize: '26px',
        fontWeight: '600',
        color: "black"

    }

}));
const ClientHeading1 = () => {
    const classes = useStyles();
    const [anchorEl, setAnchorEl] = React.useState(null);

    const handlePopoverOpen = (event) => {
        setAnchorEl(event.currentTarget);
    };

    const handlePopoverClose = () => {
        setAnchorEl(null);
    };

    const open = Boolean(anchorEl);

    return (
        <>
            <Grid xs={12} container
                direction="row"
                justify="space-between"
                alignItems="center">
                <h1 className={classes.indigo}>Rambow</h1>
                <Typography
                    aria-owns={open ? 'mouse-over-popover' : undefined}
                    aria-haspopup="true"
                    onMouseEnter={handlePopoverOpen}
                    onMouseLeave={handlePopoverClose}
                >
                    <IconButton color="primary">
                        <img src={pushicon} alt="pushicon" />
                    </IconButton>

                </Typography>
                <Popover
                    id="mouse-over-popover"
                    className={classes.popover}

                    open={open}
                    anchorEl={anchorEl}
                    anchorOrigin={{
                        vertical: 'top ',
                        horizontal: 'right',
                    }}
                    transformOrigin={{
                        vertical: 'bottom',
                        horizontal: 'left',
                    }}
                    onClose={handlePopoverClose}
                    disableRestoreFocus
                >
                    <Button size='small' color="secondary" variant="outlined"><ErrorOutlineIcon /> remove client</Button>
                </Popover>
            </Grid>
        </>
    )
}

export default ClientHeading1;