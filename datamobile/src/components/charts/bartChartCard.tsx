"use client";

import { useEffect, useState } from "react";
import { BarChart, Bar, XAxis, YAxis, Tooltip, ResponsiveContainer } from "recharts";
import Card from "@/components/ui/card";

export default function BarChartCard() {
  const [data, setData] = useState([]);

  useEffect(() => {
    async function load() {
      const res = await fetch("/api/ventas/mensuales");
      const json = await res.json();
      setData(json);
    }
    load();
  }, []);

  return (
    <Card>
      <h3 className="text-lg font-semibold mb-3 text-black">Ventas Mensuales</h3>

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
