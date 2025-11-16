"use client";
import { useEffect, useRef } from "react";

const Brands = () => {
  const scrollRef = useRef<HTMLDivElement>(null);

  useEffect(() => {
    const scrollContainer = scrollRef.current;
    if (!scrollContainer) return;

    let scrollPosition = 0;
    const scroll = () => {
      scrollPosition += 1;
      if (scrollPosition >= scrollContainer.scrollWidth / 2) {
        scrollPosition = 0;
      }
      scrollContainer.scrollLeft = scrollPosition;
    };

    const interval = setInterval(scroll, 30);
    return () => clearInterval(interval);
  }, []);

  // Array com 12 instâncias da Agencia AJR para criar efeito de loop infinito
  const brands = Array(12).fill("Agencia AJR");

  return (
    <section className="pt-16">
      <div className="container">
        <div className="-mx-4 flex flex-wrap">
          <div className="w-full px-4">
            <div className="overflow-hidden rounded-xs bg-gray-light px-8 py-8 dark:bg-gray-dark sm:px-10 md:px-[50px] md:py-[40px] xl:p-[50px] 2xl:px-[70px] 2xl:py-[60px]">
              <div
                ref={scrollRef}
                className="flex gap-8 overflow-x-hidden"
                style={{ scrollBehavior: "auto" }}
              >
                {brands.map((brand, index) => (
                  <div
                    key={index}
                    className="flex min-w-[200px] items-center justify-center"
                  >
                    <div className="text-center">
                      <h3 className="text-2xl font-bold text-primary">
                        {brand}
                      </h3>
                      <p className="text-sm text-body-color mt-1">
                        Soluções de Marketing e Inovação
                      </p>
                    </div>
                  </div>
                ))}
              </div>
            </div>
          </div>
        </div>
      </div>
    </section>
  );
};

export default Brands;
