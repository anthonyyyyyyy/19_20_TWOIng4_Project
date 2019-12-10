import { PieChart, Pie, Sector, Cell, } from 'recharts';
import React, { PureComponent } from 'react';
import { ResponsiveContainer }  from 'recharts';
import './App.css';
import axios from 'axios';

class Widget3 extends PureComponent
{
  render() {
    
    const data = 
[
  { name: 'Small', value: 400 },
  { name: 'Medium', value: 300 },
  { name: 'Big', value: 300 },
];

const COLORS = ['#0088FE', '#00C49F', '#FFBB28', '#FF8042'];

const RADIAN = Math.PI / 180;
const renderCustomizedLabel = ({
  cx, cy, midAngle, innerRadius, outerRadius, percent, index,
}) => 
{
  const radius = innerRadius + (outerRadius - innerRadius) * 0.5;
  const x = cx + radius * Math.cos(-midAngle * RADIAN);
  const y = cy + radius * Math.sin(-midAngle * RADIAN);

  return (
    <text x={x} y={y} fill="white" textAnchor={x > cx ? 'start' : 'end'} dominantBaseline="central">
      {`${(percent * 100).toFixed(0)}%`}
    </text> );
};

    return (
      <div style={{ width: '100%', height: 300 }}>
        <h4>
        PieChart
        </h4>
      <ResponsiveContainer>
      <PieChart>  
        <Pie
          width={400} height={400}
          data={data}
          cx={125}
          cy={100}
          labelLine={false}
          label={renderCustomizedLabel}
          outerRadius={80}y

          fill="#8884d8"
          dataKey="value"
        >
          {
            data.map((entry, index) => <Cell key={`cell-${index}`} fill={COLORS[index % COLORS.length]} />)
          }
        </Pie>
      </PieChart>
      </ResponsiveContainer>
      </div>
    );
  }
}
export default Widget3;