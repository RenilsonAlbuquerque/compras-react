import React, {useEffect} from 'react';
import clsx from 'clsx';
import { makeStyles } from '@material-ui/core/styles';
import Container from '@material-ui/core/Container';
import Grid from '@material-ui/core/Grid';
import Paper from '@material-ui/core/Paper';


import ResultsResume from './Deposits';
import Orders from './Order';
import { Button, FormControl, InputLabel, Select, TextField } from '@material-ui/core';
import { searchChartData } from '../../analise/analise';
import { AnalisisChart } from '../../model/analisis/analisis.chart';
import Chart from './Chart';
import {
  KeyboardDatePicker, MuiPickersUtilsProvider,
} from '@material-ui/pickers';
import DateFnsUtils from '@date-io/date-fns';
import { listAllPlaces } from '../../analise/place.service';
import { listAllProfiles } from '../../analise/profile.service';
import { getLoggedUser } from '../../infra/auth';
import { ChartSearchDto } from '../../dto/graph/chart.search.dto';
import { ProfileDetailDto } from '../../dto/profile/profile.detail';


const drawerWidth = 240;
const useStyles = makeStyles((theme) => ({
    
    container: {
      paddingTop: theme.spacing(4),
      paddingBottom: theme.spacing(4),
    },
    paper: {
      padding: theme.spacing(2),
      display: 'flex',
      overflow: 'auto',
      flexDirection: 'column',
    },
    fixedHeight: {
      height: 240,
    },
  }));


export function BuysDashboard(){
    const classes = useStyles();
    const fixedHeightPaper = clsx(classes.paper, classes.fixedHeight);

    //=============Chart properties==================
  let [chartData, setChartData] = React.useState({} as AnalisisChart);
  let handleSearchChange = (month:number) => {
    
    let filterDto = {
      profileId: selectedProfile.id,
      month:selectedDate.getMonth() + 1,
      year:selectedDate.getFullYear()
    } as ChartSearchDto

    searchChartData(filterDto).then((result:any) => {
      setChartData(result);
    });
  }
  const handleDateChange = (date:any) => {
    setSelectedDate(date);

  };
  const [selectedDate, setSelectedDate] = React.useState(new Date(Date.now()));

  //=================Place properties
  const [place, setPlace] = React.useState({
    age: '',
    name: 'hai',
  });
  const [places,setPlaces] = React.useState([])

  const [profiles, setProfiles] = React.useState([]);

  const handleChange = (event:any) => {
    const name = event.target.name;
    setPlace({
      ...place,
      [name]: event.target.value,
    });
  };
  //=====================Profile Properties==============//
  const [selectedProfile, setSelectedProfile] = React.useState({} as ProfileDetailDto);

  //======================Call only once==================///
  useEffect(() => {
  
    listAllPlaces().then((result:any) => {
      //console.log(result)
      setPlaces(result);
      
      
    })
    listAllProfiles(getLoggedUser().id).then((result:any) => {
      setProfiles(result);
      if(result.length > 0){
        setSelectedProfile(result[0])
      }
    })
  },[]);

    return (
        <Container maxWidth="lg" className={classes.container}>
          <Paper style={{padding:'12px', marginBottom:'12px'}}> 
            <div className="row">
              <div className="col-sm-12 col-lg-4">
                <MuiPickersUtilsProvider utils={DateFnsUtils}>
                  <KeyboardDatePicker
                    style={{width:'100%'}}
                    format="MM/yyyy"
                    margin="normal"
                    views={["year", "month"]}
                    id="date-picker-inline"
                    label="Mês base"
                    value={selectedDate}
                    onChange={handleDateChange}
                    KeyboardButtonProps={{
                      'aria-label': 'change date',
                    }}
                  />    
    
                  </MuiPickersUtilsProvider>
              </div>
              <div className="col-sm-12 col-lg-4">
                <InputLabel htmlFor="age-native-simple">Mercado</InputLabel>
                <Select
                    style={{width:'100%'}}
                    native
                    value={place.age}
                    onChange={handleChange}
                    inputProps={{
                      name: 'age',
                      id: 'age-native-simple',
                    }}
                  >
                   

                    {places? (places.map((row:any) => (
                      <option key={row.id} value={row.id}>{row.nome}</option>
                      )))
                      : <></>}
                  </Select>
              </div>
              <div className="col-sm-12 col-lg-4">
                <InputLabel htmlFor="age-native-simple">Perfil</InputLabel>
                <Select
                    style={{width:'100%'}}
                    native
                    value={place.age}
                    onChange={handleChange}
                    inputProps={{
                      name: 'age',
                      id: 'age-native-simple',
                    }}
                  >
                   

                    {(profiles && profiles.length > 0 )?  (profiles.map((row:any) => (
                      <option  key={row.id} value={row.id}>{row.nome}</option>
                      )))
                      : <></>}
                  </Select>
              </div>
        
            </div>
            <div style={{display:'flex',alignSelf:'center', padding:'0.5em'}}>
              <Button variant="contained" color="primary" onClick={() => handleSearchChange(selectedDate.getMonth() +1)}>
                Pesquisar
              </Button>
            </div>
          </Paper>
                
       
    
          <Grid container spacing={3}>
            {/* Chart */}
            <Grid item xs={12} md={8} lg={9}>
              <Paper className={fixedHeightPaper}>
                <Chart props={chartData.chartList} />
              </Paper>
            </Grid>
            {/* Recent Deposits */}
            <Grid item xs={12} md={4} lg={3}>
              <Paper className={fixedHeightPaper}>
                <ResultsResume props={chartData.total} />
              </Paper>
            </Grid>
            {/* Recent Orders */}
            <Grid item xs={12}>
              <Paper className={classes.paper}>
                <Orders props={chartData.buyList} />
              </Paper>
            </Grid>
          </Grid>
          {/* <Box pt={4}>
            <Copyright />
          </Box> */}
        </Container>
    )
}