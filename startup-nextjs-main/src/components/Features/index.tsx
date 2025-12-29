import SectionTitle from "../Common/SectionTitle";
import SingleFeature from "./SingleFeature";
import featuresData from "./featuresData";

const Features = () => {
  return (
    <section
      id="services"
      className="relative bg-slate-950 py-24 overflow-hidden"
    >
      {/* Background decorativo sutil */}
      <div className="absolute inset-0 pointer-events-none">
        <div className="absolute -top-32 -left-32 h-96 w-96 rounded-full bg-primary/10 blur-3xl" />
        <div className="absolute -bottom-32 -right-32 h-96 w-96 rounded-full bg-purple-500/10 blur-3xl" />
      </div>

      <div className="relative mx-auto max-w-7xl px-4 sm:px-6 lg:px-8">
        {/* Título */}
        <SectionTitle
          title="Soluções pensadas para gerar resultados reais "
          paragraph="Unimos estratégia, design e tecnologia para ajudar empresas a crescer, se posicionar melhor e vender mais."
          center
        />

        {/* Grid de serviços */}
        <div className="mt-16 grid grid-cols-1 gap-8 md:grid-cols-2 lg:grid-cols-3">
          {featuresData.map((feature) => (
            <SingleFeature key={feature.id} feature={feature} index={undefined} />
          ))}
        </div>
      </div>
    </section>
  );
};

export default Features;
