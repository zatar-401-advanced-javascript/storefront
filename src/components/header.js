//============================================| Dependencies |============================================

import { makeStyles } from '@material-ui/core/styles';
import AppBar from '@material-ui/core/AppBar';
import Toolbar from '@material-ui/core/Toolbar';
import Typography from '@material-ui/core/Typography';
import Button from '@material-ui/core/Button';
import { useSelector, useDispatch } from 'react-redux';
import { showCart } from '../store/cart'

//===============================================| Styling |===============================================
const useStyles = makeStyles((theme) => ({
  title: {
    flexGrow: 1,
  },
}));

//===========================================| Header Component |===========================================
function Header() {
  const dispatch = useDispatch();
  const state = useSelector((state) => {
    return {
      cart: state.cart
    };
  });

  const classes = useStyles();
  return (
    <AppBar color='primary' position="static">
      <Toolbar>
        <Typography variant="h6" className={classes.title}>
          Store
    </Typography>
        <Button onClick={() => dispatch(showCart(true))} color="inherit">Cart ({state.cart.cart.length})</Button>
      </Toolbar>
    </AppBar>
  )
}

export default Header;
//===========================================================================================================