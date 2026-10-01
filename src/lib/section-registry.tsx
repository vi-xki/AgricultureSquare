import type { ComponentType } from "react";
import type { AnyPage, SectionProps } from "@/types/content";
import CoverSection from "@/components/sections/CoverSection";
import ContentsSection from "@/components/sections/ContentsSection";
import ProductsSection from "@/components/sections/ProductsSection";
import DataAnalysisSection from "@/components/sections/DataAnalysisSection";
import AboutSection from "@/components/sections/AboutSection";
import ValuesSection from "@/components/sections/ValuesSection";
import CaseStudySection from "@/components/sections/CaseStudySection";
import GlobalSection from "@/components/sections/GlobalSection";
import ServicesSection from "@/components/sections/ServicesSection";
import ContactSection from "@/components/sections/ContactSection";

export const sectionRegistry: Record<
  AnyPage["type"],
  ComponentType<SectionProps<any>>
> = {
  cover: CoverSection,
  contents: ContentsSection,
  products: ProductsSection,
  dataAnalysis: DataAnalysisSection,
  about: AboutSection,
  values: ValuesSection,
  caseStudy: CaseStudySection,
  global: GlobalSection,
  services: ServicesSection,
  contact: ContactSection,
};
