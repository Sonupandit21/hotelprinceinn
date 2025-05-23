
import React from "react";
import { BarChart, Bar, XAxis, YAxis, Tooltip, ResponsiveContainer } from "recharts";

const data = [
  { day: "M", sales: 50, revenue: 20 },
  { day: "T", sales: 60, revenue: 25 },
  { day: "W", sales: 45, revenue: 20 },
  { day: "T", sales: 65, revenue: 15 },
  { day: "F", sales: 30, revenue: 10 },
  { day: "S", sales: 60, revenue: 15 },
  { day: "S", sales: 70, revenue: 20 },
];

const ProfitChart = () => (
  <div className="bg-white rounded-2xl shadow p-4">
    <div className="flex justify-between mb-2">
      <h2 className="font-semibold">Profit this week</h2>
      <select className="text-sm border rounded px-2 py-1">
        <option>This Week</option>
        <option>Last Week</option>
      </select>
    </div>
    <ResponsiveContainer width="100%" height={200}>
      <BarChart data={data}>
        <XAxis dataKey="day" />
        <YAxis />
        <Tooltip />
        <Bar dataKey="sales" fill="#6366f1" />
        <Bar dataKey="revenue" fill="#06b6d4" />
      </BarChart>
    </ResponsiveContainer>
  </div>
);

export default ProfitChart;