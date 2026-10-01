export interface SiteContact {
  email: string;
  phone: string;
  address: string;
}

export interface SiteSocial {
  label: string;
  url: string;
}

export interface SiteInfo {
  name: string;
  mark: string;
  year: string;
  contact: SiteContact;
  social: SiteSocial[];
}

export type PageType =
  | "cover"
  | "contents"
  | "products"
  | "dataAnalysis"
  | "about"
  | "values"
  | "caseStudy"
  | "global"
  | "services"
  | "contact";

export interface BasePage {
  id: string;
  type: PageType;
  label: string;
  kicker?: string;
  heading?: string;
}

export interface CoverPage extends BasePage {
  type: "cover";
  title: string;
  subtitle: string;
  cta: string;
  image?: string;
}

export interface ContentsPage extends BasePage {
  type: "contents";
  kicker: string;
  heading: string;
  intro: string;
  image?: string;
}

export interface IconItem {
  icon: string;
  title: string;
  description: string;
}

export interface ProductsPage extends BasePage {
  type: "products";
  kicker: string;
  heading: string;
  description: string;
  items: IconItem[];
  gallery?: string[];
}

export interface StatItem {
  label: string;
  value: number;
  suffix?: string;
}

export interface ChartPoint {
  label: string;
  value: number;
}

export interface DataAnalysisPage extends BasePage {
  type: "dataAnalysis";
  kicker: string;
  heading: string;
  description: string;
  stats: StatItem[];
  chart: ChartPoint[];
  image?: string;
}

export interface AboutPage extends BasePage {
  type: "about";
  kicker: string;
  heading: string;
  description: string;
  badge: string;
  points: string[];
  image?: string;
}

export interface ValuesPage extends BasePage {
  type: "values";
  kicker: string;
  heading: string;
  items: IconItem[];
  image?: string;
}

export interface CaseStudyPage extends BasePage {
  type: "caseStudy";
  kicker: string;
  heading: string;
  client: string;
  result: string;
  resultLabel: string;
  challenge: string;
  solution: string;
  outcome: string;
  images?: [string, string];
}

export interface RegionItem {
  name: string;
  value: number;
}

export interface GlobalPage extends BasePage {
  type: "global";
  kicker: string;
  heading: string;
  description: string;
  regions: RegionItem[];
}

export interface ServicesPage extends BasePage {
  type: "services";
  kicker: string;
  heading: string;
  description: string;
  items: IconItem[];
  image?: string;
}

export interface ContactPage extends BasePage {
  type: "contact";
  kicker: string;
  heading: string;
  description: string;
}

export type AnyPage =
  | CoverPage
  | ContentsPage
  | ProductsPage
  | DataAnalysisPage
  | AboutPage
  | ValuesPage
  | CaseStudyPage
  | GlobalPage
  | ServicesPage
  | ContactPage;

export interface ContentData {
  site: SiteInfo;
  pages: AnyPage[];
}

export interface SectionProps<T extends AnyPage = AnyPage> {
  data: T;
  index: number;
  total: number;
  pages: AnyPage[];
  site: SiteInfo;
  onNavigate: (index: number) => void;
}
