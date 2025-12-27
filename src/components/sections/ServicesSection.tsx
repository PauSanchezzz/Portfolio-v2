"use client";

import React from "react";
import { Card } from "@/components/ui/Card";
import { SectionContainer } from "@/components/ui/SectionContainer";
import { serviceTranslations } from "@/data/contentTranslations";
import { useLanguage } from "@/contexts/LanguageContext";

// Service icons as SVG components
const DesignIcon = () => (
  <svg
    className="w-12 h-12"
    viewBox="0 0 24 24"
    fill="none"
    stroke="currentColor"
  >
    <path
      strokeLinecap="round"
      strokeLinejoin="round"
      strokeWidth={1.5}
      d="M7 21a4 4 0 01-4-4V5a2 2 0 012-2h4a2 2 0 012 2v12a4 4 0 01-4 4zm0 0a4 4 0 004-4v-4a2 2 0 012-2h4a2 2 0 012 2v4a4 4 0 01-4 4h-4z"
    />
    <path
      strokeLinecap="round"
      strokeLinejoin="round"
      strokeWidth={1.5}
      d="M16 7h.01M7 7h.01"
    />
  </svg>
);

const FrontendIcon = () => (
  <svg
    className="w-12 h-12"
    viewBox="0 0 24 24"
    fill="none"
    stroke="currentColor"
  >
    <path
      strokeLinecap="round"
      strokeLinejoin="round"
      strokeWidth={1.5}
      d="M10 20l4-16m4 4l4 4-4 4M6 16l-4-4 4-4"
    />
  </svg>
);

const BackendIcon = () => (
  <svg
    className="w-12 h-12"
    viewBox="0 0 24 24"
    fill="none"
    stroke="currentColor"
  >
    <path
      strokeLinecap="round"
      strokeLinejoin="round"
      strokeWidth={1.5}
      d="M5 12h14M5 12a2 2 0 01-2-2V6a2 2 0 012-2h14a2 2 0 012 2v4a2 2 0 01-2 2M5 12a2 2 0 00-2 2v4a2 2 0 002 2h14a2 2 0 002-2v-4a2 2 0 00-2-2m-2-4h.01M17 16h.01"
    />
  </svg>
);

const MobileIcon = () => (
  <svg
    className="w-12 h-12"
    viewBox="0 0 24 24"
    fill="none"
    stroke="currentColor"
  >
    <path
      strokeLinecap="round"
      strokeLinejoin="round"
      strokeWidth={1.5}
      d="M12 18h.01M8 21h8a2 2 0 002-2V5a2 2 0 00-2-2H8a2 2 0 00-2 2v14a2 2 0 002 2z"
    />
  </svg>
);

const DataIcon = () => (
  <svg
    className="w-12 h-12"
    viewBox="0 0 24 24"
    fill="none"
    stroke="currentColor"
  >
    <path
      strokeLinecap="round"
      strokeLinejoin="round"
      strokeWidth={1.5}
      d="M9 19v-6a2 2 0 00-2-2H5a2 2 0 00-2 2v6a2 2 0 002 2h2a2 2 0 002-2zm0 0V9a2 2 0 012-2h2a2 2 0 012 2v10m-6 0a2 2 0 002 2h2a2 2 0 002-2m0 0V5a2 2 0 012-2h2a2 2 0 012 2v14a2 2 0 01-2 2h-2a2 2 0 01-2-2z"
    />
  </svg>
);

const serviceKeys = [
  { id: "ui-ux-design", icon: DesignIcon },
  { id: "frontend-development", icon: FrontendIcon },
  { id: "backend-development", icon: BackendIcon },
  { id: "android-development", icon: MobileIcon },
  { id: "data-analysis", icon: DataIcon },
] as const;

export const ServicesSection: React.FC = () => {
  const { language, t } = useLanguage();

  return (
    <SectionContainer id="services" background="alt">
      <div className="max-w-7xl mx-auto">
        {/* Section Header */}
        <div className="text-center mb-16">
          <h2 className="text-4xl md:text-5xl font-bold mb-4">
            {t.services.title}{" "}
            <span className="gradient-text">{t.services.titleHighlight}</span>
          </h2>
          <div className="w-20 h-1 bg-gradient-primary mx-auto rounded-full mb-4"></div>
          <p className="text-lg text-slate-400 max-w-2xl mx-auto">
            {t.services.subtitle}
          </p>
        </div>

        {/* Services Grid */}
        <div className="grid grid-cols-1 md:grid-cols-2 lg:grid-cols-3 gap-6">
          {serviceKeys.map((service) => {
            const translatedService =
              serviceTranslations[language][service.id];
            const IconComponent = service.icon;

            return (
              <Card key={service.id} className="text-center group h-full">
                {/* Icon */}
                <div className="mb-4 flex justify-center">
                  <div className="w-16 h-16 rounded-2xl bg-gradient-primary flex items-center justify-center text-white group-hover:scale-110 transition-transform duration-300 glow">
                    <IconComponent />
                  </div>
                </div>

                {/* Title */}
                <h3 className="text-lg font-bold mb-3 text-white group-hover:bg-clip-text group-hover:bg-gradient-primary transition-all">
                  {translatedService.title}
                </h3>

                {/* Description */}
                <p className="text-slate-400 leading-relaxed text-sm">
                  {translatedService.description}
                </p>
              </Card>
            );
          })}
        </div>

        {/* CTA Section */}
        <div className="mt-16 text-center">
          <div className="glass rounded-3xl p-8 md:p-12">
            <h3 className="text-2xl md:text-3xl font-bold mb-4">
              {t.services.cta.title}{" "}
              <span className="gradient-text">
                {t.services.cta.titleHighlight}
              </span>
              ?
            </h3>
            <p className="text-slate-400 mb-6 max-w-2xl mx-auto">
              {t.services.cta.description}
            </p>
            <a
              href="#contact"
              className="btn btn-primary inline-flex items-center gap-2"
            >
              {t.services.cta.button}
              <svg
                className="w-5 h-5"
                fill="none"
                stroke="currentColor"
                viewBox="0 0 24 24"
              >
                <path
                  strokeLinecap="round"
                  strokeLinejoin="round"
                  strokeWidth={2}
                  d="M13 7l5 5m0 0l-5 5m5-5H6"
                />
              </svg>
            </a>
          </div>
        </div>
      </div>
    </SectionContainer>
  );
};
