"use client";

import { useEffect } from "react";
import { useDispatch, useSelector } from "react-redux";
import { RootState, AppDispatch } from "@/store/store";
import { setData } from "@/store/slices/dataSlice";


import DashboardLayout from "@/components/layout/DashboardLayout";
import MetricCard from "@/components/ui/metricCard";

import BarChartCard from "@/components/charts/bartChartCard";
import LineChartCard from "@/components/charts/lineChartCard";
import AreaChartCard from "@/components/charts/areaChartCard";


export default function DashboardPage() {
  const dispatch = useDispatch<AppDispatch>();
  const ventas = useSelector((state: RootState) => state.data.items);

  useEffect(() => {
    async function load() {
      const res = await fetch("/api/ventas");
      const data = await res.json();

      console.log("Ventas cargadas:", data);

      // 🔥🔥 GUARDAR EN REDUX
      dispatch(setData(data));
    }

    load();
  }, [dispatch]); 


  return (
    <DashboardLayout>
      <h1 className="text-2xl font-bold mb-6 text-black">Dashboard</h1>

      <div className="grid grid-cols-2 md:grid-cols-4 gap-4 mb-6 text-black">
        <MetricCard label="Ventas" value={ventas.length} />
  
      </div>

      <div className="grid grid-cols-1 md:grid-cols-2 gap-6">
        <BarChartCard />
        <LineChartCard />

        <AreaChartCard />

      </div>
    </DashboardLayout>
  );
}
