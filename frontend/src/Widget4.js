import React, { PureComponent } from 'react';
import { Radar, RadarChart, PolarGrid, PolarAngleAxis, PolarRadiusAxis, } from 'recharts';
import { ResponsiveContainer }  from 'recharts';
import './App.css';

const data = 
[
    {
      subject: 'Santé', A: 120, B: 110, fullMark: 150,
    },
    {
      subject: 'Sport', A: 98, B: 130, fullMark: 150,
    },
    {
      subject: 'Domotique', A: 86, B: 130, fullMark: 150,
    },
    {
      subject: 'Loisirs', A: 99, B: 100, fullMark: 150,
    },
    {
      subject: 'Mobilité', A: 85, B: 90, fullMark: 150,
    },
    {
      subject: 'Musique', A: 65, B: 85, fullMark: 150,
    },
  ];

class Widget4 extends PureComponent
{
    render() {
        return(
            <div style={{ width: '100%', height: 250 }}>
        <h4>
        Domaines d'utilisation des objets connectés
        </h4>
                <ResponsiveContainer>
                    <RadarChart cx={175} cy={100} outerRadius={70} width={50} height={50} data={data}>
                        <PolarGrid />
                        <PolarAngleAxis dataKey="subject" />
                        <PolarRadiusAxis />
                        <Radar name="Mike" dataKey="A" stroke="#8884d8" fill="#8884d8" fillOpacity={0.6} />
                    </RadarChart>
                </ResponsiveContainer>
            </div>)
    }
}
export default Widget4