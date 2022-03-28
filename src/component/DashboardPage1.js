import React from 'react';
import './App2.css';
import {
    PieChart,
    Pie,
    Tooltip,
    BarChart,
    XAxis,
    YAxis,
    Legend,
    CartesianGrid,
    Bar,
  } from "recharts";
function DashboardPage1 (){
    const data = [
        { name: "Meet", upload: 20 },
        { name: "Muskan", upload: 15},
        { name: "Monika", upload: 10},
        { name: "Manasvi", upload: 50},
      ];
    return (
    <div style={{ textAlign: "center"}}>
      <h1>Songs Uploaded </h1>
      <div className="App2">
        <PieChart width={400} height={400}>
          <Pie
            dataKey="upload"
            isAnimationActive={false}
            data={data}
            cx={200}
            cy={200}
            outerRadius={80}
            fill="#8884d8"
            label
          />
          <Tooltip />
        </PieChart>
        <BarChart
          width={500}
          height={300}
          data={data}
          margin={{
            top: 5,
            right: 30,
            left: 80,
            bottom: 5,
          }}
          barSize={20}
        >
          <XAxis
            dataKey="name"
            scale="point"
            padding={{ left: 10, right: 10 }}
          />
          <YAxis />
          <Tooltip />
          <Legend />
          <CartesianGrid strokeDasharray="3 3" />
          <Bar dataKey="upload" fill="#8884d8" background={{ fill: "#eee" }} />
        </BarChart>
      </div>
    </div>
  );
}
export default DashboardPage1;