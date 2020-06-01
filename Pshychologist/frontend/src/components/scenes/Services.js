import React from 'react';
import { makeStyles } from '@material-ui/core/styles';

function Services() {

    const useStyles = makeStyles({
        root: {
            alignitems: 'center',
            justifycontent: 'center',
            width: 900,
            margin: 'auto',
            marginTop: 50,

        
        },
    });
    const classes = useStyles();
    return (
        <div className={classes.root}>
            <div id="u441">
                <div id="u432">
                    <p><span>
                        Индивидуальное консультирование - 3000р/час
                    </span></p>
                </div>
                <div id="u432">
                    <p><span>
                        Групповой приём - 500р/час
                    </span></p>
                </div>
                <div id="u432">
                    <p><span>
                        Приём по скайпу - 1000р/час
                    </span></p>
                </div>
                <div id="u432">
                    <p><span>
                        Психологическое консультирование пар - 4000р
                    </span></p>
                </div>
                <div id="u432">
                    <p><span>
                        Семейное консультирование пар и родителей- 3500р
                    </span></p>
                </div>
            </div>
            <br/>
        </div>
    );
}

export default Services;
