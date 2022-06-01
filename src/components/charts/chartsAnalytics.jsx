import "./charts.css"
import { LineChart, Line, XAxis, YAxis, CartesianGrid, Tooltip, Legend, ResponsiveContainer, AreaChart, Area } from 'recharts';
import { curveCardinal } from 'd3-shape';


export default function Charts({ title, data, dataKey, grid }) {
  const dataSet1 = [{ name: 'Page A', uv: 4000, pv: 2400, amt: 2400, }, { name: 'Page B', uv: 3000, pv: 1398, amt: 2210, }, { name: 'Page C', uv: 2000, pv: 9800, amt: 2290, }, { name: 'Page D', uv: 2780, pv: 3908, amt: 2000, }, { name: 'Page E', uv: 1890, pv: 4800, amt: 2181, }, { name: 'Page F', uv: 2390, pv: 3800, amt: 2500, }, { name: 'Page G', uv: 3490, pv: 4300, amt: 2100, },];
  const dataSet2 = [{ name: 'Jan', uv: 4000, pv: 2400, amt: 2400, }, { name: 'Feb', uv: 3000, pv: 1398, amt: 2210, }, { name: 'Mar', uv: 2000, pv: 9800, amt: 2290, }, { name: 'Apr', uv: 2780, pv: 3908, amt: 2000, }, { name: 'May', uv: 1890, pv: 4800, amt: 2181, }, { name: 'Jun', uv: 2390, pv: 3800, amt: 2500, }, { name: 'Jul', uv: 3490, pv: 4300, amt: 2100, },];

  const cardinal = curveCardinal.tension(0.2);

  return (
    <div className="charts">
      <h3 className="chartTitle">User Analytics</h3>
      <ResponsiveContainer width="100%" aspect={4 / 1} >
        <LineChart
          width={500}
          height={800}
          data={dataSet1}
          margin={{
            top: 5,
            right: 30,
            left: 20,
            bottom: 5,
          }}
        >
          <CartesianGrid strokeDasharray="3 3" />
          <XAxis dataKey="name" />
          <YAxis />
          <Tooltip />
          <Legend />
          <Line type="monotone" dataKey="pv" stroke="#8884d8" activeDot={{ r: 8 }} />
          <Line type="monotone" dataKey="uv" stroke="#82ca9d" />
        </LineChart>
      </ResponsiveContainer>




      <h3 className="chartTitle">Active Users</h3>
      <ResponsiveContainer width="100%" aspect={4 / 1} >
        <AreaChart
          width={500}
          height={400}
          data={dataSet2}
          margin={{
            top: 10,
            right: 30,
            left: 0,
            bottom: 0,
          }}
        >
          <CartesianGrid strokeDasharray="3 3" />
          <XAxis dataKey="name" />
          <YAxis />
          <Tooltip />
          <Area type="monotone" dataKey="uv" stroke="#8884d8" fill="#3e74fa" fillOpacity={0.3} />
          <Area type={cardinal} dataKey="uv" stroke="#82ca9d" fill="#6be9f2" fillOpacity={0.3} />
        </AreaChart>

      </ResponsiveContainer>
    </div>
  )
}
