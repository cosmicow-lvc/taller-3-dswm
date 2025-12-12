"use client";

import { useEffect, useState } from "react";
import { LineChart, Line, XAxis, YAxis, Tooltip, ResponsiveContainer } from "recharts";
import Card from "@/components/ui/card";

export default function LineChartCard() {
  const [data, setData] = useState([]);

  useEffect(() => {
    async function load() {
      const res = await fetch("/api/ventas/semanales");
      const json = await res.json();
      setData(json);
    }

    load();
  }, []);

  return (
    <Card>
      <h3 className="text-lg font-semibold mb-3 text-black">Actividad Semanal</h3>

      <div className="h-64">
        <ResponsiveContainer width="100%" height="100%">
          <LineChart data={data}>
            <XAxis dataKey="name" />
            
            {/* EJE Y con formato de dinero 👇 */}
            <YAxis tickFormatter={(v) => `$${v.toLocaleString("es-CL")}`} />

            {/* Tooltip también con formato 👇 */}
            <Tooltip formatter={(v) => `$${v.toLocaleString("es-CL")}`} />

            <Line
              type="monotone"
              dataKey="value"
              stroke="#10B981"
              strokeWidth={3}
            />
          </LineChart>
        </ResponsiveContainer>
      </div>
    </Card>
  );
}
