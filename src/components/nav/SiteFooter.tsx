"use client";

import { Mail, Phone, MapPin, Sprout, ArrowUp } from "lucide-react";
import type { AnyPage, SiteInfo } from "@/types/content";

interface SiteFooterProps {
  pages: AnyPage[];
  site: SiteInfo;
  onNavigate: (index: number) => void;
}

const headingClass =
  "text-[11px] font-semibold uppercase tracking-[0.25em] text-brand-300";

export default function SiteFooter({ pages, site, onNavigate }: SiteFooterProps) {
  return (
    <footer className="relative w-full bg-brand-950 text-paper-100">
      <div className="px-7 pt-16 pb-10 sm:px-12 lg:px-20">
        <div className="grid gap-12 sm:grid-cols-2 lg:grid-cols-[1.4fr_1fr_1.2fr_0.8fr]">
          <div>
            <div className="flex items-center gap-2">
              <span className="flex h-8 w-8 items-center justify-center rounded-full border border-paper-50/20">
                <Sprout size={14} className="text-brand-400" />
              </span>
              <span className="text-xs font-semibold uppercase tracking-[0.25em] text-paper-50">
                {site.name}
              </span>
            </div>
            {site.tagline && (
              <p className="mt-5 max-w-xs text-sm leading-relaxed text-paper-200/70">
                {site.tagline}
              </p>
            )}
          </div>

          <nav aria-label="Footer">
            <h3 className={headingClass}>Explore</h3>
            <ul className="mt-5 grid grid-cols-2 gap-x-6 gap-y-2.5 text-sm text-paper-200/80">
              {pages.map((page, i) => (
                <li key={page.id}>
                  <button
                    onClick={() => onNavigate(i)}
                    className="text-left transition hover:text-brand-300"
                  >
                    {page.label}
                  </button>
                </li>
              ))}
            </ul>
          </nav>

          <div>
            <h3 className={headingClass}>Contact</h3>
            <ul className="mt-5 flex flex-col gap-3 text-sm text-paper-200/80">
              <li>
                <a
                  href={`mailto:${site.contact.email}`}
                  className="flex items-center gap-3 transition hover:text-brand-300"
                >
                  <Mail size={14} className="shrink-0 text-brand-400" />
                  {site.contact.email}
                </a>
              </li>
              <li>
                <a
                  href={`tel:${site.contact.phone}`}
                  className="flex items-center gap-3 transition hover:text-brand-300"
                >
                  <Phone size={14} className="shrink-0 text-brand-400" />
                  {site.contact.phone}
                </a>
              </li>
              <li className="flex items-center gap-3">
                <MapPin size={14} className="shrink-0 text-brand-400" />
                {site.contact.address}
              </li>
            </ul>
          </div>

          <div>
            <h3 className={headingClass}>Follow</h3>
            <ul className="mt-5 flex flex-col gap-2.5 text-sm text-paper-200/80">
              {site.social.map((item) => (
                <li key={item.label}>
                  <a
                    href={item.url}
                    target="_blank"
                    rel="noopener noreferrer"
                    className="transition hover:text-brand-300"
                  >
                    {item.label}
                  </a>
                </li>
              ))}
            </ul>
          </div>
        </div>
      </div>

      <div className="border-t border-paper-100/10 px-7 py-5 sm:px-12 lg:px-20">
        <div className="grid grid-cols-1 items-center justify-items-center gap-4 text-center text-[11px] font-medium uppercase tracking-[0.25em] text-paper-100/60 sm:grid-cols-3">
          <span className="sm:justify-self-start sm:text-left">
            © {new Date().getFullYear()} {site.name}. All rights reserved.
          </span>
          <span className="sm:justify-self-center">
            Developed by{" "}
            <a
              href="https://vikrams.vercel.app/"
              target="_blank"
              rel="noopener noreferrer"
              className="text-paper-100 transition hover:text-brand-300"
            >
              Vikram
            </a>
          </span>
          <button
            onClick={() => onNavigate(0)}
            className="flex items-center gap-2 transition hover:text-brand-300 sm:justify-self-end"
          >
            <ArrowUp size={12} />
            Back to top
          </button>
        </div>
      </div>
    </footer>
  );
}
