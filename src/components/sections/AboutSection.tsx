"use client";

import React from "react";
import Image from "next/image";
import { SectionContainer } from "@/components/ui/SectionContainer";
import { SKILLS } from "@/data/constants";
import { useLanguage } from "@/contexts/LanguageContext";

export const AboutSection: React.FC = () => {
  const { t } = useLanguage();

  const skillsByCategory = {
    frontend: SKILLS.filter((s) => s.category === "frontend"),
    backend: SKILLS.filter((s) => s.category === "backend"),
    mobile: SKILLS.filter((s) => s.category === "mobile"),
    data: SKILLS.filter((s) => s.category === "data"),
    design: SKILLS.filter((s) => s.category === "design"),
  };

  return (
    <SectionContainer id="about" background="alt">
      <div className="max-w-6xl mx-auto">
        {/* Section Header */}
        {/* <div className="text-center mb-10">
          <h2 className="text-4xl md:text-5xl font-bold mb-4">
            {t.about.title}{" "}
            <span className="gradient-text">{t.about.titleHighlight}</span>
          </h2>
          <div className="w-20 h-1 bg-gradient-primary mx-auto rounded-full"></div>
        </div> */}

        <div className="container relative z-10">
          <div className="grid grid-cols-1 lg:grid-cols-2 gap-12 items-center">
            {/* image - left content*/}
            <div
              className="relative animate-fade-in"
              style={{ animationDelay: "0.2s" }}
            >
              <div className="relative aspect-square rounded-3xl overflow-hidden glow-md">
                <Image
                  src="/me.jpeg"
                  alt="Professional developer workspace"
                  fill
                  className="object-cover"
                  priority
                />
                {/* Overlay Gradient */}
                <div className="absolute inset-0 bg-gradient-to-t from-purple-900/30 to-transparent"></div>
              </div>
            </div>

            {/* About Content - right content*/}
            {/* Section Header */}
            <div>
            <div className="text-center mb-10">
              <h2 className="text-4xl md:text-5xl font-bold mb-4">
                {t.about.title}{" "}
                <span className="gradient-text">{t.about.titleHighlight}</span>
              </h2>
              <div className="w-20 h-1 bg-gradient-primary mx-auto rounded-full"></div>
            </div>
            <div className="mb-16 animate-fade-in-up">
              <p className="text-lg text-slate-300 leading-relaxed text-center max-w-3xl mx-auto">
                {t.about.description}
              </p>
            </div>
            </div>
          </div>
        </div>

        {/* Skills Grid */}
        <div className="space-y-12 mt-16">
          <div className="text-center mb-8">
            <h3 className="text-2xl md:text-3xl font-bold mb-2">
              <span className="gradient-text">{t.about.skillsTitle}</span>
            </h3>
            <p className="text-slate-400">{t.about.skillsSubtitle}</p>
          </div>

          {/* Frontend Skills */}
          <div className="glass rounded-2xl p-6">
            <h4 className="text-xl font-semibold mb-4 text-purple-400">
              {t.about.categories.frontend}
            </h4>
            <div className="grid grid-cols-3 sm:grid-cols-4 md:grid-cols-6 gap-6">
              {skillsByCategory.frontend.map((skill) => (
                <div
                  key={skill.name}
                  className="flex flex-col items-center gap-2 group cursor-pointer"
                >
                  <div className="w-16 h-16 rounded-xl glass-hover flex items-center justify-center p-3 transition-all duration-300 group-hover:scale-110">
                    <Image
                      src={skill.icon}
                      alt={skill.name}
                      width={40}
                      height={40}
                      className="object-contain"
                    />
                  </div>
                  <span className="text-xs text-slate-400 text-center group-hover:text-white transition-colors">
                    {skill.name}
                  </span>
                </div>
              ))}
            </div>
          </div>

          {/* Backend Skills */}
          <div className="glass rounded-2xl p-6">
            <h4 className="text-xl font-semibold mb-4 text-blue-400">
              {t.about.categories.backend}
            </h4>
            <div className="grid grid-cols-3 sm:grid-cols-4 md:grid-cols-6 gap-6">
              {skillsByCategory.backend.map((skill) => (
                <div
                  key={skill.name}
                  className="flex flex-col items-center gap-2 group cursor-pointer"
                >
                  <div className="w-16 h-16 rounded-xl glass-hover flex items-center justify-center p-3 transition-all duration-300 group-hover:scale-110">
                    <Image
                      src={skill.icon}
                      alt={skill.name}
                      width={40}
                      height={40}
                      className="object-contain"
                    />
                  </div>
                  <span className="text-xs text-slate-400 text-center group-hover:text-white transition-colors">
                    {skill.name}
                  </span>
                </div>
              ))}
            </div>
          </div>

          {/* Mobile & Other Skills */}
          <div className="grid md:grid-cols-2 gap-6">
            <div className="glass rounded-2xl p-6">
              <h4 className="text-xl font-semibold mb-4 text-green-400">
                {t.about.categories.mobile}
              </h4>
              <div className="grid grid-cols-2 sm:grid-cols-4 gap-6">
                {skillsByCategory.mobile.map((skill) => (
                  <div
                    key={skill.name}
                    className="flex flex-col items-center gap-2 group cursor-pointer"
                  >
                    <div className="w-16 h-16 rounded-xl glass-hover flex items-center justify-center p-3 transition-all duration-300 group-hover:scale-110">
                      <Image
                        src={skill.icon}
                        alt={skill.name}
                        width={40}
                        height={40}
                        className="object-contain"
                      />
                    </div>
                    <span className="text-xs text-slate-400 text-center group-hover:text-white transition-colors">
                      {skill.name}
                    </span>
                  </div>
                ))}
              </div>
            </div>

            <div className="glass rounded-2xl p-6">
              <h4 className="text-xl font-semibold mb-4 text-yellow-400">
                {t.about.categories.dataDesign}
              </h4>
              <div className="grid grid-cols-2 sm:grid-cols-4 gap-6">
                {[...skillsByCategory.data, ...skillsByCategory.design].map(
                  (skill) => (
                    <div
                      key={skill.name}
                      className="flex flex-col items-center gap-2 group cursor-pointer"
                    >
                      <div className="w-16 h-16 rounded-xl glass-hover flex items-center justify-center p-3 transition-all duration-300 group-hover:scale-110">
                        <Image
                          src={skill.icon}
                          alt={skill.name}
                          width={40}
                          height={40}
                          className="object-contain"
                        />
                      </div>
                      <span className="text-xs text-slate-400 text-center group-hover:text-white transition-colors">
                        {skill.name}
                      </span>
                    </div>
                  )
                )}
              </div>
            </div>
          </div>
        </div>
      </div>
    </SectionContainer>
  );
};
