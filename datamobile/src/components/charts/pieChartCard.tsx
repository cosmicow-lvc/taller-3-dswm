"use client";

import { PieChart, Pie, Tooltip, ResponsiveContainer } from "recharts";
import Card from "@/components/ui/card";

const data = [
  { name: "A", value: 40 },
  { name: "B", value: 30 },
  { name: "C", value: 20 },
  { name: "D", value: 10 },
];

export default function PieChartCard() {
  return (
    <Card>
      <h3 className="text-lg font-semibold mb-3">Distribución</h3>

      <div className="h-64">
        <ResponsiveContainer width="100%" height="100%">
          <PieChart>
            <Pie data={data} dataKey="value" nameKey="name" fill="#F59E0B" label />
            <Tooltip />
          </PieChart>
        </ResponsiveContainer>
      </div>
    </Card>
  );
}
