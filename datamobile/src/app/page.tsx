'use client';

import { useEffect, useState } from 'react';
import { useSelector, useDispatch } from 'react-redux';
import { RootState } from '@/store/store';
import { setRegion } from '@/store/slices/filterSlice';
import { BarChart, Bar, XAxis, YAxis, CartesianGrid, Tooltip, ResponsiveContainer } from 'recharts';

export default function Home() {
  const dispatch = useDispatch();
  const filtroRegion = useSelector((state: RootState) => state.filters.region);
  const [data, setData] = useState<any[]>([]);

  // Cargar datos
  useEffect(() => {
    fetch('/api/ventas')
      .then(res => res.json())
      .then(datos => setData(datos));
  }, []);

  // Filtrado dinámico
  const datosFiltrados = filtroRegion === 'Todas' 
    ? data 
    : data.filter(d => d.region === filtroRegion);

  return (
    <main className="min-h-screen p-4 bg-slate-50">
      <h1 className="text-2xl font-bold text-center mb-6">Dashboard DataMobile (PostgreSQL)</h1>
      
      {/* Botón de carga inicial */}
      <div className="flex justify-center mb-6">
        <button 
          onClick={() => fetch('/api/seed').then(() => window.location.reload())}
          className="bg-indigo-600 text-white px-4 py-2 rounded shadow hover:bg-indigo-700 transition"
        >
          Resetear DB con Datos de Prueba
        </button>
      </div>

      {/* Filtro Redux */}
      <div className="max-w-md mx-auto mb-8 bg-white p-4 rounded shadow">
        <label className="font-semibold block mb-2">Región:</label>
        <select 
          value={filtroRegion}
          onChange={(e) => dispatch(setRegion(e.target.value))}
          className="w-full border p-2 rounded"
        >
          <option value="Todas">Todas</option>
          <option value="Norte">Norte</option>
          <option value="Centro">Centro</option>
          <option value="Sur">Sur</option>
        </select>
      </div>

      {/* Gráficos */}
      <div className="grid grid-cols-1 md:grid-cols-2 gap-6 max-w-6xl mx-auto">
        
        {/* Gráfico de Barras */}
        <div className="bg-white p-4 rounded shadow h-72">
          <h3 className="font-bold mb-4">Ventas por Producto</h3>
          <ResponsiveContainer width="100%" height="100%">
            <BarChart data={datosFiltrados}>
              <CartesianGrid strokeDasharray="3 3" />
              <XAxis dataKey="producto" tick={{fontSize: 10}} interval={0} />
              <YAxis />
              <Tooltip />
              <Bar dataKey="monto" fill="#4f46e5" />
            </BarChart>
          </ResponsiveContainer>
        </div>

        {/* Tabla Detallada */}
        <div className="bg-white p-4 rounded shadow h-72 overflow-auto">
          <h3 className="font-bold mb-4">Detalle de Registros</h3>
          <table className="w-full text-left text-sm">
            <thead>
              <tr className="border-b">
                <th className="p-2">Producto</th>
                <th className="p-2">Región</th>
                <th className="p-2">Monto</th>
              </tr>
            </thead>
            <tbody>
              {datosFiltrados.map((item: any) => (
                <tr key={item.id} className="border-b hover:bg-slate-50">
                  <td className="p-2">{item.producto}</td>
                  <td className="p-2">{item.region}</td>
                  <td className="p-2 font-mono text-green-600">${item.monto}</td>
                </tr>
              ))}
            </tbody>
          </table>
        </div>
      </div>
    </main>
  );
}