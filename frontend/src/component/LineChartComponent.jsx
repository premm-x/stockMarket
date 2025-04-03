import React from "react";
import {
  LineChart,
  Line,
  XAxis,
  YAxis,
  Tooltip,
  ResponsiveContainer,
  CartesianGrid,
} from "recharts";

const data = [
  { date: "Apr 4", visitors: 100 },
  { date: "Apr 9", visitors: 200 },
  { date: "Apr 14", visitors: 150 },
  { date: "Apr 20", visitors: 220 },
  { date: "Apr 26", visitors: 180 },
  { date: "May 2", visitors: 250 },
  { date: "May 8", visitors: 190 },
  { date: "May 14", visitors: 280 },
  { date: "May 20", visitors: 170 },
  { date: "May 26", visitors: 260 },
  { date: "Jun 1", visitors: 210 },
  { date: "Jun 6", visitors: 300 },
  { date: "Jun 11", visitors: 250 },
  { date: "Jun 17", visitors: 290 },
  { date: "Jun 23", visitors: 230 },
  { date: "Jun 30", visitors: 310 },
];

const LineChartComponent = () => {
  return (
    <div className="p-6 bg-white text-black rounded-lg shadow-lg">
      <h2 className="text-lg font-semibold">Line Chart - Interactive</h2>
      <p className="text-sm text-gray-400">Showing total visitors for the last 3 months</p>

      {/* Stats */}
      <div className="flex gap-6 my-4">
        <div className="bg-gray-100 p-4 rounded-md">
          <p className="text-gray-400 text-sm">Desktop</p>
          <p className="text-2xl font-bold">24,828</p>
        </div>
        <div className="bg-gray-100 p-4 rounded-md">
          <p className="text-gray-400 text-sm">Mobile</p>
          <p className="text-2xl font-bold">25,010</p>
        </div>
      </div>

      {/* Chart */}
      <ResponsiveContainer width="100%" height={300}>
        <LineChart data={data}>
          <XAxis dataKey="date" stroke="gray" />
          <YAxis stroke="gray" />
          <Tooltip />
          <CartesianGrid strokeDasharray="3 3" stroke="gray" />
          <Line type="monotone" dataKey="visitors" stroke="#4f46e5" strokeWidth={2} />
        </LineChart>
      </ResponsiveContainer>
    </div>
  );
};

export default LineChartComponent;
