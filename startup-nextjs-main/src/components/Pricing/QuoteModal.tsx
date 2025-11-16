"use client";
import { useState } from "react";

interface QuoteModalProps {
  isOpen: boolean;
  onClose: () => void;
  planName: string;
}

const QuoteModal = ({ isOpen, onClose, planName }: QuoteModalProps) => {
  const [formData, setFormData] = useState({
    name: "",
    email: "",
    phone: "",
    company: "",
    description: "",
  });
  const [isSubmitting, setIsSubmitting] = useState(false);
  const [submitStatus, setSubmitStatus] = useState<"idle" | "success" | "error">("idle");

  if (!isOpen) return null;

  const handleSubmit = async (e: React.FormEvent) => {
    e.preventDefault();
    setIsSubmitting(true);
    setSubmitStatus("idle");

    try {
      const response = await fetch("/api/send-quote", {
        method: "POST",
        headers: {
          "Content-Type": "application/json",
        },
        body: JSON.stringify({
          ...formData,
          planName,
        }),
      });

      if (response.ok) {
        setSubmitStatus("success");
        setFormData({
          name: "",
          email: "",
          phone: "",
          company: "",
          description: "",
        });
        setTimeout(() => {
          onClose();
          setSubmitStatus("idle");
        }, 2000);
      } else {
        setSubmitStatus("error");
      }
    } catch (error) {
      console.error("Erro ao enviar:", error);
      setSubmitStatus("error");
    } finally {
      setIsSubmitting(false);
    }
  };

  const handleChange = (e: React.ChangeEvent<HTMLInputElement | HTMLTextAreaElement>) => {
    setFormData({
      ...formData,
      [e.target.name]: e.target.value,
    });
  };

  return (
    <div
      className="fixed inset-0 z-50 flex items-center justify-center bg-black/50 p-4 overflow-y-auto"
      onClick={onClose}
    >
      <div
        className="bg-white dark:bg-gray-dark relative w-full max-w-lg rounded-lg shadow-lg my-8"
        onClick={(e) => e.stopPropagation()}
      >
        <div className="sticky top-0 bg-white dark:bg-gray-dark rounded-t-lg border-b border-gray-200 dark:border-gray-700 px-6 py-4 flex items-center justify-between">
          <div>
            <h2 className="text-xl font-bold text-black dark:text-white">
              Solicitar Orçamento
            </h2>
            <p className="text-sm text-body-color mt-1">
              Plano: <span className="font-semibold text-primary">{planName}</span>
            </p>
          </div>
          <button
            onClick={onClose}
            className="text-gray-500 hover:text-gray-700 dark:text-gray-400 dark:hover:text-gray-200 transition"
          >
            <svg
              className="h-6 w-6"
              fill="none"
              stroke="currentColor"
              viewBox="0 0 24 24"
            >
              <path
                strokeLinecap="round"
                strokeLinejoin="round"
                strokeWidth={2}
                d="M6 18L18 6M6 6l12 12"
              />
            </svg>
          </button>
        </div>

        <div className="px-6 py-4 max-h-[calc(90vh-200px)] overflow-y-auto">

        <form onSubmit={handleSubmit}>
          <div className="mb-4">
            <label className="text-dark mb-2 block text-sm font-medium dark:text-white">
              Nome Completo *
            </label>
            <input
              type="text"
              name="name"
              value={formData.name}
              onChange={handleChange}
              required
              className="border-stroke dark:border-dark-3 dark:bg-dark-2 w-full rounded-xs border bg-transparent px-4 py-3 text-base text-black outline-none focus:border-primary dark:text-white"
              placeholder="Seu nome completo"
            />
          </div>

          <div className="mb-4">
            <label className="text-dark mb-2 block text-sm font-medium dark:text-white">
              Email *
            </label>
            <input
              type="email"
              name="email"
              value={formData.email}
              onChange={handleChange}
              required
              className="border-stroke dark:border-dark-3 dark:bg-dark-2 w-full rounded-xs border bg-transparent px-4 py-3 text-base text-black outline-none focus:border-primary dark:text-white"
              placeholder="seu@email.com"
            />
          </div>

          <div className="mb-4">
            <label className="text-dark mb-2 block text-sm font-medium dark:text-white">
              Telefone *
            </label>
            <input
              type="tel"
              name="phone"
              value={formData.phone}
              onChange={handleChange}
              required
              className="border-stroke dark:border-dark-3 dark:bg-dark-2 w-full rounded-xs border bg-transparent px-4 py-3 text-base text-black outline-none focus:border-primary dark:text-white"
              placeholder="+258 8X XXX XXXX"
            />
          </div>

          <div className="mb-4">
            <label className="text-dark mb-2 block text-sm font-medium dark:text-white">
              Empresa
            </label>
            <input
              type="text"
              name="company"
              value={formData.company}
              onChange={handleChange}
              className="border-stroke dark:border-dark-3 dark:bg-dark-2 w-full rounded-xs border bg-transparent px-4 py-3 text-base text-black outline-none focus:border-primary dark:text-white"
              placeholder="Nome da sua empresa"
            />
          </div>

          {planName === "PERSONALIZADO" && (
            <div className="mb-4">
              <label className="text-dark mb-2 block text-sm font-medium dark:text-white">
                Descreva suas necessidades *
              </label>
              <textarea
                name="description"
                value={formData.description}
                onChange={handleChange}
                required={planName === "PERSONALIZADO"}
                rows={4}
                className="border-stroke dark:border-dark-3 dark:bg-dark-2 w-full rounded-xs border bg-transparent px-4 py-3 text-base text-black outline-none focus:border-primary dark:text-white"
                placeholder="Descreva o que você precisa..."
              />
            </div>
          )}

          {submitStatus === "success" && (
            <div className="mb-4 rounded-xs bg-green-100 p-4 text-green-700 dark:bg-green-900/30 dark:text-green-400">
              Orçamento enviado com sucesso! Entraremos em contato em breve.
            </div>
          )}

          {submitStatus === "error" && (
            <div className="mb-4 rounded-xs bg-red-100 p-4 text-red-700 dark:bg-red-900/30 dark:text-red-400">
              Erro ao enviar orçamento. Por favor, tente novamente.
            </div>
          )}
        </form>
        </div>

        <div className="sticky bottom-0 bg-white dark:bg-gray-dark rounded-b-lg border-t border-gray-200 dark:border-gray-700 px-6 py-4">
          <div className="flex gap-4">
            <button
              type="button"
              onClick={onClose}
              className="border-stroke hover:bg-gray-2 dark:border-dark-3 dark:hover:bg-dark-3 flex-1 rounded-xs border px-6 py-3 text-base font-medium text-black transition dark:text-white"
            >
              Cancelar
            </button>
            <button
              type="submit"
              disabled={isSubmitting}
              onClick={(e) => {
                e.preventDefault();
                const form = document.querySelector('form') as HTMLFormElement;
                if (form) {
                  form.requestSubmit();
                }
              }}
              className="bg-primary hover:bg-primary/90 flex-1 rounded-xs px-6 py-3 text-base font-medium text-white transition disabled:opacity-50 disabled:cursor-not-allowed"
            >
              {isSubmitting ? "Enviando..." : "Enviar Solicitação"}
            </button>
          </div>
        </div>
      </div>
    </div>
  );
};

export default QuoteModal;
