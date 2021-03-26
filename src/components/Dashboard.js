import React from 'react'
import { makeStyles } from '@material-ui/core/styles';
import Paper from '@material-ui/core/Paper';
import AddCircleOutlineIcon from '@material-ui/icons/AddCircleOutline';
import VisibilityIcon from '@material-ui/icons/Visibility';
import PowerSettingsNewIcon from '@material-ui/icons/PowerSettingsNew';
import Button from '@material-ui/core/Button'
import HelpIcon from '@material-ui/icons/Help';


const useStyles = makeStyles((theme) => ({
  root: {
    display: 'flex',
    flexWrap: 'wrap',
    '& > *': {
      margin: theme.spacing(1),
      width: theme.spacing(16),
      height: theme.spacing(16),
    },
  },
  topBar: {
      width: '100%',
      height: '30px',
      marginTop: 0,
      paddingBottom: '30px'
  },

  navBar: {
        display: 'flex',
        flexDirection: 'row',
        flexWrap: 'wrap',
        justifyContent: 'space-between'
  },
  
  ulist: {
    listStyle: 'none',
      display: 'inline',
      marginRight: '10px',
      
  },

  list: {
      listStyle: 'none',
      display: 'inline',
      marginRight: '10px'
  },
  help: {
      marginTop: '10px'
  }
}));

function Dashboard (props){

    const classes = useStyles();
    return (
        <div>
            <Paper className={classes.topBar} elevation={2}>
                <nav className={classes.navBar}>
                    <ul className={classes.ulist}>
                        <li className={classes.list} style={{fontSize: '18px', fontWeight: 'bolder'}}>Dashboard</li>
                        <li className={classes.list}><Button><AddCircleOutlineIcon /><span>Create Course</span></Button></li>
                        <li className={classes.list}><Button><VisibilityIcon /><span>Preview Home Page</span></Button></li>
                        <li className={classes.list}><Button><VisibilityIcon /><span>Preview After Login</span></Button></li>
                        <li className={classes.list}><Button><PowerSettingsNewIcon /><span>View Welcome Screen</span></Button></li>

                    </ul>
                    <div className={classes.help}>
                        <Button><HelpIcon style={{color: '#60E7C6', fontSize: '35px'}}/>Help</Button>
                    </div>
                </nav>
            </Paper>
        </div>
    );
}

export default Dashboard