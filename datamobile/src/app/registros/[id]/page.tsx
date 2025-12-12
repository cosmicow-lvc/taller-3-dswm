// src/app/registros/[id]/page.tsx
import {prisma} from '@/lib/prisma';
import Link from 'next/link';
import { notFound } from 'next/navigation';


export default async function DetalleVentaPage({ 
  params 
}: { 
  params: Promise<{ id: string }> 
}) {
  
  const { id } = await params;
  const idNumero = parseInt(id);

  const venta = await prisma.venta.findUnique({
    where: { id: idNumero },
  });

  if (!venta) {
    notFound();
  }

  return (
    <div className="p-8 flex flex-col items-center">
      <div className="w-full max-w-2xl bg-gray-800 rounded-xl shadow-lg p-8 border border-gray-700">
        
        <div className="flex justify-between items-center mb-6 border-b border-gray-600 pb-4">
          <h1 className="text-3xl font-bold text-white">Detalle de Venta #{venta.id}</h1>
          <span className="bg-blue-900 text-blue-200 text-xs px-3 py-1 rounded-full uppercase tracking-wide">
            {venta.region}
          </span>
        </div>

        <div className="grid grid-cols-1 md:grid-cols-2 gap-6 mb-8">
          <div>
            <p className="text-gray-400 text-sm">Producto</p>
            <p className="text-xl text-white font-semibold">{venta.producto}</p>
          </div>
          
          <div>
            <p className="text-gray-400 text-sm">Fecha de Transacción</p>
            <p className="text-xl text-white">
                {new Date(venta.fecha).toLocaleDateString()}
            </p>
          </div>

          <div>
            <p className="text-gray-400 text-sm">Monto Total</p>
            <p className="text-3xl text-green-400 font-bold">
                ${venta.monto.toLocaleString()}
            </p>
          </div>
        </div>

        <div className="pt-4">
          <Link 
            href="/registros"
            className="text-gray-300 hover:text-white underline decoration-blue-500 underline-offset-4"
          >
            ← Volver a la lista
          </Link>
        </div>

      </div>
    </div>
  );
}