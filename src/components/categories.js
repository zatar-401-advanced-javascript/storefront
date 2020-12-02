//============================================| Dependencies |============================================
import { connect } from 'react-redux';
import { activeCategory } from '../store/categories';
import { makeStyles } from '@material-ui/core/styles';
import ButtonBase from '@material-ui/core/ButtonBase';
import Typography from '@material-ui/core/Typography';
import { useEffect } from 'react'
import { getRemoteData } from '../store/categories'

const mapStateToProps = (state) => {
  return { categories: state.categories.categories };
};
const mapDispatchToProps = { activeCategory, getRemoteData };

//===============================================| Styling |===============================================
const useStyles = makeStyles((theme) => ({
  root: {
    display: 'flex',
    flexWrap: 'wrap',
    minWidth: 300,
    width: '100%',
  },
  image: {
    position: 'relative',
    height: 200,
    [theme.breakpoints.down('xs')]: {
      width: '100% !important', // Overrides inline-style
      height: 100,
    },
    '&:hover, &$focusVisible': {
      zIndex: 1,
      '& $imageBackdrop': {
        opacity: 0.15,
      },
      '& $imageMarked': {
        opacity: 0,
      },
      '& $imageTitle': {
        border: '4px solid currentColor',
      },
    },
  },
  focusVisible: {},
  imageButton: {
    position: 'absolute',
    left: 0,
    right: 0,
    top: 0,
    bottom: 0,
    display: 'flex',
    alignItems: 'center',
    justifyContent: 'center',
    color: theme.palette.common.white,
  },
  imageSrc: {
    position: 'absolute',
    left: 0,
    right: 0,
    top: 0,
    bottom: 0,
    backgroundSize: 'cover',
    backgroundPosition: 'center 40%',
  },
  imageBackdrop: {
    position: 'absolute',
    left: 0,
    right: 0,
    top: 0,
    bottom: 0,
    backgroundColor: theme.palette.common.black,
    opacity: 0.4,
    transition: theme.transitions.create('opacity'),
  },
  imageTitle: {
    position: 'relative',
    padding: `${theme.spacing(2)}px ${theme.spacing(4)}px ${theme.spacing(1) + 6}px`,
  },
  imageMarked: {
    height: 3,
    width: 18,
    backgroundColor: theme.palette.common.white,
    position: 'absolute',
    bottom: -2,
    left: 'calc(50% - 9px)',
    transition: theme.transitions.create('opacity'),
  },
}));

//===========================================| Categories Component |===========================================
const Categories = (props) => {

  useEffect(() => {
    props.getRemoteData()
    // eslint-disable-next-line react-hooks/exhaustive-deps
  }, [])

  const classes = useStyles();
  return (
    <div className={classes.root}>
      {props.categories.map((category) => (
        <ButtonBase
          focusRipple
          key={category.name}
          className={classes.image}
          onClick={() => props.activeCategory(category.name)}
          focusVisibleClassName={classes.focusVisible}
          style={{
            width: `${(1 / props.categories.length) * 100}%`,
          }}
        >
          <span
            className={classes.imageSrc}
            style={{
              backgroundImage: `url(${category.url})`,
            }}
          />
          <span className={classes.imageBackdrop} />
          <span className={classes.imageButton}>
            <Typography
              component="span"
              variant="subtitle1"
              color="inherit"
              className={classes.imageTitle}
            >
              {(category.name).toUpperCase()}
              <span className={classes.imageMarked} />
            </Typography>
          </span>
        </ButtonBase>
      ))}
    </div>
  );
};

export default connect(mapStateToProps, mapDispatchToProps)(Categories);
//===========================================================================================================
