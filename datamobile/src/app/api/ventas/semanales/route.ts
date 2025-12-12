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

    // Orden de días en español
    const dias = ["Dom", "Lun", "Mar", "Mié", "Jue", "Vie", "Sáb"];

    // Objeto para acumular valores
    const resumen: { [key: number]: number } = {};

    ventas.forEach((v: Venta) => {
      const fecha = new Date(v.fecha);
      const dia = fecha.getDay(); // 0: Domingo → 6: Sábado

      if (!resumen[dia]) resumen[dia] = 0;
      resumen[dia] += v.monto;
    });

    // Convertir a lista ordenada Lun–Dom
    const orden = [1, 2, 3, 4, 5, 6, 0];

    const data = orden.map((diaNum) => ({
      name: dias[diaNum],
      value: resumen[diaNum] || 0,
    }));

    return NextResponse.json(data);
  } catch (error) {
    console.error(error);
    return NextResponse.json(
      { error: "Error obteniendo actividad semanal" },
      { status: 500 }
    );
  }
}
