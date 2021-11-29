import React from 'react'
import {Flex} from '@chakra-ui/react'
import { BarChart, Bar, ResponsiveContainer } from 'recharts';

const BarChartComponent = () => {

  return (
      <ResponsiveContainer height='100%'>
      <BarChart
        margin={{
          top:0,
          bottom: 0
        }}
        data={data}
      >
        <Bar dataKey='uv' fill="#FF8433" />
      </BarChart>
      </ResponsiveContainer>
  )
}

export default BarChartComponent

const data = [
  {
    uv: 40
  },
  {
    uv: 30
  },
  {
    uv: 20,
  },
  {
    uv: 27
  },
  {
    uv: 18
  },
  {
    uv: 34
  },
];


