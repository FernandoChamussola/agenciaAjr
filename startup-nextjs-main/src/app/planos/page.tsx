import Breadcrumb from "@/components/Common/Breadcrumb";
import Pricing from "@/components/Pricing";

import { Metadata } from "next";

export const metadata: Metadata = {
  title: "Planos - Agência AJR",
  description: "Escolha o plano ideal para o seu negócio. Oferecemos soluções completas de marketing digital e tecnologia adaptadas às suas necessidades.",
};

const PlanosPage = () => {
  return (
    <>
      <Breadcrumb
        pageName="Nossos Planos"
        description="Escolha o plano ideal para o seu negócio. Oferecemos soluções completas de marketing digital e tecnologia adaptadas às suas necessidades."
      />
      <Pricing />
    </>
  );
};

export default PlanosPage;
