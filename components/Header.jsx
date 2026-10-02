"use client";

import { useEffect, useState } from "react";
import Image from "next/image";
import Link from "next/link";
import { usePathname } from "next/navigation";
import { Menu, X } from "lucide-react";
import "./Header.css";

const navItems = [
  { label: "Products", href: "/products" },
  { label: "Applications", href: "/applications" },
  { label: "About", href: "/about" },
  { label: "Quality", href: "/quality" },
  { label: "Contact", href: "/contact" },
];

export default function Header() {
  const pathname = usePathname();
  const [scrolled, setScrolled] = useState(false);
  const [menuOpen, setMenuOpen] = useState(false);

  useEffect(() => {
    const handleScroll = () => {
      setScrolled(window.scrollY > 50);
    };

    handleScroll();

    window.addEventListener("scroll", handleScroll, { passive: true });

    return () => {
      window.removeEventListener("scroll", handleScroll);
    };
  }, []);

  useEffect(() => {
    const handleKeyDown = (event) => {
      if (event.key === "Escape" && menuOpen) {
        setMenuOpen(false);
      }
    };

    document.addEventListener("keydown", handleKeyDown);
    document.body.style.overflow = menuOpen ? "hidden" : "";

    return () => {
      document.removeEventListener("keydown", handleKeyDown);
      document.body.style.overflow = "";
    };
  }, [menuOpen]);

  const closeMenu = () => {
    setMenuOpen(false);
  };

  const isActiveLink = (href) => {
    if (href === "/") return pathname === "/";
    return pathname === href || pathname.startsWith(`${href}/`);
  };

  return (
    <>
      <header className={`site-header ${scrolled ? "is-scrolled" : ""}`}>
        <div className="header-container">

          <Link
            href="/"
            className="header-logo"
            aria-label="AF7 Apparel Fastener"
          >
            <Image
              src={
                scrolled
                  ? "/logos/af7forwhitebg.svg"
                  : "/logos/af7logofornavybg.svg"
              }
              alt="AF7 Apparel Fastener"
              width={150}
              height={48}
              priority
            />
          </Link>

          <nav className="desktop-navigation" aria-label="Primary navigation">
            {navItems.map((item) => (
              <Link
                key={item.href}
                href={item.href}
                onClick={closeMenu}
                className={isActiveLink(item.href) ? "is-active" : ""}
              >
                {item.label}
              </Link>
            ))}
          </nav>

          <div className="header-right">
            <Link href="/contact" className="inquire-button">
              <span>Inquire</span>
              <span className="inquire-arrow">↗</span>
            </Link>

            <button
              type="button"
              className="mobile-menu-button"
              onClick={() => setMenuOpen((current) => !current)}
              aria-label={menuOpen ? "Close navigation" : "Open navigation"}
              aria-expanded={menuOpen}
              aria-controls="mobile-navigation"
            >
              {menuOpen ? <X size={23} strokeWidth={1.5} /> : <Menu size={23} strokeWidth={1.5} />}
            </button>
          </div>

        </div>
      </header>

      <div
        className={`mobile-navigation ${menuOpen ? "is-open" : ""}`}
        id="mobile-navigation"
        aria-hidden={!menuOpen}
        role="dialog"
        aria-modal="true"
      >
        <nav aria-label="Mobile navigation">
          {navItems.map((item, index) => (
            <Link
              key={item.href}
              href={item.href}
              onClick={closeMenu}
              className={isActiveLink(item.href) ? "is-active" : ""}
            >
              <span className="mobile-index">0{index + 1}</span>
              <span className="mobile-label">{item.label}</span>
              <span className="mobile-arrow" aria-hidden="true">
                ↗
              </span>
            </Link>
          ))}

          <Link href="/contact" className="mobile-inquire" onClick={closeMenu}>
            <span>Make an Inquiry</span>
            <span aria-hidden="true">↗</span>
          </Link>
        </nav>

        <div className="mobile-footer">
          <span>AF7</span>
          <span>APPAREL FASTENER</span>
          <span>LAHORE · PAKISTAN</span>
        </div>
      </div>
    </>
  );
}