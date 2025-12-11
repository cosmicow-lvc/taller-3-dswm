import { NextResponse } from 'next/server';
import { PrismaClient } from '@prisma/client';

const prisma = new PrismaClient();

export async function GET() {
  try {
    await prisma.venta.deleteMany(); // Limpiar tabla

    await prisma.venta.createMany({
      data: [
        { producto: "Servidor Rack", region: "Norte", monto: 5000 },
        { producto: "Licencia Software", region: "Norte", monto: 1200 },
        { producto: "Cableado Fibra", region: "Centro", monto: 800 },
        { producto: "Consultoría", region: "Centro", monto: 2500 },
        { producto: "Router Cisco", region: "Sur", monto: 1500 },
        { producto: "Mantenimiento", region: "Sur", monto: 400 },
        { producto: "Switch", region: "Norte", monto: 600 },
      ]
    });
    return NextResponse.json({ message: "Datos PostgreSQL creados" });
  } catch (error) {
    return NextResponse.json({ error: "Error conectando a DB" }, { status: 500 });
  }
}