import AboutSectionOne from "@/components/About/AboutSectionOne";
import AboutSectionTwo from "@/components/About/AboutSectionTwo";
import Breadcrumb from "@/components/Common/Breadcrumb";

import { Metadata } from "next";

export const metadata: Metadata = {
  title: "About Page | Free Next.js Template for Startup and SaaS",
  description: "This is About Page for Startup Nextjs Template",
  // other metadata
};

const membros = [
  {
    nome: "João Silva",
    cargo: "CEO & Co-Fundador",
    foto: "https://randomuser.me/api/portraits/men/1.jpg",
  },
  {
    nome: "Maria Santos",
    cargo: "Gerente de Projetos",
    foto: "https://randomuser.me/api/portraits/women/2.jpg",
  },
  {
    nome: "Carlos Oliveira",
    cargo: "Desenvolvedor Chefe",
    foto: "https://randomuser.me/api/portraits/men/3.jpg",
  },
  {
    nome: "Ana Souza",
    cargo: "Analista de Marketing",
    foto: "https://randomuser.me/api/portraits/women/4.jpg",
  },
];

const AboutPage = () => {
  return (
    <>
      <Breadcrumb
        pageName="About Page"
        description="Saiba mais sobre nossa empresa, equipe e missão."
      />
      <AboutSectionOne />
      {/* <AboutSectionTwo /> */}

      <div className="bg-white py-12 sm:py-16">
        <div className="mx-auto max-w-screen-xl px-4 sm:px-6 lg:px-8">
          <div className="mx-auto max-w-lg text-center">
            <h2 className="text-3xl font-bold text-gray-900 sm:text-4xl">
              Nossa Equipe
            </h2>
            <p className="mt-4 text-gray-500">
              Conheça os especialistas dedicados que impulsionam nosso sucesso.
            </p>
          </div>

          <div className="mt-12 grid gap-8 sm:grid-cols-2 lg:grid-cols-4">
            {membros.map((membro) => (
              <div key={membro.nome} className="text-center">
                <img
                  className="mx-auto h-32 w-32 rounded-full object-cover"
                  src={membro.foto}
                  alt={membro.nome}
                />
                <h3 className="mt-4 text-xl font-semibold text-gray-900">
                  {membro.nome}
                </h3>
                <p className="mt-2 text-gray-500">{membro.cargo}</p>
              </div>
            ))}
          </div>
        </div>
      </div>
    </>
  );
};

export default AboutPage;
