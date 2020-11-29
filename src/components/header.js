import { makeStyles } from '@material-ui/core/styles';
import AppBar from '@material-ui/core/AppBar';
import Toolbar from '@material-ui/core/Toolbar';
import Typography from '@material-ui/core/Typography';
import Button from '@material-ui/core/Button';
import { red } from "@material-ui/core/colors";
// import IconButton from '@material-ui/core/IconButton';
// import MenuIcon from '@material-ui/icons/Menu';

const useStyles = makeStyles((theme) => ({
  // root: {
  //   flexGrow: 1,
  // },
  // menuButton: {
  //   marginRight: theme.spacing(2),
  // },
  title: {
    flexGrow: 1,
  },
}));


function Header() {
  const classes = useStyles();
  return (
    <AppBar color='primary' position="static">
      <Toolbar>
        <Typography variant="h6" className={classes.title}>
          Store
    </Typography>
        <Button color="inherit">Cart (0)</Button>
      </Toolbar>
    </AppBar>
  )
}

export default Header;