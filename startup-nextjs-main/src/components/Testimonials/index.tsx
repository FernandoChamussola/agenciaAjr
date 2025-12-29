import { Testimonial } from "@/types/testimonial";
import SectionTitle from "../Common/SectionTitle";
import SingleTestimonial from "./SingleTestimonial";

const testimonialData: Testimonial[] = [
  {
    id: 1,
    name: "Camila Nunes",
    designation: "Diretora de Comunicação",
    content:
      "A AJR entendeu exatamente o que a nossa marca precisava. O time é criativo, ágil e entrega mais do que promete.",
    image: "https://images.unsplash.com/photo-1494790108755-2616b612b786?w=150&h=150&fit=crop&crop=face",
    star: 5,
  },
  {
    id: 2,
    name: "Marcos Pinto",
    designation: "Empreendedor",
    content:
      "Eles criaram toda a nossa presença digital do zero. Site, identidade visual e campanhas… tudo impecável!",
    image: "https://images.unsplash.com/photo-1507003211169-0a1dd7228f2d?w=150&h=150&fit=crop&crop=face",
    star: 5,
  },
  {
    id: 3,
    name: "Leticia W. Gentry",
    designation: "Gestora de Projetos",
    content:
      "O atendimento é humano, rápido e muito profissional. A AJR realmente se preocupa com o sucesso do cliente.",
    image: "https://images.unsplash.com/photo-1438761681033-6461ffad8d80?w=150&h=150&fit=crop&crop=face",
    star: 5,
  },
  {
    id: 4,
    name: "Sandro Lopes",
    designation: "Gerente Comercial",
    content:
      "Os anúncios criados por eles aumentaram nossas vendas em mais de 40%. Eles sabem o que fazem!",
    image: "https://images.unsplash.com/photo-1472099645785-5658abf4ff4e?w=150&h=150&fit=crop&crop=face",
    star: 5,
  },
  {
    id: 5,
    name: "Ann C. Sands",
    designation: "Cofundadora da TechUp",
    content:
      "Trabalhar com a AJR foi uma das melhores decisões que tomamos. Comunicação clara, estratégia eficiente e resultados reais.",
    image: "https://images.unsplash.com/photo-1544005313-94ddf0286df2?w=150&h=150&fit=crop&crop=face",
    star: 5,
  },
];

const Testimonials = () => {
  return (
    <section className="relative z-10 py-16 md:py-20 lg:py-28 bg-gray-50 dark:bg-gray-900">
      <div className="container mx-auto px-4 sm:px-6 lg:px-8">
        <SectionTitle
          title="O que nossos clientes dizem"
          paragraph="Clientes satisfeitos são nosso melhor marketing. Resultados reais e confiança comprovada."
          center
        />

        {/* Grid de depoimentos */}
        <div className="mt-16 grid grid-cols-1 gap-12 md:grid-cols-2 lg:grid-cols-3">
          {testimonialData.map((testimonial) => (
            <SingleTestimonial
              key={testimonial.id}
              testimonial={testimonial}
            />
          ))}
        </div>
      </div>

      {/* Background decorativo sutil */}
      <div className="absolute right-0 top-5 z-[-1] opacity-20">
        {/* SVG de destaque */}
      </div>
      <div className="absolute bottom-5 left-0 z-[-1] opacity-20">
        {/* SVG de destaque */}
      </div>
    </section>
  );
};

export default Testimonials;
