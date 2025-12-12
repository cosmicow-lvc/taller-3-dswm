"use client";

import { BarChart, Bar, XAxis, YAxis, Tooltip, ResponsiveContainer } from "recharts";
import Card from "@/components/ui/card";

const data = [
  { name: "Ene", value: 120 },
  { name: "Feb", value: 80 },
  { name: "Mar", value: 140 },
  { name: "Abr", value: 100 },
];

export default function BarChartCard() {
  return (
    <Card>
      <h3 className="text-lg font-semibold mb-3">Ventas Mensuales</h3>

      <div className="h-64">
        <ResponsiveContainer width="100%" height="100%">
          <BarChart data={data}>
            <XAxis dataKey="name" />
            <YAxis />
            <Tooltip />
            <Bar dataKey="value" fill="#4F46E5" />
          </BarChart>
        </ResponsiveContainer>
      </div>
    </Card>
  );
}
