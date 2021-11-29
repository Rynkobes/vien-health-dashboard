import React from 'react'
import { AreaChart, Area, XAxis, YAxis,  Tooltip,  ResponsiveContainer } from 'recharts';

const data = [
  {
    name: 'Mon',
    uv: 4000,
  },
  {
    name: 'Tue',
    uv: 3000,
  },
  {
    name: 'Wed',
    uv: 2000,
  },
  {
    name: 'Thu',
    uv: 2780,
  },
  {
    name: 'Fri',
    uv: 1890,
  },
  {
    name: 'Sat',
    uv: 8000
  },
  {
    name: 'Sun',
    uv: 5000,
  },
]


type LineGraphProps = {
  graphColor: string
  graphFill: string
}

const LineGraphData = (props: LineGraphProps) => {

  const { graphColor, graphFill } = props
  return (
    <ResponsiveContainer width="100%" height="70%">
        <AreaChart
          width={300}
          height={300}
          data={data}
          margin={{
            top: 5,
            left: 20,
          }}
        >
          
          <XAxis dataKey="name" />
          {/* <YAxis yAxisId="left" /> */}
          <YAxis yAxisId="right" orientation="right" />
          <Tooltip />
          <Area yAxisId="right" type="linear" dataKey="uv" stroke={graphColor} fill={graphFill} />
        </AreaChart>
      </ResponsiveContainer>
  )
}

export default LineGraphData
