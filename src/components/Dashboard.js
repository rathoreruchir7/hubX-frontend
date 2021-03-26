import React from 'react'
import { makeStyles } from '@material-ui/core/styles';
import Paper from '@material-ui/core/Paper';
import AddCircleOutlineIcon from '@material-ui/icons/AddCircleOutline';
import VisibilityIcon from '@material-ui/icons/Visibility';
import PowerSettingsNewIcon from '@material-ui/icons/PowerSettingsNew';
import Button from '@material-ui/core/Button'
import HelpIcon from '@material-ui/icons/Help';
import Grid from '@material-ui/core/Grid';
import DateRangeIcon from '@material-ui/icons/DateRange';
import InputLabel from '@material-ui/core/InputLabel';
import MenuItem from '@material-ui/core/MenuItem';
import FormHelperText from '@material-ui/core/FormHelperText';
import FormControl from '@material-ui/core/FormControl';
import Select from '@material-ui/core/Select';
import NativeSelect from '@material-ui/core/NativeSelect';
import PersonOutlineIcon from '@material-ui/icons/PersonOutline';
import CachedIcon from '@material-ui/icons/Cached';
import LocalMallIcon from '@material-ui/icons/LocalMall';
import TimerIcon from '@material-ui/icons/Timer';
import ListAltIcon from '@material-ui/icons/ListAlt';
import LoyaltyIcon from '@material-ui/icons/Loyalty';
import {
    ArgumentAxis,
    ValueAxis,
    Chart,
    LineSeries,
  } from '@devexpress/dx-react-chart-material-ui';

  
  const data = [
    { argument: '2021-02-03', value: 0 },
    { argument: '2021-02-04', value: 0 },
    { argument: "2021-02-05", value: 0 },
    { argument: "2021-02-06", value: 0 },
    { argument: "2021-02-07", value: 0 },
    { argument: "2021-02-08", value: 0 },
    { argument: "2021-02-09", value: 1 },
  ];

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
      minWidth: '700px',
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
  },

  chartPaper: {
      marginTop: '20px',
      width: '100%',
      minHeight: '400px'
  },

  flexRow2: {
    display: 'flex',
    flexDirection: 'row',
    flexWrap: 'wrap',
    justifyContent: 'space-between',
    
  },

  chart: {
        minWidth: '500px',
        width: '100%',
  },

  ufeaturedlist: {
    listStyle: 'none',
    display: 'inline',
  },

  featuredlist: {
    listStyle: 'none',
    display: 'inline',
  },
  formControl: {
    margin: theme.spacing(1),
    minWidth: 120,
  },
  userOptions: {
      marginTop: '20px',
      minHeight: '400px',
      width: '100%'
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
            <Grid container>
                <Grid item xs={12} sm={12} lg={8} >
                    <Paper className={classes.chartPaper}>
                        <div className={classes.flexRow2}>
                            <div><Button><DateRangeIcon style={{color: '#60E7C6'}}/>Your School</Button></div>
                            <div>
                                <ul className={classes.ufeaturedlist}>
                                    <li className={classes.featuredlist}><Button>New Signups</Button></li>
                                    <li className={classes.featuredlist}><Button>Revenue</Button></li>
                                    <li className={classes.featuredlist}><Button>Product Sales</Button></li>
                                    <li className={classes.featuredlist}><Button>Active Learners</Button></li>
                                    <li className={classes.featuredlist}>
                                         <FormControl variant="filled" className={classes.formControl}>
                                           
                                            <NativeSelect
                                            labelId="demo-simple-select-filled-label"
                                            id="demo-simple-select-filled"
                                            >
                                                <option value="">
                                                    None
                                                </option>
                                                <option value={'last 1 month'} selected={true}>Last 1 month</option>
                                                <option value={'last 5 months'}>Last 5 month</option>
                                                <option value={'last 1 year'}>Last 1 year</option>
                                            </NativeSelect>
                                        </FormControl>
                                    </li>
                                </ul>
                            </div>
                        </div>
                        <div className={classes.chart}>
                            <Chart className={classes.chart} height={200} data={data}>
                                <ArgumentAxis className={classes.chart}/>
                                <ValueAxis showGrid={false}/>

                                <LineSeries valueField="value" argumentField="argument" className={classes.chart} color='#60E7C6' />
                            </Chart>
                        </div>
                    </Paper>
                </Grid>
                <Grid item xs={12} sm={12} lg={4} >
                    <Paper className={classes.userOptions}>
                        <Grid container style={{paddingTop: '40px'}}>
                            <Grid item xs={6} sm={4} lg={4}>
                                <div><PersonOutlineIcon style={{color: '#60E7C6', fontSize: '50px'}}/></div>
                                <div>All users</div>
                                <div style={{fontSize: '25px', fontWeight: '600'}}>1</div>
                            </Grid>
                            <Grid item xs={6} sm={4} lg={4}>
                                <div><CachedIcon style={{color: '#60E7C6', fontSize: '50px'}}/></div>
                                <div>Conversions</div>
                                <div style={{fontSize: '25px', fontWeight: '600'}}>10%</div>
                            </Grid>
                            <Grid item xs={6} sm={4} lg={4}>
                                <div><LocalMallIcon style={{color: '#60E7C6', fontSize: '50px'}}/></div>
                                <div>30 days sale</div>
                                <div style={{fontSize: '25px', fontWeight: '600'}}>0</div>
                            </Grid>
                        </Grid>
                        <Grid container style={{paddingTop: '40px'}}>
                            <Grid item xs={6} sm={4} lg={4}>
                                <div><TimerIcon style={{color: '#60E7C6', fontSize: '50px'}}/></div>
                                <div>Avg Time</div>
                                <div style={{fontSize: '25px', fontWeight: '600'}}>0 min</div>
                            </Grid>
                            <Grid item xs={6} sm={4} lg={4}>
                                <div><ListAltIcon style={{color: '#60E7C6', fontSize: '50px'}}/></div>
                                <div>Courses</div>
                                <div style={{fontSize: '25px', fontWeight: '600'}}>0</div>
                            </Grid>
                            <Grid item xs={6} sm={4} lg={4}>
                                <div><LoyaltyIcon style={{color: '#60E7C6', fontSize: '50px'}}/></div>
                                <div>Course Categories</div>
                                <div style={{fontSize: '25px', fontWeight: '600'}}>0</div>
                            </Grid>
                        </Grid>
                    </Paper>
                </Grid>

            </Grid>
            <Grid container>
                <Grid item xs={12} sm={6} lg={3}>
                    <Paper className={classes.newUsers}>
                    </Paper>
                </Grid>
                <Grid item xs={12} sm={6} lg={3}>
                    <Paper className={classes.blogs}>
                    </Paper>
                </Grid>
                <Grid item xs={12} sm={6} lg={3}>
                    <Paper className={classes.events}>
                    </Paper>
                </Grid>
                <Grid item xs={12} sm={6} lg={3}>
                    <Paper className={classes.trialPeriod}>
                    </Paper>
                </Grid>
            </Grid>
        </div>
    );
}

export default Dashboard