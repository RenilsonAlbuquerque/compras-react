import React, { useState } from 'react';
import { useTheme } from '@material-ui/core/styles';
import { LineChart, Line, XAxis, YAxis, Label, ResponsiveContainer ,Tooltip,CartesianGrid, Area, AreaChart} from 'recharts';
import Title from './BaseTitle';
import { mapApiResultToMonthChart } from '../../utils/chart.helper';



const chart = ({props}: any) => {
  //const theme = useTheme();

  
  //console.log(props)
  let calculateTitle = () => {
    
    if(props && props.lenght > 0){
      let result = new Date(props[0].dateTime);
      return `${result.getUTCMonth()}/${result.getUTCFullYear()}`;
    }else{
      return 'gráfico'
    }
    
  } 
  
  return (
    <React.Fragment>
     
      <Title>Valores mensais</Title>
      <ResponsiveContainer>
        
        <AreaChart
          data={props ? mapApiResultToMonthChart(props):[]}
          margin={{
            top: 16,
            right: 16,
            bottom: 0,
            left: 24,
          }}
        >
          <CartesianGrid stroke="#ccc" strokeDasharray="5 5" />
          <XAxis dataKey="dateTime" stroke='blue' />
          <YAxis stroke='red'>
            <Label
              angle={270}
              position="left"
              style={{ textAnchor: 'middle', fill: 'blue' }}
            >
              Valor (R$)
            </Label>
          </YAxis>
          <Tooltip />
          {/* <Line type="monotone" dataKey="amount" stroke='red' dot={true} /> */}
          <Area type="monotone" dataKey="amount" stroke="#8884d8" fill="#8884d8" dot={false} />
        </AreaChart>
      </ResponsiveContainer>
    </React.Fragment>
  );
}
export default chart
