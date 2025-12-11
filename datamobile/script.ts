// script.ts
// 1. Importamos la instancia de Prisma que ya configuraste en tu proyecto
import { prisma } from './src/lib/prisma'; 

async function main() {
  console.log('🌱 Iniciando carga de datos (Seeding)...');

  try {
    // 2. Limpiamos la tabla primero (opcional, para no duplicar si lo corres varias veces)
    await prisma.venta.deleteMany();
    console.log('🗑️  Datos anteriores eliminados.');

    // 3. Insertamos los datos nuevos
    const resultado = await prisma.venta.createMany({
      data: [
        { producto: "Laptop Gamer", region: "Norte", monto: 1500000 },
        { producto: "Mouse Ergonómico", region: "Sur", monto: 25000 },
        { producto: "Teclado Mecánico", region: "Centro", monto: 80000 },
        { producto: "Monitor 4K", region: "Norte", monto: 400000 },
        { producto: "Silla de Oficina", region: "Centro", monto: 120000 },
      ]
    });

    console.log(`✅ Éxito: Se insertaron ${resultado.count} ventas nuevas.`);

  } catch (error) {
    console.error('❌ Error al ejecutar el script:', error);
  } finally {
    // 4. Cerramos la conexión al terminar
    await prisma.$disconnect();
  }
}

main();