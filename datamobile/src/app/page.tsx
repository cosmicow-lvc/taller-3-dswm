import DashboardLayout from "@/components/layout/DashboardLayout";
import MetricCard from "@/components/ui/metricCard";

import BarChartCard from "@/components/charts/bartChartCard";
import LineChartCard from "@/components/charts/lineChartCard";
import PieChartCard from "@/components/charts/pieChartCard";
import AreaChartCard from "@/components/charts/areaChartCard";
import RadarChartCard from "@/components/charts/radarChartCard";

export default function DashboardPage() {
  return (
    <DashboardLayout>
      <h1 className="text-2xl font-bold mb-6">Dashboard</h1>

      <div className="grid grid-cols-2 md:grid-cols-4 gap-4 mb-6">
        <MetricCard label="Usuarios" value="1.240" />
        <MetricCard label="Ventas" value="$12.400" />
        <MetricCard label="Visitantes" value="9.321" />
        <MetricCard label="Conversion" value="4.8%" />
      </div>

      <div className="grid grid-cols-1 md:grid-cols-2 gap-6">
        <BarChartCard />
        <LineChartCard />
        <PieChartCard />
        <AreaChartCard />
        <RadarChartCard />
      </div>
    </DashboardLayout>
  );
}
