import Link from "next/link";

export default function Home() {
  return (
    <main className="min-h-screen bg-[#f7f1e8] text-[#1f1a17]">
      <section className="relative min-h-screen flex items-center px-6 md:px-16 overflow-hidden">
        <div className="absolute inset-0 opacity-40">
          <img
            src="/tulipanes-rosas/1.jpg"
            alt="Blumen flowers"
            className="w-full h-full object-cover"
          />
        </div>

        <div className="absolute inset-0 bg-gradient-to-r from-[#f7f1e8] via-[#f7f1e8]/85 to-transparent" />

        <div className="relative z-10 max-w-2xl">
          <p className="uppercase tracking-[0.35em] text-xs mb-6">
            Blumen Collection
          </p>

          <h1 className="font-serif text-6xl md:text-8xl leading-none mb-8">
            Graduation flowers, redefined.
          </h1>

          <p className="text-lg md:text-xl max-w-md mb-10 text-[#5f5149]">
            Arreglos elegantes para momentos que merecen recordarse.
          </p>

          <Link
            href="/flores"
            className="inline-block rounded-full border border-[#1f1a17] px-8 py-4 text-sm uppercase tracking-[0.25em] hover:bg-[#1f1a17] hover:text-[#f7f1e8] transition"
          >
            Ver catálogo
          </Link>
        </div>
      </section>

      <section className="px-6 md:px-16 py-24">
        <div className="grid md:grid-cols-2 gap-16 items-center">
          <div>
            <p className="uppercase tracking-[0.3em] text-xs mb-5">
              Made for big moments
            </p>
            <h2 className="font-serif text-5xl md:text-6xl mb-6">
              Flores con presencia, estilo y detalle.
            </h2>
            <p className="text-[#5f5149] text-lg leading-relaxed">
              Diseñamos arreglos para graduaciones, entregas especiales y
              celebraciones que necesitan sentirse únicas.
            </p>
          </div>

          <div className="grid grid-cols-2 gap-4">
            <img
              src="/tulipanes-rojos/1.jpg"
              className="rounded-t-full h-[420px] w-full object-cover"
              alt="Tulipanes rojos"
            />
            <img
              src="/tulipanes-rosas/2.jpg"
              className="rounded-b-full h-[420px] w-full object-cover mt-16"
              alt="Tulipanes rosas"
            />
          </div>
        </div>
      </section>

      <section className="px-6 md:px-16 pb-24">
        <div className="border-t border-[#d8cabe] pt-16 grid md:grid-cols-4 gap-10 text-center">
          <div>
            <h3 className="font-serif text-3xl mb-3">01</h3>
            <p>Escoge tu arreglo</p>
          </div>
          <div>
            <h3 className="font-serif text-3xl mb-3">02</h3>
            <p>Mándanos WhatsApp</p>
          </div>
          <div>
            <h3 className="font-serif text-3xl mb-3">03</h3>
            <p>Coordinamos entrega</p>
          </div>
          <div>
            <h3 className="font-serif text-3xl mb-3">04</h3>
            <p>Recibe tu ramo</p>
          </div>
        </div>
      </section>
    </main>
  );
}
