import Link from "next/link";

export default async function Page() {
  return (
    <div className="min-h-screen bg-gradient-to-br from-gray-900 via-blue-900 to-gray-900">
      {/* Hero Section */}
      <section className="container mx-auto px-6 py-20 text-center">
        <div className="max-w-4xl mx-auto">
          <h1 className="text-5xl md:text-7xl font-bold mb-6 bg-gradient-to-r from-blue-400 to-purple-500 bg-clip-text text-transparent">
            DataMobile Analytics
          </h1>
          <p className="text-xl md:text-2xl text-gray-300 mb-8">
            Dashboard interactivo con visualizaciones dinámicas y filtros en tiempo real
          </p>
          <p className="text-lg text-gray-400 mb-12 max-w-2xl mx-auto">
            Explora tus datos de ventas con gráficos intuitivos y análisis detallados.
            Potenciado por Next.js, Redux y Prisma para una experiencia fluida y moderna.
          </p>
          <div className="flex gap-4 justify-center flex-wrap">
            <Link 
              href="/dashboard"
              className="bg-blue-600 hover:bg-blue-700 text-white font-bold py-4 px-8 rounded-lg text-lg transition-all transform hover:scale-105 shadow-lg"
            >
              Ver Dashboard
            </Link>
            <Link 
              href="/registros"
              className="bg-gray-700 hover:bg-gray-600 text-white font-bold py-4 px-8 rounded-lg text-lg transition-all transform hover:scale-105 shadow-lg"
            >
              Ver Registros
            </Link>
          </div>
        </div>
      </section>
    </div>
  );
}