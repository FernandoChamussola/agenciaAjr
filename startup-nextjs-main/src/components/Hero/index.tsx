import Link from "next/link";

const Hero = () => {
  return (
    <section className="relative h-[100vh] min-h-[600px] overflow-hidden">
      
      {/* 🎥 VIDEO BACKGROUND */}
      <video
        className="absolute inset-0 h-full w-full object-cover"
        autoPlay
        muted
        loop
        playsInline
      >
        <source src="/videos/hero.mp4" type="video/mp4" />
      </video>

      {/* 🎨 OVERLAY (ESSENCIAL PARA PROFISSIONALISMO) */}
      <div className="absolute inset-0 bg-black/60" />

      {/* CONTEÚDO */}
      <div className="relative z-10 flex h-full items-center">
        <div className="container">
          <div className="max-w-2xl">
            
            <h1 className="mb-6 text-4xl font-bold leading-tight text-white md:text-5xl">
              Ajudamos empresas a crescer com marketing e tecnologia
            </h1>

            <p className="mb-8 text-lg text-gray-200">
              Criamos estratégias digitais focadas em posicionamento,
              conversão e crescimento sustentável.
            </p>

            {/* CTA */}
            <div className="flex flex-wrap items-center gap-4">
              <Link
                href="/contato"
                className="rounded-lg bg-primary px-6 py-3 font-medium text-white transition hover:opacity-90"
              >
                Solicitar orçamento
              </Link>

              <Link
                href="/portfolio"
                className="font-medium text-white underline underline-offset-4 hover:opacity-80"
              >
                Ver projetos
              </Link>
            </div>

            {/* MÉTRICAS */}
            <div className="mt-12 flex gap-10">
              <div>
                <span className="block text-3xl font-bold text-primary">
                  3+
                </span>
                <span className="text-sm text-gray-300">
                  anos de experiência
                </span>
              </div>

              <div>
                <span className="block text-3xl font-bold text-primary">
                  15+
                </span>
                <span className="text-sm text-gray-300">
                  projetos entregues
                </span>
              </div>
            </div>

          </div>
        </div>
      </div>
    </section>
  );
};

export default Hero;
