import {
  Wheat,
  Sprout,
  Droplets,
  Package,
  Leaf,
  ShieldCheck,
  Users,
  TrendingUp,
  Tractor,
  BarChart3,
  Truck,
  GraduationCap,
  Globe2,
  Mail,
  Phone,
  MapPin,
  type LucideIcon,
} from "lucide-react";

export const iconMap: Record<string, LucideIcon> = {
  wheat: Wheat,
  sprout: Sprout,
  droplets: Droplets,
  package: Package,
  leaf: Leaf,
  shieldCheck: ShieldCheck,
  users: Users,
  trendingUp: TrendingUp,
  tractor: Tractor,
  barChart: BarChart3,
  truck: Truck,
  graduationCap: GraduationCap,
  globe: Globe2,
  mail: Mail,
  phone: Phone,
  mapPin: MapPin,
};

export function getIcon(name: string): LucideIcon {
  return iconMap[name] ?? Leaf;
}
