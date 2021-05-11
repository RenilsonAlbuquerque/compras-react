import React, { useState } from 'react';
import { useTheme } from '@material-ui/core/styles';
import { LineChart, Line, XAxis, YAxis, Label, ResponsiveContainer ,Tooltip,CartesianGrid, AreaChart, Area} from 'recharts';
import Title from '../dashboard/BaseTitle';
import { mapApiResultToMonthChart } from '../../utils/chart.helper';



const productTimelineChart = ({props}: any) => {

  
  
  return (
    <React.Fragment>
     
      <Title>Últimas compras</Title>
      <ResponsiveContainer height={300} >
         <AreaChart
          height={300}
          data={props}
          margin={{
            top: 16,
            right: 16,
            bottom: 0,
            left: 24,
          }}
        >
          <CartesianGrid strokeDasharray="3 3" />
          <XAxis dataKey="buyData" />
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
          <Area type="monotone" dataKey="value" label="valor" stroke="#8884d8" fill="#8884d8" dot={true}  />
        </AreaChart>
      </ResponsiveContainer>
    </React.Fragment>
  );
}
export default productTimelineChart
