import React from 'react';
import { PieChart, Pie, Cell, Tooltip } from 'recharts';
import Stack from '@mui/material/Stack';

const data = [
  { name: 'Group A', value: 60 },
  { name: 'Group B', value: 20 },
  { name: 'Group C', value: 20 },
];

const COLORS = ['#FFCC91', '#5570F1', '#97A5EB'];

export default function CustomChart() {
  return (
    <Stack direction="row">
      <PieChart width={200} height={200}>
        <Pie
          data={data}
          cx={100}
          cy={100}
          innerRadius={60}
          outerRadius={80}
          fill="#8884d8"
          paddingAngle={0}
          dataKey="value"
        >
          {data.map((entry, index) => (
            <Cell key={`cell-${index}`} fill={COLORS[index % COLORS.length]} />
          ))}
        </Pie>
        <Tooltip />
      </PieChart>
    </Stack>
  );
}
