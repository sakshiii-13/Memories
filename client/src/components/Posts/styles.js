import { makeStyles } from '@material-ui/core/styles';

export default makeStyles((theme) => ({
  mainContainer: {
    display: 'flex',
    alignItems: 'center',
    fontFamily: 'system-ui'
  },
  smMargin: {
    margin: 'theme.spacing(1),'
  },
  actionDiv: {
    textAlign: 'center',
  },
}));