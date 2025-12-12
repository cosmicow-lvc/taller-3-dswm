import {prisma} from '@/lib/prisma';
import RegistrosTable from '@/components/RegistrosTable';

export default async function RegistrosPage() {

  const ventas = await prisma.venta.findMany({
    orderBy: { fecha: 'desc' }
  });

  return (
    <div className="p-8">
      <h1 className="text-3xl font-bold mb-6 text-white">Registros de Ventas</h1>
      <RegistrosTable ventasIniciales={ventas} />
    </div>
  );
}