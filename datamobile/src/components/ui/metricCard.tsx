interface Props {
  label: string;
  value: string | number;
}

export default function MetricCard({ label, value }: Props) {
  return (
    <div className="bg-white shadow rounded-xl p-4 flex flex-col">
      <span className="text-gray-500 text-sm">{label}</span>
      <span className="text-2xl font-semibold">{value}</span>
    </div>
  );
}
