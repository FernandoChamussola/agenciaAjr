"use client";

import Image from "next/image";
import Link from "next/link";

const Footer = () => {
  return (
    <footer className="relative overflow-hidden bg-slate-950 pt-20 text-white">
      {/* Logo watermark */}
      <div className="pointer-events-none absolute inset-0 flex items-center justify-center opacity-[0.06]">
        <Image
          src="/images/logoAJR.ico"
          alt="Agência AJR watermark"
          width={600}
          height={600}
          className="select-none"
        />
      </div>

      <div className="container relative z-10">
        <div className="-mx-4 flex flex-wrap gap-y-12">
          {/* Sobre */}
          <div className="w-full px-4 md:w-1/2 lg:w-4/12">
            <p className="max-w-[360px] text-base leading-relaxed text-gray-400">
              A <strong className="text-white">Agência AJR</strong> é parceira de
              negócios que desejam crescer no digital. Criamos soluções
              estratégicas em marketing, branding e tecnologia focadas em
              resultado.
            </p>

            {/* Social */}
            <div className="mt-6 flex items-center gap-6">
              {[
                {
                  href: "https://www.facebook.com/share/1Bbuevsdd3/",
                  label: "Facebook",
                  icon: (
                    <path d="M12.1 10.49V7.43c0-1.19.98-2.15 2.2-2.15h2.2V2.05l-2.99-.21C10.97 1.67 8.8 3.64 8.8 6.13v4.36H5.5v3.22h3.3v6.45h3.3v-6.45h3.3l1.1-3.22h-4.4Z" />
                  ),
                },
                {
                  href: "https://www.instagram.com/agenciaajr",
                  label: "Instagram",
                  icon: (
                    <path d="M11 3.67c-2.39 0-2.69.01-3.59.05-.9.04-1.51.18-2.05.39a4.2 4.2 0 0 0-2.42 2.42c-.21.54-.35 1.15-.39 2.05-.04.9-.05 1.2-.05 3.59s.01 2.69.05 3.59c.04.9.18 1.51.39 2.05a4.2 4.2 0 0 0 2.42 2.42c.54.21 1.15.35 2.05.39.9.04 1.2.05 3.59.05s2.69-.01 3.59-.05c.9-.04 1.51-.18 2.05-.39a4.2 4.2 0 0 0 2.42-2.42c.21-.54.35-1.15.39-2.05.04-.9.05-1.2.05-3.59s-.01-2.69-.05-3.59c-.04-.9-.18-1.51-.39-2.05a4.2 4.2 0 0 0-2.42-2.42c-.54-.21-1.15-.35-2.05-.39-.9-.04-1.2-.05-3.59-.05Z" />
                  ),
                },
                {
                  href: "https://www.tiktok.com/@agenciaajr8",
                  label: "TikTok",
                  icon: (
                    <path d="M19.59 6.69a4.83 4.83 0 0 1-3.77-4.25V2h-3.45v13.67a2.89 2.89 0 1 1-2.89-2.9c.3 0 .59.05.88.13V9.4a6.84 6.84 0 0 0-1-.05A6.33 6.33 0 1 0 15.86 15.67v-7a8.16 8.16 0 0 0 4.77 1.52V6.79a4.85 4.85 0 0 1-1-.1Z" />
                  ),
                },
              ].map(({ href, label, icon }) => (
                <a
                  key={label}
                  href={href}
                  aria-label={label}
                  target="_blank"
                  rel="noopener noreferrer"
                  className="text-gray-400 transition hover:text-primary"
                >
                  <svg width="20" height="20" viewBox="0 0 22 22" fill="currentColor">
                    {icon}
                  </svg>
                </a>
              ))}
            </div>
          </div>

          {/* Links */}
          <div className="w-full px-4 sm:w-1/2 lg:w-2/12">
            <h3 className="mb-6 text-lg font-semibold">Links</h3>
            <ul className="space-y-4 text-gray-400">
              <li><Link href="/blog" className="hover:text-primary">Blog</Link></li>
              <li><Link href="/services" className="hover:text-primary">Serviços</Link></li>
              <li><Link href="/about" className="hover:text-primary">Sobre</Link></li>
            </ul>
          </div>

          {/* Contato */}
          <div className="w-full px-4 sm:w-1/2 lg:w-3/12">
            <h3 className="mb-6 text-lg font-semibold">Contato</h3>
            <ul className="space-y-4 text-gray-400">
              <li>Beira, Moçambique</li>
              <li>+258 85 691 6694</li>
              <li>contato@agenciaajr.com</li>
            </ul>
          </div>

          {/* Suporte */}
          <div className="w-full px-4 sm:w-1/2 lg:w-3/12">
            <h3 className="mb-6 text-lg font-semibold">Suporte</h3>
            <ul className="space-y-4 text-gray-400">
              <li><Link href="/contact" className="hover:text-primary">Contato</Link></li>
              <li><Link href="/portfolio" className="hover:text-primary">Portfólio</Link></li>
            </ul>
          </div>
        </div>

        {/* Divider */}
        <div className="my-12 h-px w-full bg-white/10" />

        {/* Copyright */}
        <p className="pb-8 text-center text-sm text-gray-500">
          © 2025 Agência AJR — Todos os direitos reservados.
        </p>
      </div>
    </footer>
  );
};

export default Footer;
