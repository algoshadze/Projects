import React from 'react'
import Grid from '@material-ui/core/Grid';
import { makeStyles } from '@material-ui/core/styles';
import BottomSourses from '../bottomSourses/BottomSourses'
function SocLinks() {
    const useStyles = makeStyles((theme) => ({
        root: {
          flexGrow: 1,
        },
        paper: {
            height: 140,
            width: 100,
          },
        control: {
          padding: theme.spacing(2),
        },
      }));
      const [spacing, setSpacing] = React.useState(2);
      const classes = useStyles();
    return (
        <div>
            <hr></hr>
            <h1>Найдите меня в соцсетях</h1>
            <div className="a1">
                <Grid container justify="center" className={classes.root} spacing={2}>
                    <Grid key="vk" item>
                        <BottomSourses name="Вконтакте" image='/img/vk.jpg' imageUrl="https://vk.com" />
                    </Grid>
                    <Grid key="fb" item>
                        <BottomSourses name="Facebook" image='/img/facebook.png' imageUrl="https://facebook.com" />
                    </Grid>
                </Grid>
            </div>
        </div>
    )
}

export default SocLinks