"use client";
import SectionTitle from "../Common/SectionTitle";
import OfferList from "./OfferList";
import PricingBox from "./PricingBox";
import { useQuote } from "@/contexts/QuoteContext";

const Pricing = () => {
  const { openQuoteModal } = useQuote();

  return (
    <section id="pricing" className="relative z-10 py-16 md:py-20 lg:py-28">
      <div className="container">
        <SectionTitle
          title="Nossos Planos de Serviços"
          paragraph="Escolha o plano ideal para o seu negócio. Oferecemos soluções completas de marketing digital e tecnologia adaptadas às suas necessidades."
          center
          width="665px"
        />

        <div className="grid grid-cols-1 gap-x-8 gap-y-10 md:grid-cols-2 lg:grid-cols-4">
          <PricingBox
            packageName="INICIANTE"
            price="3.500"
            duration="mês"
            subtitle="Ideal para pequenas empresas e startups que querem dar os primeiros passos no digital"
            onRequestQuote={() => openQuoteModal("INICIANTE")}
          >
            <OfferList text="1 sessão de consultoria em marketing" status="active" />
            <OfferList text="Gestão de 1 rede social" status="active" />
            <OfferList text="2 posts por mês" status="active" />
          </PricingBox>
          <PricingBox
            packageName="CRESCIMENTO"
            price="5.000"
            duration="mês"
            subtitle="Perfeito para empresas em expansão, que precisam de mais visibilidade"
            onRequestQuote={() => openQuoteModal("CRESCIMENTO")}
          >
            <OfferList text="2 sessões de consultoria em marketing" status="active" />
            <OfferList text="Gestão de 2 redes sociais" status="active" />
            <OfferList text="Website básico" status="active" />
            <OfferList text="4 posts por mês" status="active" />
          </PricingBox>
          <PricingBox
            packageName="PREMIUM"
            price="10.000"
            duration="mês"
            subtitle="Para empresas consolidadas que querem presença digital completa"
            isPopular={true}
            onRequestQuote={() => openQuoteModal("PREMIUM")}
          >
            <OfferList text="3 sessões de consultoria em marketing" status="active" />
            <OfferList text="Gestão de todas as redes sociais" status="active" />
            <OfferList text="Website avançado" status="active" />
            <OfferList text="8 posts por mês" status="active" />
            <OfferList text="Gestão de anúncios online" status="active" />
          </PricingBox>
          <PricingBox
            packageName="PERSONALIZADO"
            price="Sob consulta"
            duration=""
            subtitle="Ideal para negócios com necessidades específicas, que querem flexibilidade"
            onRequestQuote={() => openQuoteModal("PERSONALIZADO")}
          >
            <OfferList text="Serviços personalizados" status="active" />
            <OfferList text="Consultoria sob demanda" status="active" />
            <OfferList text="Gestão de redes sociais" status="active" />
            <OfferList text="Website customizado" status="active" />
            <OfferList text="Branding e design" status="active" />
          </PricingBox>
        </div>
      </div>

      <div className="absolute bottom-0 left-0 z-[-1]">
        <svg
          width="239"
          height="601"
          viewBox="0 0 239 601"
          fill="none"
          xmlns="http://www.w3.org/2000/svg"
        >
          <rect
            opacity="0.3"
            x="-184.451"
            y="600.973"
            width="196"
            height="541.607"
            rx="2"
            transform="rotate(-128.7 -184.451 600.973)"
            fill="url(#paint0_linear_93:235)"
          />
          <rect
            opacity="0.3"
            x="-188.201"
            y="385.272"
            width="59.7544"
            height="541.607"
            rx="2"
            transform="rotate(-128.7 -188.201 385.272)"
            fill="url(#paint1_linear_93:235)"
          />
          <defs>
            <linearGradient
              id="paint0_linear_93:235"
              x1="-90.1184"
              y1="420.414"
              x2="-90.1184"
              y2="1131.65"
              gradientUnits="userSpaceOnUse"
            >
              <stop stopColor="#ff7a00" />
              <stop offset="1" stopColor="#ff7a00" stopOpacity="0" />
            </linearGradient>
            <linearGradient
              id="paint1_linear_93:235"
              x1="-159.441"
              y1="204.714"
              x2="-159.441"
              y2="915.952"
              gradientUnits="userSpaceOnUse"
            >
              <stop stopColor="#ff7a00" />
              <stop offset="1" stopColor="#ff7a00" stopOpacity="0" />
            </linearGradient>
          </defs>
        </svg>
      </div>
    </section>
  );
};

export default Pricing;
