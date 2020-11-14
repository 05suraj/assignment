import React from 'react'
import { makeStyles } from '@material-ui/core';
import Card from '@material-ui/core/Card';
import CardHeader from '@material-ui/core/CardHeader';

import CardActions from '@material-ui/core/CardActions';

import IconButton from '@material-ui/core/IconButton';
import Typography from '@material-ui/core/Typography';

import MoreVertIcon from '@material-ui/icons/MoreVert';

import Button from '@material-ui/core/Button';

const useStyles = makeStyles((theme) => ({

    cardBorder: {
        marginBottom: "15px",
        marginTop: '15px',
        borderLeft: '3px solid #df88f2',

    },
    subtitle: {
        fontSize: "13px",

        color: "#9c9a9a",
    }
}));
 const CardChild1=()=> {
    const classes = useStyles();
    return (
        <>
            <Card className={classes.cardBorder}  >
                <CardHeader

                    action={
                        <IconButton aria-label="settings">
                            <MoreVertIcon />
                        </IconButton>
                    }

                    subheader={
                        <Typography gutterBottom variant="subtitle1" >
                            Cash Recon with CP-Cash
                </Typography>
                    }

                />
                <CardActions>

                    <Button variant="contained" size="small" color="secondary" className={classes.margin}>
                        BREACHED/FAILD
        </Button> <Typography gutterBottom variant="subtitle1" className={classes.subtitle}>
                        September 14, 2020
                </Typography>
                </CardActions>


            </Card>
        </>
    )
}
export default CardChild1;