"use client";

import Image from "next/image";
import Link from "next/link";
import CtaDropdown from "@/components/CtaDropdown";
import LanguageToggle from "@/components/LanguageToggle";

type NavItem = {
  label: string;
  href: string;
};

type SiteHeaderProps = {
  navItems: NavItem[];
  telegram: string;
  email: string;
  animateNav?: boolean;
};

export default function SiteHeader({
  navItems,
  telegram,
  email,
  animateNav = false,
}: SiteHeaderProps) {
  const navClasses = `${
    animateNav ? "nav-sweep " : ""
  }order-3 flex flex-wrap items-center gap-4 text-xs uppercase tracking-[0.3em] text-[var(--muted)] md:order-2 md:ml-auto md:justify-end`;

  return (
    <header className="fixed left-0 right-0 top-0 z-50 border-b border-[var(--line)] bg-black">
      <div className="logo-sweep" aria-hidden="true">
        <div className="logo-sweep-motion">
          <Image
            className="logo-sweep-img"
            src="/q-logo.png"
            alt=""
            width={64}
            height={64}
          />
        </div>
      </div>
      <div className="container-main relative z-10 py-4">
        <div className="flex flex-col gap-4 md:flex-row md:items-center">
          <button
            type="button"
            className="logo-button"
            onClick={() => window.location.reload()}
            aria-label="Обновить сайт"
          >
            <Image
              className="logo-mark"
              src="/q-logo.png"
              alt=""
              width={32}
              height={32}
            />
          </button>
          <CtaDropdown variant="header" telegram={telegram} email={email} />
          <nav className={navClasses}>
            {navItems.map((item) => (
              <Link key={item.href} className="link-underline" href={item.href}>
                {item.label}
              </Link>
            ))}
            <LanguageToggle />
          </nav>
        </div>
      </div>
    </header>
  );
}
