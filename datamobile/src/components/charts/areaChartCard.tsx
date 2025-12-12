"use client";

import { AreaChart, Area, XAxis, YAxis, Tooltip, ResponsiveContainer } from "recharts";
import Card from "@/components/ui/card";

const data = [
  { name: "Q1", value: 300 },
  { name: "Q2", value: 450 },
  { name: "Q3", value: 380 },
  { name: "Q4", value: 500 },
];

export default function AreaChartCard() {
  return (
    <Card>
      <h3 className="text-lg font-semibold mb-3">Ingresos Trimestrales</h3>

      <div className="h-64">
        <ResponsiveContainer width="100%" height="100%">
          <AreaChart data={data}>
            <XAxis dataKey="name" />
            <YAxis />
            <Tooltip />
            <Area type="monotone" dataKey="value" fill="#3B82F6" stroke="#2563EB" />
          </AreaChart>
        </ResponsiveContainer>
      </div>
    </Card>
  );
}
