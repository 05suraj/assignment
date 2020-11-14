import React from 'react';
import { makeStyles, Button, Paper, Grid, IconButton } from '@material-ui/core';

import Radio from '@material-ui/core/Radio';

import FormControlLabel from '@material-ui/core/FormControlLabel';
import ClientCard from './ClientCard';
import ClientCard1 from './ClientCard1';
import clsx from 'clsx';
import Typography from '@material-ui/core/Typography';
import ClientHeading from './ClientHeading';
import ClientHeading1 from './ClientsHeading1';
import ClientHeading2 from './ClientHeading2';

const useStyles = makeStyles((theme) => ({
    root: {
        flexGrow: 1,
    },


    paper: {
        padding: theme.spacing(2),
        textAlign: 'center',
        color: theme.palette.text.secondary,

    },
    gridbaground: {
        background: '#f4f4f4'
    },
    gridbaground1: {
        background: '#f4f4f4',
        marginTop: '10px'
    },
    formControl: {
        margin: theme.spacing(3),
    },
    button: {
        margin: theme.spacing(1, 1, 0, 0),
    },
    btnmargin: {
        marginRight: '10px',
        marginLeft: "8px"

    },
    grindmrgin: {
        marginTop: '20px',

    },
    cardMargin: {
        marginBottom: '10px',
    },
    gr: {
        marginBottom: "25px",
    },
    sussceBtn: {

        color: "#24c506",
        border: "1px solid rgb(4 ,232, 17,  50%)",
        marginRight: '15px',
        paddingLeft: "12px"
    }

}));

export default function Comp2() {
    const classes = useStyles();








    return (
        <div className={classes.root}>

            <Paper className={classes.paper}>
                <Grid container spacing={3} className={classes.gr}>
                    <Grid container xs={12} elevation={0} spacing={3}>
                        <Grid item xs={4} className={classes.grindmrgin}>
                            <Button variant="outlined" className={classes.btnmargin}>
                                Not Started
                    </Button>
                            <FormControlLabel value="best" control={<Radio />} label={<Typography style={{ fontSize: "13px" }}>Not Breached</Typography>} />
                            <FormControlLabel value="worst" control={<Radio />} label={<Typography style={{ fontSize: "13px" }}>Breached</Typography>} />
                        </Grid>
                        <Grid item xs={4} className={classes.grindmrgin}>
                            <Button variant="outlined" color="secondary" className={classes.btnmargin}>
                                In  Progress
      </Button>
                            <FormControlLabel value="best" control={<Radio />} label={<Typography style={{ fontSize: "13px" }}>Not Breached</Typography>} />
                            <FormControlLabel value="worst" control={<Radio />} label={<Typography style={{ fontSize: "13px" }}>Breached</Typography>} />
                        </Grid>
                        <Grid item xs={4} className={classes.grindmrgin}>
                            <Button variant="outlined" color="primary" className={classes.sussceBtn}>
                                Completed
      </Button>
                            <FormControlLabel value="best" control={<Radio />} label={<Typography style={{ fontSize: "13px" }}>Not Breached</Typography>} />
                            <FormControlLabel value="worst" control={<Radio />} label={<Typography style={{ fontSize: "13px" }}>Breached</Typography>} />
                        </Grid>
                    </Grid>

                    <Grid item xs={12} sm={4} >

                        <Paper className={clsx(classes.paper, classes.gridbaground)} elevation={3}>
                            <ClientHeading />
                            <ClientCard className={classes.cardMargin} />
                            <ClientCard1 />
                        </Paper>
                    </Grid>
                    <Grid itemxs={12} sm={4}>
                        <Paper className={clsx(classes.paper, classes.gridbaground1)} elevation={3}>
                            <ClientHeading1 />
                            <ClientCard className={classes.cardMargin} />
                            <ClientCard className={classes.cardMargin} />
                            <ClientCard className={classes.cardMargin} />



                        </Paper>
                    </Grid>
                    <Grid item xs={12} sm={4}>
                        <Paper className={clsx(classes.paper, classes.gridbaground)} elevation={3}>
                            <ClientHeading2 />
                            <ClientCard className={classes.cardMargin} />
                            <ClientCard1 />
                        </Paper>
                    </Grid>

                </Grid>
            </Paper>

        </div>
    );
}
