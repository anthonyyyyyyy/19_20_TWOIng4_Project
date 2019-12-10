import React, { PureComponent } from 'react';
import { BarChart, Bar, Cell, XAxis, YAxis, CartesianGrid, Tooltip, Legend, } from 'recharts';
import { ResponsiveContainer }  from 'recharts';
import './App.css';
import axios from 'axios';

class Widget1 extends PureComponent 
{
  constructor(props) 
  {
    super(props);
    
    this.state = {
      pays: '',
      pers: '',
      hsize: '',
    }
  }

  componentDidMount(){
        
    axios.get('http://localhost:3000/users/getUser')
    .then (res => {
        console.log(res);
        this.setState({ pays : res.data.location,
                        pers : res.data.personsInHouse,
                        hsize : res.data.houseSize,
                    })
    })
  }

    render() {
      const data = 
    [
    {
      name: this.state.pays, uv: 3100, pv: 2400, amt: 2400,
    },
    {
      name: 'Page B', uv: 3000, pv: 1398, amt: 2210,
    },
    {
      name: 'Page C', uv: 2000, pv: 9800, amt: 2290,
    },
    {
      name: 'Page D', uv: 2780, pv: 3908, amt: 2000,
    },
    ];

        return (
      <div style={{ width: '100%', height: 250 }}>
        <h4>
          BarChart
        </h4>
        <ResponsiveContainer>
          <BarChart
            width={50}
            height={50}
            data={data}
            margin={{
              top: 20, right: 20, left: 20, bottom: 5,
            }}
          >
            <CartesianGrid strokeDasharray="3 3" />
            <XAxis dataKey="name" />
            <YAxis />
            <Tooltip />
            <Legend />
            <Bar dataKey="pv" stackId="a" fill="#8884d8" />
            <Bar dataKey="uv" stackId="a" fill="#82ca9d" />
          </BarChart>
        </ResponsiveContainer>
      </div>
        );
      }
}
export default Widget1;