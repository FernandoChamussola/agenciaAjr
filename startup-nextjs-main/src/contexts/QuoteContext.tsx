"use client";
import { createContext, useContext, useState, ReactNode } from "react";

interface QuoteContextType {
  isModalOpen: boolean;
  selectedPlan: string;
  openQuoteModal: (planName?: string) => void;
  closeQuoteModal: () => void;
}

const QuoteContext = createContext<QuoteContextType | undefined>(undefined);

export function QuoteProvider({ children }: { children: ReactNode }) {
  const [isModalOpen, setIsModalOpen] = useState(false);
  const [selectedPlan, setSelectedPlan] = useState("");

  const openQuoteModal = (planName: string = "") => {
    setSelectedPlan(planName);
    setIsModalOpen(true);
  };

  const closeQuoteModal = () => {
    setIsModalOpen(false);
    setTimeout(() => setSelectedPlan(""), 300); // Limpa após fechar
  };

  return (
    <QuoteContext.Provider
      value={{ isModalOpen, selectedPlan, openQuoteModal, closeQuoteModal }}
    >
      {children}
    </QuoteContext.Provider>
  );
}

export function useQuote() {
  const context = useContext(QuoteContext);
  if (context === undefined) {
    throw new Error("useQuote must be used within a QuoteProvider");
  }
  return context;
}
