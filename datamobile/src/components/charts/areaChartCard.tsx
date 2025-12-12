"use client";

import { useEffect, useState } from "react";
import { AreaChart, Area, XAxis, YAxis, Tooltip, ResponsiveContainer } from "recharts";
import Card from "@/components/ui/card";

type QuarterData = {
  name: string;   // Q1, Q2, Q3, Q4
  value: number;  // ingresos
};

export default function AreaChartCard() {
  const [data, setData] = useState<QuarterData[]>([]);

  useEffect(() => {
    async function fetchTrimestres() {
      try {
        const res = await fetch("/api/ventas/trimestres"); // <-- tu ruta API
        const json = await res.json();
        setData(json); // Debe venir como [{name:"Q1", value:...}]
      } catch (e) {
        console.error("Error al cargar trimestres:", e);
      }
    }

    fetchTrimestres();
  }, []);

  return (
    <Card>
      <h3 className="text-lg font-semibold mb-3 text-black">Ingresos Trimestrales</h3>

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
