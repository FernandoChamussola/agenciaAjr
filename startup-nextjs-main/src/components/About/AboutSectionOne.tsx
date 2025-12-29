import Image from "next/image";
import SectionTitle from "../Common/SectionTitle";

const checkIcon = (
  <svg width="16" height="13" viewBox="0 0 16 13" className="fill-current">
    <path d="M5.8535 12.6631c-.19526.1953-.51184.1953-.7071 0L.6785 8.1952c-.19526-.19526-.19526-.51184 0-.7071L2.3292 5.8374c.19547-.19547.51245-.19523.70763.00052l2.1094 2.1156c.19525.19582.51237.19598.7078.00034l7.5257-7.5333c.1953-.19543.512-.1955.7073-.00018l1.6511 1.651c.1953.19526.1953.51185 0 .7071L5.8535 12.6631Z" />
  </svg>
);

const AboutSectionOne = () => {
  const List = ({ text }) => (
    <div className="mb-4 flex items-start">
      <span className="bg-primary/15 text-primary mr-4 flex h-8 w-8 shrink-0 items-center justify-center rounded-lg">
        {checkIcon}
      </span>
      <p className="text-body-color text-base leading-relaxed">
        {text}
      </p>
    </div>
  );

  return (
    <section
      id="about"
      className="relative overflow-hidden py-20 md:py-24 lg:py-32 bg-slate-950"
    >
      {/* Background decoration */}
      <div className="absolute inset-0 -z-10">
        <div className="absolute -top-40 -left-40 h-96 w-96 rounded-full bg-primary/10 blur-3xl" />
        <div className="absolute bottom-0 right-0 h-96 w-96 rounded-full bg-purple-600/10 blur-3xl" />
      </div>

      <div className="container">
        <div className="grid grid-cols-1 items-center gap-16 lg:grid-cols-2">
          {/* Text */}
          <div>
            <SectionTitle
              title="Estratégia, tecnologia e marketing para acelerar o crescimento da sua marca "
              paragraph="Somos uma agência focada em resultados. Criamos soluções digitais inteligentes que unem design, tecnologia e estratégia para gerar impacto real no seu negócio."
              mb="36px"
            />

            <div className="max-w-[520px]">
              <div className="grid grid-cols-1 sm:grid-cols-2 gap-x-8">
                <List text="Estratégias orientadas a dados" />
                <List text="Equipe experiente e multidisciplinar" />
                <List text="Alta qualidade em cada entrega" />
                <List text="Suporte próximo e transparente" />
                <List text="Processos claros e eficientes" />
                <List text="Foco total em performance" />
              </div>
            </div>
          </div>

          {/* Image */}
          <div className="relative mx-auto w-full max-w-[520px]">
            <div className="relative aspect-[4/3] overflow-hidden rounded-2xl shadow-2xl">
              <Image
                src="https://images.unsplash.com/photo-1522071820081-009f0129c71c?w=1200&fit=crop"
                alt="Equipe de especialistas em tecnologia e marketing"
                fill
                className="object-cover"
              />
              {/* overlay */}
              <div className="absolute inset-0 bg-gradient-to-t from-slate-950/40 to-transparent" />
            </div>
          </div>
        </div>
      </div>
    </section>
  );
};

export default AboutSectionOne;
