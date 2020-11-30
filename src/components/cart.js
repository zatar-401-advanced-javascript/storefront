//============================================| Dependencies |============================================
import { makeStyles } from '@material-ui/core/styles';
import Drawer from '@material-ui/core/Drawer';
import List from '@material-ui/core/List';
import Divider from '@material-ui/core/Divider';
import ListItem from '@material-ui/core/ListItem';
import Typography from '@material-ui/core/Typography';
import Grid from '@material-ui/core/Grid';
import { useSelector, useDispatch } from 'react-redux';
import { showCart } from '../store/cart'
import IconButton from '@material-ui/core/IconButton';
import DeleteIcon from '@material-ui/icons/Delete';
import AppBar from '@material-ui/core/AppBar';
import Button from '@material-ui/core/Button';

//===============================================| Styling |===============================================
const useStyles = makeStyles({
  list: {
    width: 250,
  },
  appBar: {
    top: 'auto',
    bottom: 0,
    right: 0,
    height: '40px',
    width: 250
  },
});

//============================================| Cart Component |============================================

export default function Cart() {
  
  const state = useSelector((state) => {
    return {
      cart: state.cart.cart,
      show: state.cart.show,
      active: state.categories.active
    };
  });
  const dispatch = useDispatch();
  const classes = useStyles();

  return (
    <Drawer anchor='right' open={state.show} onClose={() => dispatch(showCart(false))}>
      <List className={classes.list}>
        <ListItem>
          <Grid className={classes.container} container alignItems='center' justify="center" wrap="wrap" spacing={2}>
            <Typography variant="h4">
              Cart
          </Typography>
          </Grid>
        </ListItem>
        <Divider />
        {state.cart.map((product) => {
          return (
            <div key={product.name}>
              <ListItem>
                <Grid className={classes.container} container alignItems='center' justify="space-between" wrap="wrap" spacing={2}>
                  <Typography variant="h6">
                    <strong>{product.name}</strong> ({product.count})
                  </Typography>
                  <IconButton color="secondary" onClick={() => { dispatch({ type: 'DELETE', payload: { product, active: state.active } }) }} aria-label="delete">
                    <DeleteIcon />
                  </IconButton>
                </Grid>
              </ListItem>
              <Divider />
            </div>
          )
        })}
        <AppBar position="fixed" color="primary" className={classes.appBar}>
          <Grid container alignContent='center' justify="center" spacing={0}>
            <Button onClick={() => { dispatch({ type: 'CLEAR', payload: state.active }) }} variant="contained" color="secondary">
              <strong>Clear</strong>
            </Button>
          </Grid>
        </AppBar>
      </List>
    </Drawer>
  );
}

//===========================================================================================================
