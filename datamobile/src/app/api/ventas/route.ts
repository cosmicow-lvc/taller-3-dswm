import { NextResponse } from 'next/server';
import { prisma} from '../../../lib/prisma';

export async function GET() {
  try {
    const ventas = await prisma.venta.findMany();
    return NextResponse.json(ventas);
  } catch (error) {
    console.error("Error obteniendo ventas:", error);
    return NextResponse.json({ error: "Error obteniendo ventas" }, { status: 500 });
  }
}

