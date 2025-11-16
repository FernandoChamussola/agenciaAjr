"use client";

import { ThemeProvider } from "next-themes";
import { QuoteProvider } from "@/contexts/QuoteContext";
import QuoteModal from "@/components/Pricing/QuoteModal";
import { useQuote } from "@/contexts/QuoteContext";

function QuoteModalWrapper() {
  const { isModalOpen, selectedPlan, closeQuoteModal } = useQuote();
  return (
    <QuoteModal
      isOpen={isModalOpen}
      onClose={closeQuoteModal}
      planName={selectedPlan}
    />
  );
}

export function Providers({ children }: { children: React.ReactNode }) {
  return (
    <ThemeProvider attribute="class" enableSystem={false} defaultTheme="dark" forcedTheme="dark">
      <QuoteProvider>
        {children}
        <QuoteModalWrapper />
      </QuoteProvider>
    </ThemeProvider>
  );
}
