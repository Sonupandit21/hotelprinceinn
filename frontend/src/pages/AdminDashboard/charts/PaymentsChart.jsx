import React from "react";
import { LineChart, Line, XAxis, YAxis, Tooltip, ResponsiveContainer } from "recharts";

const data = [
  { month: "Sep", received: 10, due: 15 },
  { month: "Oct", received: 25, due: 20 },
  { month: "Nov", received: 40, due: 30 },
  { month: "Dec", received: 45, due: 35 },
  { month: "Jan", received: 30, due: 25 },
  { month: "Feb", received: 60, due: 50 },
  { month: "Mar", received: 70, due: 55 },
  { month: "Apr", received: 65, due: 60 },
  { month: "May", received: 80, due: 70 },
  { month: "Jun", received: 75, due: 65 },
  { month: "Jul", received: 60, due: 70 },
  { month: "Aug", received: 70, due: 60 },
];

const PaymentsChart = () => (
  <div className="bg-white rounded-2xl shadow p-4">
    <div className="flex justify-between mb-2">
      <h2 className="font-semibold">Payments Overview</h2>
      <select className="text-sm border rounded px-2 py-1">
        <option>Monthly</option>
        <option>Weekly</option>
        <option>Yearly</option>
      </select>
    </div>
    <ResponsiveContainer width="100%" height={200}>
      <LineChart data={data}>
        <XAxis dataKey="month" />
        <YAxis />
        <Tooltip />
        <Line type="monotone" dataKey="received" stroke="#6366f1" />
        <Line type="monotone" dataKey="due" stroke="#06b6d4" />
      </LineChart>
    </ResponsiveContainer>
    <div className="flex justify-between text-sm pt-2">
      <span><strong>Received:</strong> $45,070.00</span>
      <span><strong>Due:</strong> $32,400.00</span>
    </div>
  </div>
);

export default PaymentsChart;