import React from 'react'
import { duration, makeStyles } from '@material-ui/core/styles';
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
import Chip from '@material-ui/core/Chip';
import TimelineIcon from '@material-ui/icons/Timeline';
import VpnKeySharpIcon from '@material-ui/icons/VpnKeySharp';
import SentimentSatisfiedSharpIcon from '@material-ui/icons/SentimentSatisfiedSharp';
import TextField from '@material-ui/core/TextField';
import Dialog from '@material-ui/core/Dialog';
import DialogActions from '@material-ui/core/DialogActions';
import DialogContent from '@material-ui/core/DialogContent';
import DialogContentText from '@material-ui/core/DialogContentText';
import DialogTitle from '@material-ui/core/DialogTitle';
import Slider from '@material-ui/core/Slider';
import Typography from '@material-ui/core/Typography';
import {
    ArgumentAxis,
    ValueAxis,
    Chart,
    LineSeries,
  } from '@devexpress/dx-react-chart-material-ui';
  import {Chart as PieChart}   from "react-google-charts";
  
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
    fontWeight: 300
  },
  formControl: {
    margin: theme.spacing(1),
    minWidth: 120,
  },
  userOptions: {
      marginTop: '20px',
      minHeight: '400px',
      width: '100%'
  },
  
  newUsers: {
      marginTop: '20px',
      display: 'flex',
      flexDirection: 'column'   
  },

  blogs: {
    marginTop: '20px',
    display: 'flex',
    flexDirection: 'column'  
  },

  events: {
    marginTop: '20px',
    display: 'flex',
    flexDirection: 'column'    
  },

  modal: {
    display: 'flex',
    alignItems: 'center',
    justifyContent: 'center',
  },

  paper: {
    backgroundColor: theme.palette.background.paper,
    border: '2px solid #000',
    boxShadow: theme.shadows[5],
    padding: theme.spacing(2, 4, 3),
  },


}));

function Dashboard (props){

    const classes = useStyles();

    const [open, setOpen] = React.useState(false);
    const [people, setPeople] = React.useState(0)
    const [email, setEmail] = React.useState('')
    const [duration, setDuration] = React.useState(0)
    var [price, setPrice] = React.useState(0)

  const handleClickOpen = () => {
    setOpen(true);
  };

  const handleClose = () => {
    setOpen(false);
  };

  const addPeople = () => {
      setPeople(people+1)
      setEmail('')
      handleClose()
  }

  

  price = 5*duration + 10*people + 500

  
  
  const valuetext = (value) => {
    return `${value} min`;
  }

  
    
    return (
        <div style={{backgroundColor: '#F5F5F5'}}>
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
            <Grid container spacing={2}>
                <Grid item xs={12} sm={6} lg={3}>
                    <Paper className={classes.newUsers}>
                        <div style={{justifyContent: 'start', marginTop: '10px',marginLeft: '10px', display: 'flex'}}>
                            <PersonOutlineIcon style={{color: '#60E7C6'}} />
                            <span style={{ justifyContent: 'center'}}>New Users</span>
                            <Chip label="See all" component="a" href="#" size='small' clickable style={{ backgroundColor: '#60E7C6', color: '#ffffff', marginLeft: '10px'}} />
                        </div>
                        <div style={{justifyContent: 'start', marginTop: '10px',marginLeft: '10px', display: 'flex'}}>
                            <div><SentimentSatisfiedSharpIcon style={{fontSize:"40px"}}/></div>
                            <div>
                                <div>HubX</div>
                                <div> 24 min</div>
                            </div>
                        </div>
                    </Paper>
                </Grid>
                <Grid item xs={12} sm={6} lg={3}>
                    <Paper className={classes.blogs}>
                        <div style={{justifyContent: 'start', marginTop: '10px',marginLeft: '10px', display: 'flex'}}>
                            <ListAltIcon  />
                            <span style={{ justifyContent: 'center'}}>How to sell courses blogs</span>
                            <Chip label="See all" component="a" href="#" size='small' clickable style={{ backgroundColor: '#60E7C6', color: '#ffffff', marginLeft: '10px'}} />
                        </div>
                        <ul style={{justifyContent: 'start', marginTop: '10px',marginLeft: '10px', display: 'flex', flexDirection: 'column'}}>
                            <li style={{display: 'flex', flexDirection: 'row', justifyContent: 'space-between', marginBottom: '10px', marginRight: '10px'}}>
                                <div style={{width: '70%', color: '#60E7C6', cursor: 'pointer'}}>Blended Learning: Why it matters and how to apply</div>
                                <div>7 days ago</div>
                            </li>
                            <li style={{display: 'flex', flexDirection: 'row', justifyContent: 'space-between', marginBottom: '10px', marginRight: '10px'}}>
                                <div style={{width: '70%', color: '#60E7C6', cursor: 'pointer'}}>Blended Learning: Why it matters and how to apply</div>
                                <div>7 days ago</div>
                            </li>
                            <li style={{display: 'flex', flexDirection: 'row', justifyContent: 'space-between', marginBottom: '10px', marginRight: '10px'}}>
                                <div style={{width: '70%', color: '#60E7C6', cursor: 'pointer'}}>Blended Learning: Why it matters and how to apply</div>
                                <div>7 days ago</div>
                            </li>
                        </ul>
                    </Paper>
                </Grid>
                <Grid item xs={12} sm={6} lg={3}>
                    <Paper className={classes.events}>
                        <div style={{justifyContent: 'start', marginTop: '10px',marginLeft: '10px', display: 'flex'}}>
                            <TimelineIcon  />
                            <span style={{ justifyContent: 'center'}}>Events Logs</span>
                            <Chip label="See all" component="a" href="#" size='small' clickable style={{ backgroundColor: '#60E7C6', color: '#ffffff', marginLeft: '10px'}} />
                        </div>
                        <ul style={{justifyContent: 'start', marginTop: '10px',marginLeft: '10px', display: 'flex', flexDirection: 'column'}}>
                            <li style={{display: 'flex', flexDirection: 'row', justifyContent: 'space-between', marginBottom: '10px', marginRight: '10px'}}>
                                <div style={{display: 'flex', flexDirection: 'row',width: '70%', cursor: 'pointer'}}>
                                    <div><VpnKeySharpIcon /></div>
                                    <div>
                                            <div style={{color: '#60E7C6'}}>HubX</div>
                                            <div>Logged in</div>
                                            <div style={{color: '#60E7C6'}}>more info</div>
                                    </div>
                                </div>
                                <div>20 min</div>
                            </li>
                           
                        </ul>
                    </Paper>
                </Grid>
                <Grid item xs={12} sm={6} lg={3}>
                    <Paper className={classes.trialPeriod}>
                    </Paper>
                </Grid>
            </Grid>
            <Button variant='contained' style={{marginTop: '20px', backgroundColor: '#60E7C6'}} onClick={handleClickOpen}>Invite</Button>
            <Dialog open={open} onClose={handleClose} aria-labelledby="form-dialog-title">
                <DialogTitle id="form-dialog-title">No. of People: {people}</DialogTitle>
                <DialogContent>
                <DialogContentText>
                    You can add the email of the person to invite amd then click add to event
                </DialogContentText>
                <TextField
                    autoFocus
                    margin="dense"
                    id="email"
                    label="Email Address"
                    type="email"
                    value={email}
                    onChange={(e) => setEmail(e.target.value)}
                />
                <br />
                <Typography id="discrete-slider-always" gutterBottom>
                    Duration of Event (min)
                </Typography>
                <Slider
                    defaultValue={30}
                    getAriaValueText={valuetext}
                    aria-labelledby="discrete-slider-always"
                    step={10}
                    value={duration}
                    onChange={(event,value) => setDuration(value)}
                    valueLabelDisplay="on"
                    />
                <PieChart
                    width={'500px'}
                    height={'300px'}
                    chartType="PieChart"
                    loader={<div>Loading Chart</div>}
                    data={[
                        ['Task', 'Hours per Day'],
                        ['No. of People', people*10],
                        ['Duration of Event', duration*5],
                        ['Price', price],
                        
                    ]}
                    options={{
                        title: 'The Price Calculator',
                        // Just add this option
                        slices: {
                            0: { color: '#44475b' },
                            1: { color: '#5367ff' },
                            2: {color: '#00d09c'}
                          },
                        pieHole: 0.4,
                    }}
                   
                    />
                </DialogContent>
                <DialogActions>
                <Button onClick={handleClose} color="primary">
                    Cancel
                </Button>
                <Button onClick={addPeople} color="primary" disabled={email=="" ? true : false} >
                    Add to event
                </Button>
                </DialogActions>
            </Dialog>
        </div>
    );
}

export default Dashboard