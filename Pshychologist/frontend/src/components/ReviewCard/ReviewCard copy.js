import React from 'react'
import { makeStyles } from '@material-ui/core/styles';

function ReviewCard(props) {
    const useStyles = makeStyles({
        root: {
            paddingTop:10,
            display: 'flex',
            alignitems: 'center',
            justifycontent: 'center',
            width:900, 
            margin: 'auto',
            paddingRight: 900
        },
    });
    const classes = useStyles();
    return (
        <div className={classes.root}>

            <img src={props.image} className="image-review"></img>

            <div>
                <p className="Card-text">
                    <h2>{props.name}, {props.age}</h2>
                    {props.text}
                </p>
            </div>
        </div>
    )
}

export default ReviewCard