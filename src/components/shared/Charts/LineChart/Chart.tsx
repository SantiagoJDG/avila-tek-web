'use client'

import { LineChart, Line, XAxis, YAxis, CartesianGrid, Tooltip, Legend, ResponsiveContainer } from 'recharts';
import { ChartData } from './types';

const chartData: ChartData[] = [
  {
    name: 'Enero',
    uv: 4000,
    pv: 2400,
    amt: 2400,
  },
  {
    name: 'Febrero',
    uv: 3000,
    pv: 1398,
    amt: 2210,
  },
  {
    name: 'Marzo',
    uv: 2000,
    pv: 9800,
    amt: 2290,
  },
  {
    name: 'Abril',
    uv: 2780,
    pv: 3908,
    amt: 2000,
  },
  {
    name: 'Mayo',
    uv: 1890,
    pv: 4800,
    amt: 2181,
  },
  {
    name: 'Junio',
    uv: 2390,
    pv: 3800,
    amt: 2500,
  },
  {
    name: 'Julio',
    uv: 3490,
    pv: 4300,
    amt: 2100,
  },
];
export const Chart = () => {

  return (
    <div style={{ width: '100%', height: 300 }}>
      <ResponsiveContainer width="100%" height="100%">
        <LineChart data={chartData}>
          <CartesianGrid strokeDasharray="3 3" />
          <XAxis dataKey="name" />
          <YAxis />
          <Tooltip />
          <Legend />
          <Line type="monotone" dataKey="pv" stroke="#8884d8" strokeWidth={2} />
        </LineChart>
      </ResponsiveContainer>
    </div>
    );
    
} 