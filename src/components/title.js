//============================================| Dependencies |============================================
import { useSelector } from 'react-redux';
import Grid from '@material-ui/core/Grid';
import Typography from '@material-ui/core/Typography';
import { makeStyles } from '@material-ui/core/styles';
import Paper from '@material-ui/core/Paper';

//===============================================| Styling |===============================================
const useStyles = makeStyles((theme) => ({
  container: {
    marginTop: '50px',
    marginBottom: '30px'
  }
}));
//===========================================| Title Component |===========================================
function Title() {
  const classes = useStyles();

  const state = useSelector((state) => {
    return {
      active: state.categories.active,
      category: state.categories.categories
    };
  });

  function getDescription() {
    for (let i = 0; i <= state.category.length - 1; i++) {
      if (state.category[i].name === state.active) {
        return state.category[i].description;
      }
    }

  }

  return (
    // <Grid alignItems='center' className={classes.container} container justify="center" wrap="wrap" spacing={2}>
      <Paper className={classes.paper}>
        <Grid direction='column' alignItems='center' className={classes.container} container justify="center" wrap="wrap" spacing={2}>
          <Typography variant="h2" >
            {(state.active).toUpperCase()}
          </Typography>
          <Typography variant="h6" >
            {getDescription()}
          </Typography>
        </Grid>
      </Paper>
    // </Grid>

  )
}

export default Title;
//=========================================================================================================