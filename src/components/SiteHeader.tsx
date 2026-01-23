"use client";

import Image from "next/image";
import Link from "next/link";
import CtaDropdown from "@/components/CtaDropdown";
import LanguageToggle from "@/components/LanguageToggle";
import { useState } from "react";

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
  const [logoReady, setLogoReady] = useState(false);
  const navClasses = `${
    animateNav ? "nav-sweep " : ""
  }order-3 flex flex-wrap items-center gap-4 text-xs uppercase tracking-[0.3em] text-[var(--muted)] md:order-2 md:ml-auto md:justify-end`;

  return (
    <header className="fixed left-0 right-0 top-0 z-50 border-b border-[var(--line)] bg-black">
      <button
        type="button"
        className="logo-sweep-motion logo-sweep-button"
        onClick={() => window.location.reload()}
        aria-label="Обновить сайт"
        disabled={!logoReady}
        onAnimationEnd={() => setLogoReady(true)}
      >
        <Image
          className="logo-sweep-img"
          src="/q-logo.png"
          alt=""
          width={64}
          height={64}
        />
      </button>
      <div className="container-main relative z-10 py-4">
        <div className="flex flex-col gap-4 md:flex-row md:items-center">
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
