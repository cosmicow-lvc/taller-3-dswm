"use client";

import { useState } from 'react'; 
import { useSelector, useDispatch } from 'react-redux';
import { RootState } from '@/store/store';

import { 
  setSearch, setRegion, 
  setStartDate, setEndDate, 
  setMinAmount, setMaxAmount,
  resetFilters
} from '@/store/slices/filterSlice';
import Link from 'next/link';

type Venta = {
  id: number;
  producto: string;
  region: string;
  monto: number;
  fecha: Date;
};

export default function RegistrosTable({ ventasIniciales }: { ventasIniciales: Venta[] }) {
    const dispatch = useDispatch();
  
    const [mostrarFiltros, setMostrarFiltros] = useState(false);


    const { 
        search, region, 
        startDate, endDate, 
        minAmount, maxAmount 
    } = useSelector((state: RootState) => state.filters);


    const ventasFiltradas = ventasIniciales.filter((venta) => {
    // Filtro Texto
    const matchText = venta.producto.toLowerCase().includes(search.toLowerCase());
    
    // Filtro Región
    const matchRegion = region === 'Todas' || venta.region === region;

    // Filtro Fecha 
    const fechaVenta = new Date(venta.fecha).getTime();
    const fechaInicio = startDate ? new Date(startDate).getTime() : 0;
    const fechaFin = endDate ? new Date(endDate).setHours(23,59,59) : Infinity; 
    const matchDate = fechaVenta >= fechaInicio && fechaVenta <= fechaFin;

    // Filtro Monto
    const monto = venta.monto;
    const min = minAmount ? parseFloat(minAmount) : 0;
    const max = maxAmount ? parseFloat(maxAmount) : Infinity;
    const matchAmount = monto >= min && monto <= max;

    return matchText && matchRegion && matchDate && matchAmount;
  });

return (
    <div>
      
      <button 
        onClick={() => setMostrarFiltros(!mostrarFiltros)}
        className="md:hidden w-full bg-gray-800 text-white p-3 rounded-lg mb-4 flex justify-between items-center border border-gray-700 hover:bg-gray-700 transition shadow-sm"
      >
        <span className="font-semibold flex items-center gap-2">
            Filtros y Búsqueda
        </span>
        <span className="text-gray-400">{mostrarFiltros ? '▲' : '▼'}</span>
      </button>

      <div className={`bg-gray-800 p-4 rounded-lg mb-6 border border-gray-700 ${mostrarFiltros ? 'block' : 'hidden'} md:block`}>
        <div className="grid grid-cols-1 md:grid-cols-2 lg:grid-cols-4 gap-4 mb-4">
          
          {/* Buscador */}
          <div className="flex flex-col">
            <label className="text-xs text-gray-400 mb-1">Producto</label>
            <input
              type="text"
              placeholder="Buscar..."
              value={search}
              onChange={(e) => dispatch(setSearch(e.target.value))}
              className="bg-gray-700 text-white px-3 py-2 rounded outline-none focus:ring-2 focus:ring-blue-500"
            />
          </div>

          {/* Región */}
          <div className="flex flex-col">
            <label className="text-xs text-gray-400 mb-1">Región</label>
            <select
              value={region}
              onChange={(e) => dispatch(setRegion(e.target.value))}
              className="bg-gray-700 text-white px-3 py-2 rounded outline-none focus:ring-2 focus:ring-blue-500"
            >
              <option value="Todas">Todas</option>
              <option value="Norte">Norte</option>
              <option value="Centro">Centro</option>
              <option value="Sur">Sur</option>
            </select>
          </div>

          {/* Fechas (Desde - Hasta) */}
          <div className="flex flex-col">
             <label className="text-xs text-gray-400 mb-1">Fecha</label>
             <div className="flex gap-2">
               <input 
                 type="date" 
                 value={startDate}
                 onChange={(e) => dispatch(setStartDate(e.target.value))}
                 className="bg-gray-700 text-white px-2 py-2 rounded w-full text-sm outline-none focus:ring-2 focus:ring-blue-500"
               />
               <input 
                 type="date" 
                 value={endDate}
                 onChange={(e) => dispatch(setEndDate(e.target.value))}
                 className="bg-gray-700 text-white px-2 py-2 rounded w-full text-sm outline-none focus:ring-2 focus:ring-blue-500"
               />
             </div>
          </div>

          {/* Montos (Min - Max) */}
          <div className="flex flex-col">
             <label className="text-xs text-gray-400 mb-1">Monto (Min - Max)</label>
             <div className="flex gap-2">
               <input 
                 type="number" 
                 placeholder="Min"
                 value={minAmount}
                 onChange={(e) => dispatch(setMinAmount(e.target.value))}
                 className="bg-gray-700 text-white px-2 py-2 rounded w-full text-sm outline-none focus:ring-2 focus:ring-blue-500"
               />
               <input 
                 type="number" 
                 placeholder="Max"
                 value={maxAmount}
                 onChange={(e) => dispatch(setMaxAmount(e.target.value))}
                 className="bg-gray-700 text-white px-2 py-2 rounded w-full text-sm outline-none focus:ring-2 focus:ring-blue-500"
               />
             </div>
          </div>
        </div>

        <div className="flex justify-end">
          <button 
            onClick={() => dispatch(resetFilters())}
            className="text-xs text-gray-400 hover:text-white underline transition-colors"
          >
            Limpiar filtros
          </button>
        </div>
      </div>

      <div className="overflow-x-auto bg-gray-800 rounded-lg shadow border border-gray-700">
        <table className="w-full text-left text-gray-300">
          <thead className="bg-gray-700 text-gray-100 uppercase text-sm">
            <tr>
              <th className="px-4 py-3">ID</th>
              <th className="px-4 py-3">Producto</th>
              <th className="hidden md:table-cell px-6 py-3">Región</th>
              <th className="px-4 py-3">Fecha</th>
              <th className="hidden md:table-cell px-6 py-3">Monto</th>
              <th className="px-4 py-3">Acción</th>
            </tr>
          </thead>
          <tbody className="divide-y divide-gray-600">
            {ventasFiltradas.length > 0 ? (
              ventasFiltradas.map((venta) => (
                <tr key={venta.id} className="hover:bg-gray-700 transition-colors">
                  <td className="px-4 py-4">{venta.id}</td>
                  <td className="px-4 py-4 font-medium text-white text-sm md:text-base">{venta.producto}</td>
                  <td className="hidden md:table-cell px-6 py-4">{venta.region}</td>
                  <td className="px-4 py-4 text-sm">{new Date(venta.fecha).toLocaleDateString()}</td>
                  <td className="hidden md:table-cell px-6 py-4 text-green-400 font-bold">${venta.monto.toLocaleString()}</td>
                  <td className="px-4 py-4">
                    <Link 
                      href={`/registros/${venta.id}`}
                      className="bg-blue-600 hover:bg-blue-500 text-white px-2 py-1 md:px-3 md:py-1 rounded text-xs md:text-sm transition whitespace-nowrap"
                    >
                      Ver
                    </Link>
                  </td>
                </tr>
              ))
            ) : (
              <tr>
                <td colSpan={6} className="px-6 py-8 text-center text-gray-500">
                  No se encontraron resultados con estos filtros.
                </td>
              </tr>
            )}
          </tbody>
        </table>
      </div>
    </div>
  );
}