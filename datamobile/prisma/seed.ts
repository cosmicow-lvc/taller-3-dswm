import { PrismaClient, Prisma } from "../generated/prisma/client";
import { PrismaPg } from '@prisma/adapter-pg'
import 'dotenv/config'

const adapter = new PrismaPg({
  connectionString: process.env.DATABASE_URL,
})

const prisma = new PrismaClient({
  adapter,
});

const ventasData: Prisma.VentaCreateInput[] = [
  // Enero 2025
  { producto: "iPhone 15", region: "Norte", monto: 1200, fecha: new Date("2025-01-05") },
  { producto: "Samsung Galaxy S24", region: "Sur", monto: 950, fecha: new Date("2025-01-08") },
  { producto: "iPad Pro", region: "Centro", monto: 800, fecha: new Date("2025-01-12") },
  { producto: "MacBook Air", region: "Norte", monto: 1500, fecha: new Date("2025-01-15") },
  { producto: "AirPods Pro", region: "Este", monto: 250, fecha: new Date("2025-01-18") },
  
  // Febrero 2025
  { producto: "iPhone 15", region: "Sur", monto: 1200, fecha: new Date("2025-02-02") },
  { producto: "Samsung Galaxy S24", region: "Centro", monto: 950, fecha: new Date("2025-02-05") },
  { producto: "Apple Watch", region: "Norte", monto: 400, fecha: new Date("2025-02-10") },
  { producto: "iPad Pro", region: "Este", monto: 800, fecha: new Date("2025-02-14") },
  { producto: "MacBook Pro", region: "Sur", monto: 2500, fecha: new Date("2025-02-20") },
  
  // Marzo 2025
  { producto: "AirPods Pro", region: "Centro", monto: 250, fecha: new Date("2025-03-03") },
  { producto: "iPhone 15", region: "Este", monto: 1200, fecha: new Date("2025-03-07") },
  { producto: "Samsung Galaxy Tab", region: "Norte", monto: 600, fecha: new Date("2025-03-12") },
  { producto: "MacBook Air", region: "Sur", monto: 1500, fecha: new Date("2025-03-16") },
  { producto: "Apple Watch", region: "Centro", monto: 400, fecha: new Date("2025-03-22") },
  
  // Abril 2025
  { producto: "iPhone 15", region: "Norte", monto: 1200, fecha: new Date("2025-04-04") },
  { producto: "iPad Pro", region: "Sur", monto: 800, fecha: new Date("2025-04-09") },
  { producto: "Samsung Galaxy S24", region: "Este", monto: 950, fecha: new Date("2025-04-13") },
  { producto: "MacBook Pro", region: "Centro", monto: 2500, fecha: new Date("2025-04-18") },
  { producto: "AirPods Pro", region: "Norte", monto: 250, fecha: new Date("2025-04-25") },
  
  // Mayo 2025
  { producto: "Apple Watch", region: "Sur", monto: 400, fecha: new Date("2025-05-05") },
  { producto: "iPhone 15", region: "Centro", monto: 1200, fecha: new Date("2025-05-10") },
  { producto: "Samsung Galaxy Tab", region: "Este", monto: 600, fecha: new Date("2025-05-15") },
  { producto: "MacBook Air", region: "Norte", monto: 1500, fecha: new Date("2025-05-20") },
  { producto: "iPad Pro", region: "Sur", monto: 800, fecha: new Date("2025-05-28") },
  
  // Junio 2025
  { producto: "Samsung Galaxy S24", region: "Centro", monto: 950, fecha: new Date("2025-06-03") },
  { producto: "AirPods Pro", region: "Este", monto: 250, fecha: new Date("2025-06-08") },
  { producto: "iPhone 15", region: "Norte", monto: 1200, fecha: new Date("2025-06-12") },
  { producto: "MacBook Pro", region: "Sur", monto: 2500, fecha: new Date("2025-06-17") },
  { producto: "Apple Watch", region: "Centro", monto: 400, fecha: new Date("2025-06-24") },
  
  // Julio 2025
  { producto: "iPad Pro", region: "Este", monto: 800, fecha: new Date("2025-07-02") },
  { producto: "Samsung Galaxy Tab", region: "Norte", monto: 600, fecha: new Date("2025-07-08") },
  { producto: "iPhone 15", region: "Sur", monto: 1200, fecha: new Date("2025-07-14") },
  { producto: "MacBook Air", region: "Centro", monto: 1500, fecha: new Date("2025-07-19") },
  { producto: "AirPods Pro", region: "Este", monto: 250, fecha: new Date("2025-07-26") },
  
  // Agosto 2025
  { producto: "Samsung Galaxy S24", region: "Norte", monto: 950, fecha: new Date("2025-08-04") },
  { producto: "Apple Watch", region: "Sur", monto: 400, fecha: new Date("2025-08-09") },
  { producto: "iPhone 15", region: "Centro", monto: 1200, fecha: new Date("2025-08-15") },
  { producto: "MacBook Pro", region: "Este", monto: 2500, fecha: new Date("2025-08-21") },
  { producto: "iPad Pro", region: "Norte", monto: 800, fecha: new Date("2025-08-28") },
  
  // Septiembre 2025
  { producto: "AirPods Pro", region: "Sur", monto: 250, fecha: new Date("2025-09-05") },
  { producto: "Samsung Galaxy Tab", region: "Centro", monto: 600, fecha: new Date("2025-09-11") },
  { producto: "iPhone 15", region: "Este", monto: 1200, fecha: new Date("2025-09-16") },
  { producto: "MacBook Air", region: "Norte", monto: 1500, fecha: new Date("2025-09-22") },
  { producto: "Apple Watch", region: "Sur", monto: 400, fecha: new Date("2025-09-29") },
  
  // Octubre 2025
  { producto: "iPad Pro", region: "Centro", monto: 800, fecha: new Date("2025-10-06") },
  { producto: "Samsung Galaxy S24", region: "Este", monto: 950, fecha: new Date("2025-10-12") },
  { producto: "iPhone 15", region: "Norte", monto: 1200, fecha: new Date("2025-10-18") },
  { producto: "MacBook Pro", region: "Sur", monto: 2500, fecha: new Date("2025-10-24") },
  { producto: "AirPods Pro", region: "Centro", monto: 250, fecha: new Date("2025-10-30") },
  
  // Noviembre 2025
  { producto: "Samsung Galaxy Tab", region: "Este", monto: 600, fecha: new Date("2025-11-05") },
  { producto: "Apple Watch", region: "Norte", monto: 400, fecha: new Date("2025-11-11") },
  { producto: "iPhone 15", region: "Sur", monto: 1200, fecha: new Date("2025-11-17") },
  { producto: "MacBook Air", region: "Centro", monto: 1500, fecha: new Date("2025-11-23") },
  { producto: "iPad Pro", region: "Este", monto: 800, fecha: new Date("2025-11-29") },
  
  // Diciembre 2025
  { producto: "iPhone 15", region: "Norte", monto: 1200, fecha: new Date("2025-12-02") },
  { producto: "Samsung Galaxy S24", region: "Sur", monto: 950, fecha: new Date("2025-12-06") },
  { producto: "MacBook Pro", region: "Centro", monto: 2500, fecha: new Date("2025-12-10") },
  { producto: "AirPods Pro", region: "Este", monto: 250, fecha: new Date("2025-12-11") },
  { producto: "Apple Watch", region: "Norte", monto: 400, fecha: new Date("2025-12-12") },
];

export async function main() {
  console.log('🌱 Iniciando seed de ventas...');
  
  for (const venta of ventasData) {
    await prisma.venta.create({ data: venta });
  }
  
  console.log(`✅ Se crearon ${ventasData.length} registros de ventas`);
}

main()
  .catch((e) => {
    console.error('❌ Error en el seed:', e);
    process.exit(1);
  })
  .finally(async () => {
    await prisma.$disconnect();
  });