import React from 'react';
import { makeStyles, Divider } from '@material-ui/core';
import clsx from 'clsx';
import Card from '@material-ui/core/Card';

import CardContent from '@material-ui/core/CardContent';
import CardActions from '@material-ui/core/CardActions';
import Collapse from '@material-ui/core/Collapse';

import IconButton from '@material-ui/core/IconButton';
import Typography from '@material-ui/core/Typography';
import { red } from '@material-ui/core/colors';

import ExpandMoreIcon from '@material-ui/icons/ExpandMore';

import Grid from '@material-ui/core/Grid';
import ButtonGroup from '@material-ui/core/ButtonGroup';
import Button from '@material-ui/core/Button';
import CardChild1 from '../inner-card/CardChild1';
import CardChild2 from '../inner-card/CardChild2';

const useStyles = makeStyles((theme) => ({
    root: {
        maxWidth: 345,
        marginBottom: 20,
        padding: "10px"
    },
    media: {
        height: 0,
        paddingTop: '56.25%', // 16:9
    },
    expand: {
        transform: 'rotate(0deg)',
        marginLeft: 'auto',
        transition: theme.transitions.create('transform', {
            duration: theme.transitions.duration.shortest,
        }),
    },
    expandOpen: {
        transform: 'rotate(180deg)',
    },
    avatar: {
        backgroundColor: red[500],
    },

    cardBorder: {
        borderLeft: '3px solid black'
    },
    btnbaground: {
        background: '#f53838',
    },

    btnbaground1: {
        background: '#e6e1e1',
        color: 'black'
    },

    btnbaground2: {
        background: '#82e342',

    },
    label_text: {
        fontSize: '13px',
        textTransform: 'capitalize',
        padding: "5px"
    },
    card_heading: {
        fontWeight: 'bold'
    }
}));



 const Card_second =()=> {
    const classes = useStyles();
    const [expanded, setExpanded] = React.useState(true);

    const handleExpandClick = () => {
        setExpanded(!expanded);
    };

    return (



      
        <Card className={classes.root}>



            <CardActions disableSpacing>

                <Typography gutterBottom variant="subtitle1" className={classes.card_heading}>
                    Accounting
                </Typography>
                <IconButton
                    className={clsx(classes.expand, {
                        [classes.expandOpen]: expanded,
                    })}
                    onClick={handleExpandClick}
                    aria-expanded={expanded}
                    aria-label="show more"
                >
                    <ExpandMoreIcon />
                </IconButton>

            </CardActions>

            <Typography paragraph>
                <Grid container spacing={2} xs={12}>



                    <Grid item xs={12} sm={4}>
                        <label className={classes.label_text}>not started</label>
                        <ButtonGroup disableElevation variant="contained" color="primary">

                            <Button className={classes.btnbaground}>2</Button>
                            <Button className={classes.btnbaground1}>25</Button>
                        </ButtonGroup>
                    </Grid>
                    <Grid item xs={12} sm={4}>
                        <label className={classes.label_text}>in progress</label>
                        <ButtonGroup disableElevation variant="contained" color="primary">

                            <Button className={classes.btnbaground}>2</Button>
                            <Button className={classes.btnbaground1}>25</Button>
                        </ButtonGroup>
                    </Grid>
                    <Grid item xs={12} sm={4}>
                        <label className={classes.label_text}>completed</label>
                        <ButtonGroup disableElevation variant="contained" color="primary">

                            <Button className={classes.btnbaground}>2</Button>
                            <Button className={classes.btnbaground2}>25</Button>
                        </ButtonGroup>



                    </Grid>
                </Grid>
            </Typography>

            <Collapse in={expanded} timeout="auto" unmountOnExit>
                <Divider />
                <CardContent>



                    <CardChild1 />
                    <CardChild2 />
                    <CardChild1 />

                </CardContent>
            </Collapse>
        </Card>
    );
}

export default Card_second;