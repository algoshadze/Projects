import React from 'react'
import Typography from '@material-ui/core/Typography';
import { makeStyles } from '@material-ui/core/styles';

function Card() {
    const useStyles = makeStyles({
        root: {
            height: 500,
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

            <img src={require('./hare.jpg')} className="image-main"></img>

            <div>
                <p className="Card-text">
                    <h1>Приветствую Вас на своём сайте!</h1>
                    Я профессиональный психолог-консультант, психотерапевт.
                    Веду частную практику, в том числе индивидуальные и групповые психологические консультации для детей,
                    подростков и взрослых. Психотерапевтические сессии проводятся как онлайн (Skype),
                    так и в режиме очных консультаций. Сегодня, в нашем перегруженном информацией мире,
                    особенно важно уметь вовремя останавливаться, прислушиваться к себе, разбираться в собственных чувствах,
                    мотивах и стремлениях. Если Вы не знаете, как сделать это самостоятельно, я помогу Вам во время наших встреч.
                </p>
            </div>

        </div>
    )
}

export default Card