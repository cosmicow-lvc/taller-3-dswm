"use client";

import {
  RadarChart,
  PolarGrid,
  PolarAngleAxis,
  Radar,
  ResponsiveContainer,
  Tooltip,
} from "recharts";

import Card from "@/components/ui/card";

const data = [
  { name: "UX", value: 70 },
  { name: "UI", value: 85 },
  { name: "Datos", value: 90 },
  { name: "API", value: 65 },
  { name: "Seguridad", value: 75 },
];

export default function RadarChartCard() {
  return (
    <Card>
      <h3 className="text-lg font-semibold mb-3">Evaluación por Área</h3>

      <div className="h-64">
        <ResponsiveContainer width="100%" height="100%">
          <RadarChart data={data}>
            <PolarGrid />
            <PolarAngleAxis dataKey="name" />
            <Radar dataKey="value" stroke="#EC4899" fill="#EC4899" fillOpacity={0.6} />
            <Tooltip />
          </RadarChart>
        </ResponsiveContainer>
      </div>
    </Card>
  );
}
