-- CreateTable
CREATE TABLE "Venta" (
    "id" SERIAL NOT NULL,
    "producto" TEXT NOT NULL,
    "region" TEXT NOT NULL,
    "monto" INTEGER NOT NULL,
    "fecha" TIMESTAMP(3) NOT NULL DEFAULT CURRENT_TIMESTAMP,

    CONSTRAINT "Venta_pkey" PRIMARY KEY ("id")
);
