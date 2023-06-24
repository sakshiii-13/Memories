import { makeStyles } from '@material-ui/core/styles';

export default makeStyles((theme) => ({
  root: {
    '& .MuiTextField-root': {
      margin: theme.spacing(0.5),
    },
  },
  paper: {
    padding: theme.spacing(2),
  },
  form: {
    display: 'flex',
    flexWrap: 'wrap',
    justifyContent: 'center',
  },
  fileInput: {
    width: '87%',
    margin: '10px 0',
  },
  buttonSubmit: {
    marginBottom: 10, 
    backgroundColor: "#8675A9",
    '&:hover':{
      backgroundColor: '#6A2C70',	
        },
    color:'white',
  },
  button2:{ 
    backgroundColor:'#93B5C6',
    '&:hover':{
      backgroundColor: '#3282B8',	
        },
    color:'white',
  }
}));