import React from "react";
import {BarChart,Bar,XAxis,YAxis,CartesianGrid,Tooltip,Legend} from "recharts";

const data = [
  {name: 'text1', IA: 4000, EA: 2400, AM: 2400},
  {name: "text1", IA: 3000, EA: 1398, AM: 2210},
  {name: "text1", IA: 2000, EA: 9800, AM: 2290},
  {name: "text1", IA: 2780, EA: 3908, AM: 2000}
];

export default function Chart() {
  return (
    <BarChart width={500} height={300}
      data={data}
      margin={{top: 5, right: 30, left: 20, bottom: 5}}
    >
      <CartesianGrid strokeDasharray="3 3" />
      <XAxis dataKey="name" />
      <YAxis />
      <Tooltip />
      <Legend />
      <Bar dataKey="IA" fill="#77c987" />
      <Bar dataKey="EA" fill="#ff716e" />
    </BarChart>
  );
}
