import { makeStyles } from '@material-ui/core/styles';

export default makeStyles((theme) => ({
  appBar: {
    borderRadius: 25,
    margin: '30px 0',
    display: 'flex',
    flexDirection: 'row',
    justifyContent: 'center',
    alignItems: 'center',
  },
  heading: {
    // color: 'rgba(0,183,255, 1)',
    fontSize: '40px',
    color: '#25578A',
    fontFamily: 'system-ui',
    fontWeight: 'bold',
  },
  image: {
    marginLeft: '15px',
  },
  [theme.breakpoints.down('sm')]:{
    mainContainer:{
      flexDirection:"column-reverse"
    }
  }

}));