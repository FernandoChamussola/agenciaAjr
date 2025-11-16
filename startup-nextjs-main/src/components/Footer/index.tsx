"use client";
import Image from "next/image";
import Link from "next/link";

const Footer = () => {
  return (
    <>
      <footer className="relative z-10 bg-white pt-16 dark:bg-gray-dark md:pt-20 lg:pt-24">
        <div className="container">
          <div className="-mx-4 flex flex-wrap">
            <div className="w-full px-4 md:w-1/2 lg:w-4/12 xl:w-5/12">
              <div className="mb-12 max-w-[360px] lg:mb-16">
                <Link href="/" className="mb-8 inline-block">
                  <Image
                    src="/images/logo/logo-2.svg"
                    alt="logo"
                    className="w-full dark:hidden"
                    width={140}
                    height={30}
                  />
                  <Image
                    src="/images/logo/logo.svg"
                    alt="logo"
                    className="hidden w-full dark:block"
                    width={140}
                    height={30}
                  />
                </Link>
                <p className="mb-9 text-base leading-relaxed text-body-color dark:text-body-color-dark">
                  A AJR é parceira de negócios que desejam se destacar. Criamos
                  soluções inteligentes em marketing, branding e tecnologia que
                  impulsionam a presença da sua empresa.
                </p>
                <div className="flex items-center">
                  <a
                    href="https://www.facebook.com/share/1Bbuevsdd3/"
                    aria-label="Facebook"
                    target="_blank"
                    rel="noopener noreferrer"
                    className="mr-6 text-body-color duration-300 hover:text-primary dark:text-body-color-dark dark:hover:text-primary"
                  >
                    <svg
                      width="18"
                      height="18"
                      viewBox="0 0 22 22"
                      fill="none"
                      xmlns="http://www.w3.org/2000/svg"
                    >
                      <path
                        d="M12.1 10.4939V7.42705C12.1 6.23984 13.085 5.27741 14.3 5.27741H16.5V2.05296L13.5135 1.84452C10.9664 1.66676 8.8 3.63781 8.8 6.13287V10.4939H5.5V13.7183H8.8V20.1667H12.1V13.7183H15.4L16.5 10.4939H12.1Z"
                        fill="currentColor"
                      />
                    </svg>
                  </a>
                  <a
                    href="https://www.instagram.com/agenciaajr?igsh=MXh0eTR1dzBxYThxbQ=="
                    aria-label="Instagram"
                    target="_blank"
                    rel="noopener noreferrer"
                    className="mr-6 text-body-color duration-300 hover:text-primary dark:text-body-color-dark dark:hover:text-primary"
                  >
                    <svg
                      width="18"
                      height="18"
                      viewBox="0 0 22 22"
                      fill="none"
                      xmlns="http://www.w3.org/2000/svg"
                    >
                      <path
                        fillRule="evenodd"
                        clipRule="evenodd"
                        d="M11.0002 3.66675C8.60591 3.66675 8.30724 3.67716 7.40782 3.71841C6.51024 3.75991 5.89724 3.90466 5.36149 4.11166C4.80782 4.32491 4.33574 4.60741 3.86549 5.07766C3.39499 5.54791 3.11274 6.01999 2.89882 6.57341C2.69116 7.10941 2.54607 7.72266 2.50524 8.62C2.46466 9.51941 2.45374 9.81808 2.45374 12.2124C2.45374 14.6067 2.46424 14.9047 2.50541 15.8041C2.54699 16.7019 2.69174 17.3149 2.89874 17.8506C3.11199 18.4042 3.39449 18.8763 3.86474 19.3466C4.33499 19.8171 4.80707 20.0999 5.36032 20.3136C5.89632 20.5206 6.50949 20.6653 7.40682 20.7068C8.30632 20.7481 8.60491 20.7585 10.9991 20.7585C13.3937 20.7585 13.6917 20.7481 14.5911 20.7068C15.4887 20.6653 16.1024 20.5206 16.6384 20.3136C17.1919 20.0999 17.6632 19.8171 18.1332 19.3466C18.6037 18.8763 18.8859 18.4042 19.1002 17.8508C19.3059 17.3149 19.4509 16.7017 19.4929 15.8043C19.5337 14.9049 19.5444 14.6067 19.5444 12.2124C19.5444 9.81808 19.5337 9.51966 19.4929 8.62024C19.4509 7.72241 19.3059 7.10941 19.1002 6.57366C18.8859 6.01999 18.6037 5.54791 18.1332 5.07766C17.6627 4.60716 17.1921 4.32466 16.6379 4.11166C16.1004 3.90466 15.4869 3.75991 14.5889 3.71841C13.6894 3.67716 13.3914 3.66675 10.9964 3.66675H11.0002ZM10.2574 5.23091C10.4822 5.23058 10.7294 5.23091 11.0002 5.23091C13.3527 5.23091 13.6324 5.23983 14.5207 5.28058C15.3404 5.31841 15.7837 5.45883 16.0769 5.57658C16.4694 5.73033 16.7509 5.91466 17.0467 6.21066C17.3427 6.50666 17.527 6.78858 17.681 7.18108C17.7987 7.47408 17.9394 7.91733 17.977 8.73708C18.0177 9.62516 18.0274 9.90508 18.0274 12.2101C18.0274 14.5152 18.0177 14.7951 17.977 15.6832C17.9392 16.5029 17.7987 16.9462 17.681 17.2392C17.5272 17.6317 17.3427 17.9128 17.0467 18.2086C16.7507 18.5046 16.4697 18.6889 16.0769 18.8427C15.784 18.9609 15.3404 19.1011 14.5207 19.1389C13.6327 19.1796 13.3527 19.1894 11.0002 19.1894C8.64749 19.1894 8.36774 19.1796 7.47966 19.1389C6.65991 19.1008 6.21666 18.9604 5.92332 18.8426C5.53082 18.6889 5.24891 18.5046 4.95291 18.2086C4.65691 17.9126 4.47257 17.6314 4.31857 17.2386C4.20082 16.9456 4.06016 16.5024 4.02257 15.6826C3.98182 14.7946 3.97266 14.5146 3.97266 12.2079C3.97266 9.90116 3.98182 9.62291 4.02257 8.73483C4.06041 7.91508 4.20082 7.47183 4.31857 7.17858C4.47232 6.78608 4.65691 6.50416 4.95291 6.20816C5.24891 5.91216 5.53082 5.72783 5.92332 5.57383C6.21649 5.45558 6.65991 5.31541 7.47966 5.27741C8.25324 5.24216 8.56874 5.23033 10.2574 5.22833V5.23091ZM15.5694 6.66341C15.0329 6.66341 14.5977 7.09833 14.5977 7.63508C14.5977 8.17158 15.0329 8.60683 15.5694 8.60683C16.1059 8.60683 16.5412 8.17158 16.5412 7.63508C16.5412 7.09858 16.1059 6.66341 15.5694 6.66341ZM11.0002 7.88833C8.48699 7.88833 6.44891 9.92641 6.44891 12.4396C6.44891 14.9529 8.48699 16.9901 11.0002 16.9901C13.5134 16.9901 15.5509 14.9529 15.5509 12.4396C15.5509 9.92641 13.5132 7.88833 11.0002 7.88833ZM11.0002 9.45249C12.6492 9.45249 13.9862 10.7894 13.9862 12.4385C13.9862 14.0874 12.6492 15.4245 11.0002 15.4245C9.35107 15.4245 8.01416 14.0874 8.01416 12.4385C8.01416 10.7894 9.35107 9.45249 11.0002 9.45249Z"
                        fill="currentColor"
                      />
                    </svg>
                  </a>
                  <a
                    href="https://www.tiktok.com/@agenciaajr8?_r=1&_t=ZM-91Ptlbdyswa"
                    aria-label="TikTok"
                    target="_blank"
                    rel="noopener noreferrer"
                    className="text-body-color duration-300 hover:text-primary dark:text-body-color-dark dark:hover:text-primary"
                  >
                    <svg
                      width="18"
                      height="18"
                      viewBox="0 0 24 24"
                      fill="none"
                      xmlns="http://www.w3.org/2000/svg"
                    >
                      <path
                        d="M19.59 6.69a4.83 4.83 0 0 1-3.77-4.25V2h-3.45v13.67a2.89 2.89 0 0 1-5.2 1.74 2.89 2.89 0 0 1 2.31-4.64 2.93 2.93 0 0 1 .88.13V9.4a6.84 6.84 0 0 0-1-.05A6.33 6.33 0 0 0 5 20.1a6.34 6.34 0 0 0 10.86-4.43v-7a8.16 8.16 0 0 0 4.77 1.52v-3.4a4.85 4.85 0 0 1-1-.1z"
                        fill="currentColor"
                      />
                    </svg>
                  </a>
                </div>
              </div>
            </div>

            <div className="w-full px-4 sm:w-1/2 md:w-1/2 lg:w-2/12 xl:w-2/12">
              <div className="mb-12 lg:mb-16">
                <h2 className="mb-10 text-xl font-bold text-black dark:text-white">
                  Links Úteis
                </h2>
                <ul>
                  <li>
                    <Link
                      href="/blog"
                      className="mb-4 inline-block text-base text-body-color duration-300 hover:text-primary dark:text-body-color-dark dark:hover:text-primary"
                    >
                      Blog
                    </Link>
                  </li>
                  <li>
                    <Link
                      href="/services"
                      className="mb-4 inline-block text-base text-body-color duration-300 hover:text-primary dark:text-body-color-dark dark:hover:text-primary"
                    >
                      Nossos Serviços
                    </Link>
                  </li>
                  <li>
                    <Link
                      href="/about"
                      className="mb-4 inline-block text-base text-body-color duration-300 hover:text-primary dark:text-body-color-dark dark:hover:text-primary"
                    >
                      Sobre Nós
                    </Link>
                  </li>
                </ul>
              </div>
            </div>

            <div className="w-full px-4 sm:w-1/2 md:w-1/2 lg:w-2/12 xl:w-2/12">
              <div className="mb-12 lg:mb-16">
                <h2 className="mb-10 text-xl font-bold text-black dark:text-white">
                  Informações de Contato
                </h2>
                <ul>
                  <li className="mb-4 text-base text-body-color dark:text-body-color-dark">
                    Avenida Samora Machel, MZ - Beira
                  </li>
                  <li className="mb-4 text-base text-body-color dark:text-body-color-dark">
                    +258 856916694
                  </li>
                  <li className="mb-4 text-base text-body-color dark:text-body-color-dark">
                    contato@agenciaajr.com
                  </li>
                </ul>
              </div>
            </div>

            <div className="w-full px-4 md:w-1/2 lg:w-4/12 xl:w-3/12">
              <div className="mb-12 lg:mb-16">
                <h2 className="mb-10 text-xl font-bold text-black dark:text-white">
                  Suporte
                </h2>
                <ul>
                  <li>
                    <Link
                      href="/contact"
                      className="mb-4 inline-block text-base text-body-color duration-300 hover:text-primary dark:text-body-color-dark dark:hover:text-primary"
                    >
                      Entre em contato conosco
                    </Link>
                  </li>
                  <li>
                    <Link
                      href="/portfolio"
                      className="mb-4 inline-block text-base text-body-color duration-300 hover:text-primary dark:text-body-color-dark dark:hover:text-primary"
                    >
                      Portfólio
                    </Link>
                  </li>
                  <li>
                    <Link
                      href="/about"
                      className="mb-4 inline-block text-base text-body-color duration-300 hover:text-primary dark:text-body-color-dark dark:hover:text-primary"
                    >
                      Sobre Nós
                    </Link>
                  </li>
                </ul>
              </div>
            </div>
          </div>

          <div className="h-px w-full bg-linear-to-r from-transparent via-[#D2D8E183] to-transparent dark:via-[#959CB183]"></div>
          <div className="py-8">
            <p className="text-center text-base text-body-color dark:text-white">
              © 2025 Feito com Amor – Agência AJR. Todos Direitos Reservados.
            </p>
          </div>
        </div>
        <div className="absolute right-0 top-14 z-[-1]">
          <svg
            width="55"
            height="99"
            viewBox="0 0 55 99"
            fill="none"
            xmlns="http://www.w3.org/2000/svg"
          >
            <circle opacity="0.8" cx="49.5" cy="49.5" r="49.5" fill="#959CB1" />
            <mask
              id="mask0_94:899"
              style={{ maskType: "alpha" }}
              maskUnits="userSpaceOnUse"
              x="0"
              y="0"
              width="99"
              height="99"
            >
              <circle
                opacity="0.8"
                cx="49.5"
                cy="49.5"
                r="49.5"
                fill="#ff7a00"
              />
            </mask>
            <g mask="url(#mask0_94:899)">
              <circle
                opacity="0.8"
                cx="49.5"
                cy="49.5"
                r="49.5"
                fill="url(#paint0_radial_94:899)"
              />
              <g opacity="0.8" filter="url(#filter0_f_94:899)">
                <circle cx="53.8676" cy="26.2061" r="20.3824" fill="white" />
              </g>
            </g>
            <defs>
              <filter
                id="filter0_f_94:899"
                x="12.4852"
                y="-15.1763"
                width="82.7646"
                height="82.7646"
                filterUnits="userSpaceOnUse"
                colorInterpolationFilters="sRGB"
              >
                <feFlood floodOpacity="0" result="BackgroundImageFix" />
                <feBlend
                  mode="normal"
                  in="SourceGraphic"
                  in2="BackgroundImageFix"
                  result="shape"
                />
                <feGaussianBlur
                  stdDeviation="10.5"
                  result="effect1_foregroundBlur_94:899"
                />
              </filter>
              <radialGradient
                id="paint0_radial_94:899"
                cx="0"
                cy="0"
                r="1"
                gradientUnits="userSpaceOnUse"
                gradientTransform="translate(49.5 49.5) rotate(90) scale(53.1397)"
              >
                <stop stopOpacity="0.47" />
                <stop offset="1" stopOpacity="0" />
              </radialGradient>
            </defs>
          </svg>
        </div>
        <div className="absolute bottom-24 left-0 z-[-1]">
          <svg
            width="79"
            height="94"
            viewBox="0 0 79 94"
            fill="none"
            xmlns="http://www.w3.org/2000/svg"
          >
            <rect
              opacity="0.3"
              x="-41"
              y="26.9426"
              width="66.6675"
              height="66.6675"
              transform="rotate(-22.9007 -41 26.9426)"
              fill="url(#paint0_linear_94:889)"
            />
            <rect
              x="-41"
              y="26.9426"
              width="66.6675"
              height="66.6675"
              transform="rotate(-22.9007 -41 26.9426)"
              stroke="url(#paint1_linear_94:889)"
              strokeWidth="0.7"
            />
            <path
              opacity="0.3"
              d="M50.5215 7.42229L20.325 1.14771L46.2077 62.3249L77.1885 68.2073L50.5215 7.42229Z"
              fill="url(#paint2_linear_94:889)"
            />
            <path
              d="M50.5215 7.42229L20.325 1.14771L46.2077 62.3249L76.7963 68.2073L50.5215 7.42229Z"
              stroke="url(#paint3_linear_94:889)"
              strokeWidth="0.7"
            />
            <path
              opacity="0.3"
              d="M17.9721 93.3057L-14.9695 88.2076L46.2077 62.325L77.1885 68.2074L17.9721 93.3057Z"
              fill="url(#paint4_linear_94:889)"
            />
            <path
              d="M17.972 93.3057L-14.1852 88.2076L46.2077 62.325L77.1884 68.2074L17.972 93.3057Z"
              stroke="url(#paint5_linear_94:889)"
              strokeWidth="0.7"
            />
            <defs>
              <linearGradient
                id="paint0_linear_94:889"
                x1="-41"
                y1="21.8445"
                x2="36.9671"
                y2="59.8878"
                gradientUnits="userSpaceOnUse"
              >
                <stop stopColor="#ff7a00" stopOpacity="0.62" />
                <stop offset="1" stopColor="#ff7a00" stopOpacity="0" />
              </linearGradient>
              <linearGradient
                id="paint1_linear_94:889"
                x1="25.6675"
                y1="95.9631"
                x2="-42.9608"
                y2="20.668"
                gradientUnits="userSpaceOnUse"
              >
                <stop stopColor="#ff7a00" stopOpacity="0" />
                <stop offset="1" stopColor="#ff7a00" stopOpacity="0.51" />
              </linearGradient>
              <linearGradient
                id="paint2_linear_94:889"
                x1="20.325"
                y1="-3.98039"
                x2="90.6248"
                y2="25.1062"
                gradientUnits="userSpaceOnUse"
              >
                <stop stopColor="#ff7a00" stopOpacity="0.62" />
                <stop offset="1" stopColor="#ff7a00" stopOpacity="0" />
              </linearGradient>
              <linearGradient
                id="paint3_linear_94:889"
                x1="18.3642"
                y1="-1.59742"
                x2="113.9"
                y2="80.6826"
                gradientUnits="userSpaceOnUse"
              >
                <stop stopColor="#ff7a00" stopOpacity="0" />
                <stop offset="1" stopColor="#ff7a00" stopOpacity="0.51" />
              </linearGradient>
              <linearGradient
                id="paint4_linear_94:889"
                x1="61.1098"
                y1="62.3249"
                x2="-8.82468"
                y2="58.2156"
                gradientUnits="userSpaceOnUse"
              >
                <stop stopColor="#ff7a00" stopOpacity="0.62" />
                <stop offset="1" stopColor="#ff7a00" stopOpacity="0" />
              </linearGradient>
              <linearGradient
                id="paint5_linear_94:889"
                x1="65.4236"
                y1="65.0701"
                x2="24.0178"
                y2="41.6598"
                gradientUnits="userSpaceOnUse"
              >
                <stop stopColor="#ff7a00" stopOpacity="0" />
                <stop offset="1" stopColor="#ff7a00" stopOpacity="0.51" />
              </linearGradient>
            </defs>
          </svg>
        </div>
      </footer>
    </>
  );
};

export default Footer;
