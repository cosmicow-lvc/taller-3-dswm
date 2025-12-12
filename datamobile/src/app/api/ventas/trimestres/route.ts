import { NextResponse } from "next/server";

export async function GET() {
  // Ejemplo: agrupar ventas por trimestre
  const trimestres = [
    { name: "Q1", value: 300 },
    { name: "Q2", value: 450 },
    { name: "Q3", value: 380 },
    { name: "Q4", value: 500 },
  ];

  return NextResponse.json(trimestres);
}
