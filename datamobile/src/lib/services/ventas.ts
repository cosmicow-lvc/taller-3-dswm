export async function getVentas() {
  const res = await fetch("/api/ventas", {
    cache: "no-store",
  });

  if (!res.ok) throw new Error("Error obteniendo ventas");

  return res.json();
}
