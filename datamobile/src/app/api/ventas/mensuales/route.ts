import { NextResponse } from "next/server";
import { prisma } from "@/lib/prisma";

interface Venta {
  id: number;
  producto: string;
  region: string;
  monto: number;
  fecha: string | Date;
}

export async function GET() {
  try {
    const ventas: Venta[] = await prisma.venta.findMany();

    const meses = [
      "Ene", "Feb", "Mar", "Abr", "May", "Jun",
      "Jul", "Ago", "Sep", "Oct", "Nov", "Dic"
    ];

    const resumen: { [key: number]: number } = {};

    ventas.forEach((v: Venta) => {
      const fecha = new Date(v.fecha);
      const mes = fecha.getMonth();

      if (!resumen[mes]) resumen[mes] = 0;
      resumen[mes] += v.monto;
    });

    const data = Object.keys(resumen).map((mes) => ({
      name: meses[Number(mes)],
      value: resumen[Number(mes)],
    }));

    return NextResponse.json(data);

  } catch (e) {
    console.error(e);
    return NextResponse.json(
      { error: "Error obteniendo ventas mensuales" },
      { status: 500 }
    );
  }
}
