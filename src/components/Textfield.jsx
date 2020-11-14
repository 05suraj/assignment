import React from 'react';
import { makeStyles, Grid, OutlinedInput, InputLabel, InputAdornment, MenuItem, FormControl } from '@material-ui/core';

import Select from '@material-ui/core/Select';
import SearchIcon from "@material-ui/icons/Search";
import IconButton from "@material-ui/core/IconButton";

const useStyles = makeStyles((theme) => ({
    root: {
        flexGrow: 1,
    },
    paper: {
        padding: theme.spacing(2),
        textAlign: 'center',
        color: theme.palette.text.secondary,
    },
    formControl: {
        margin: theme.spacing(1),
        minWidth: "100%",
        background: "#fff",

    },
    selectEmpty: {
        marginTop: theme.spacing(2),
    },
    margin: {
        margin: theme.spacing(1),
        background: "#fff",
        minWidth: "100%",
    },
}));

export default function Textfield() {
    const classes = useStyles();
    const [age, setAge] = React.useState('');

    const handleChange = (event) => {
        setAge(event.target.value);
    };
    return (
        <div className={classes.root}>
            <Grid container spacing={2}>


                <Grid item xs={12} sm={2}>

                    <FormControl variant="outlined" className={classes.formControl} >
                        <InputLabel id="demo-simple-select-outlined-label">Client</InputLabel>
                        <Select
                            labelId="demo-simple-select-outlined-label"
                            id="demo-simple-select-outlined"
                            value={age}
                            onChange={handleChange}
                            label="Age"
                        >
                            <MenuItem value="">
                                <em>None</em>
                            </MenuItem>
                            <MenuItem value={10}>Ten</MenuItem>
                            <MenuItem value={20}>Twenty</MenuItem>
                            <MenuItem value={30}>Thirty</MenuItem>
                        </Select>
                    </FormControl>
                </Grid>



                <Grid item xs={12} sm={2}>
                    <FormControl variant="outlined" className={classes.formControl}>
                        <InputLabel id="demo-simple-select-outlined-label1">Service</InputLabel>
                        <Select
                            labelId="demo-simple-select-outlined-label1"
                            id="demo-simple-select-outlined"
                            value={age}
                            onChange={handleChange}
                            label="Age"
                        >
                            <MenuItem value="">
                                <em>None</em>
                            </MenuItem>
                            <MenuItem value={10}>Ten</MenuItem>
                            <MenuItem value={20}>Twenty</MenuItem>
                            <MenuItem value={30}>Thirty</MenuItem>
                        </Select>
                    </FormControl>
                </Grid>
                <Grid item xs={12} sm={2}>
                    <FormControl variant="outlined" className={classes.formControl}>
                        <InputLabel id="demo-simple-select-outlined-label2">Task</InputLabel>
                        <Select
                            labelId="demo-simple-select-outlined-label2"
                            id="demo-simple-select-outlined"
                            value={age}
                            onChange={handleChange}
                            label="Age"
                        >
                            <MenuItem value="">
                                <em>None</em>
                            </MenuItem>
                            <MenuItem value={10}>Ten</MenuItem>
                            <MenuItem value={20}>Twenty</MenuItem>
                            <MenuItem value={30}>Thirty</MenuItem>
                        </Select>
                    </FormControl>
                </Grid>
                <Grid item xs={12} sm={5}>
                    <FormControl fullWidth className={classes.margin} variant="outlined">
                        <InputLabel htmlFor="outlined-adornment-amount">Search</InputLabel>
                        <OutlinedInput
                            id="outlined-adornment-amount"

                            endAdornment={<InputAdornment position="start"><IconButton>
                                <SearchIcon />
                            </IconButton></InputAdornment>}

                            labelWidth={60}
                        />
                    </FormControl>
                </Grid>
            </Grid>
        </div>
    );
}
