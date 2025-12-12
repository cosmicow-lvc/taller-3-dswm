"use client";

import { LineChart, Line, XAxis, YAxis, Tooltip, ResponsiveContainer } from "recharts";
import Card from "@/components/ui/card";

const data = [
  { name: "Lun", value: 20 },
  { name: "Mar", value: 35 },
  { name: "Mié", value: 25 },
  { name: "Jue", value: 45 },
  { name: "Vie", value: 50 },
];

export default function LineChartCard() {
  return (
    <Card>
      <h3 className="text-lg font-semibold mb-3">Actividad Semanal</h3>

      <div className="h-64">
        <ResponsiveContainer width="100%" height="100%">
          <LineChart data={data}>
            <XAxis dataKey="name" />
            <YAxis />
            <Tooltip />
            <Line type="monotone" dataKey="value" stroke="#10B981" strokeWidth={3} />
          </LineChart>
        </ResponsiveContainer>
      </div>
    </Card>
  );
}
