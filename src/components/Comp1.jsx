import React from 'react';
import { makeStyles, Typography, TextField, Grid, Paper, FormControl, FormGroup, FormControlLabel, Checkbox, Switch } from '@material-ui/core';


const useStyles = makeStyles((theme) => ({
    root: {
        flexGrow: 1,
        display: 'flex',
        marginBottom: '50px',

    },
    formControl: {
        margin: theme.spacing(0),
    },
    paper: {
        padding: theme.spacing(2),
        textAlign: 'center',
        color: theme.palette.text.secondary,
    },

    grid: {
        marginTop: "25px"
    },

    container: {
        display: 'flex',
        flexWrap: 'wrap',
        marginTop: '65px',
    },
    textField: {
        marginLeft: theme.spacing(1),
        marginRight: theme.spacing(1),
        width: 200,
    },
    gridrow: {
        direction: "row"
    },

    checkbox: {
        marginBottom: '35px'
    },
    text_t: {
        marginTop: "0",
        color: 'gray',
    },

    border_L: {
        borderLeft: "5px solid #dd3be3",
        height: '18px',
        paddingLeft: '25px',
        marginLeft: '22px',
        fontSize: '15px',
        fontWeight: '500',
    },

    border_L1: {
        borderLeft: "5px solid #e9f545",
        height: '18px',
        paddingLeft: '25px',
        marginLeft: '22px',
        fontSize: '15px',
        fontWeight: '500',
    },

    border_L2: {
        borderLeft: "5px solid #06bd2a",
        height: '18px',
        paddingLeft: '25px',
        marginLeft: '22px',
        fontSize: '15px',
        fontWeight: '500',
    }



}));

export default function Comp1() {
    const classes = useStyles();
    const [state, setState] = React.useState({
        gilad: true,
        jason: false,
        antoine: false,
    });

    const handleChange = (event) => {
        setState({ ...state, [event.target.name]: event.target.checked });
    };

    const { gilad, jason, antoine } = state;

    return (
        <div className={classes.root}>
            <Grid container spacing={3} className={classes.grid}>


                <Grid item xs={12} sm={4} className={classes.gridrow} >


                    <form className={classes.container} noValidate>
                        <p style={{ fontSize: '21px', marginRight: '10px', fontWeight: 'bold', color: 'GrayText' }}>Status Monitor</p>
                        <TextField
                            id="date"
                            label="DOB"
                            type="date"
                            defaultValue="2017-05-24"
                            className={classes.textField}
                            InputLabelProps={{
                                shrink: true,
                            }}
                        />

                    </form>
                    <Typography className={classes.text_t}>brif intro to page functionalty will be listed here</Typography>

                </Grid>
                <Grid item xs={6} sm={3}>
                    <Paper className={classes.paper}> <FormControl component="fieldset" className={classes.formControl}>

                        <FormGroup>
                            <FormControlLabel
                                control={<Checkbox checked={gilad} onChange={handleChange} name="gilad" />}
                                label={<Typography className={classes.border_L} >Automated</Typography>}
                            />
                            <FormControlLabel
                                control={<Checkbox checked={jason} onChange={handleChange} name="jason" />}
                                label={<Typography className={classes.border_L1}>Event Base</Typography>}
                            />
                            <FormControlLabel
                                control={<Checkbox checked={antoine} onChange={handleChange} name="antoine" />}
                                label={<Typography className={classes.border_L2}>Manual</Typography>}
                            />
                        </FormGroup>

                    </FormControl>
                    </Paper>
                </Grid>

                <Grid item xs={6} sm={5} container direction="row"
                    justify="flex-end"
                    alignItems="flex-end">
                    <FormControlLabel className={classes.checkbox} control={<Switch />} label="Uncontrolled" />
                </Grid>

            </Grid>
        </div>
    );
}
