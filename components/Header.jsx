"use client";

import { useEffect, useState } from "react";
import Image from "next/image";
import Link from "next/link";
import { usePathname } from "next/navigation";
import { AnimatePresence, motion } from "framer-motion";
import { navItems, contact } from "@/data/navigation";
import { setScrollLocked } from "@/components/motion/SmoothScroll";
import Magnetic from "@/components/motion/Magnetic";
import "./Header.css";

const ease = [0.16, 1, 0.3, 1];

export default function Header() {
  const pathname = usePathname();
  const [scrolled, setScrolled] = useState(false);
  const [hidden, setHidden] = useState(false);
  const [menuOpen, setMenuOpen] = useState(false);
  const [hovered, setHovered] = useState(null);
  const [previousPath, setPreviousPath] = useState(pathname);

  // Close the menu when the route changes.
  if (previousPath !== pathname) {
    setPreviousPath(pathname);
    setMenuOpen(false);
  }

  // Only the home page opens on a dark, full-bleed hero.
  const overDarkHero = pathname === "/" && !scrolled && !menuOpen;

  useEffect(() => {
    let lastY = window.scrollY;

    const handleScroll = () => {
      const currentY = window.scrollY;
      const delta = currentY - lastY;
      setScrolled(currentY > 50);

      // Ignore the tiny trailing deltas of smooth scrolling.
      if (currentY <= 400) setHidden(false);
      else if (delta > 4) setHidden(true);
      else if (delta < -4) setHidden(false);

      lastY = currentY;
    };

    handleScroll();
    window.addEventListener("scroll", handleScroll, { passive: true });
    return () => window.removeEventListener("scroll", handleScroll);
  }, []);

  useEffect(() => {
    const handleKeyDown = (event) => {
      if (event.key === "Escape") setMenuOpen(false);
    };

    document.addEventListener("keydown", handleKeyDown);
    document.body.style.overflow = menuOpen ? "hidden" : "";
    document.documentElement.classList.toggle("overlay-open", menuOpen);
    setScrollLocked(menuOpen);

    return () => {
      document.removeEventListener("keydown", handleKeyDown);
      document.body.style.overflow = "";
      document.documentElement.classList.remove("overlay-open");
      setScrollLocked(false);
    };
  }, [menuOpen]);

  const isActiveLink = (href) =>
    pathname === href || pathname.startsWith(`${href}/`);

  const activeHref = navItems.find((item) => isActiveLink(item.href))?.href;
  const indicatorHref = hovered ?? activeHref;

  const headerClass = [
    "site-header",
    scrolled ? "is-scrolled" : "",
    overDarkHero ? "is-dark" : "is-light",
    hidden && !menuOpen ? "is-hidden" : "",
    menuOpen ? "is-menu-open" : "",
  ].join(" ");

  return (
    <>
      <header className={headerClass}>
        <div className="header-container">
          <Link
            href="/"
            className="header-logo"
            aria-label="AF7 Apparel Fastener home"
          >
            <Image
              src="/logos/af7logofornavybg.svg"
              alt=""
              width={150}
              height={48}
              className="header-logo-light"
              preload
            />
            <Image
              src="/logos/af7forwhitebg.svg"
              alt=""
              width={150}
              height={48}
              className="header-logo-dark"
              preload
            />
          </Link>

          <nav
            className="desktop-navigation"
            aria-label="Primary navigation"
            onMouseLeave={() => setHovered(null)}
          >
            {navItems.map((item) => (
              <Link
                key={item.href}
                href={item.href}
                onMouseEnter={() => setHovered(item.href)}
                onFocus={() => setHovered(item.href)}
                onBlur={() => setHovered(null)}
                className={isActiveLink(item.href) ? "is-active" : ""}
                aria-current={isActiveLink(item.href) ? "page" : undefined}
              >
                <span className="nav-roll" data-text={item.label}>
                  <span>{item.label}</span>
                </span>
                {indicatorHref === item.href ? (
                  <motion.span
                    layoutId="nav-indicator"
                    className="nav-indicator"
                    transition={{ type: "spring", stiffness: 420, damping: 36 }}
                  />
                ) : null}
              </Link>
            ))}
          </nav>

          <div className="header-right">
            <Magnetic strength={0.25}>
              <Link href="/contact" className="inquire-button">
                <span>Inquire</span>
                <span className="inquire-arrow" aria-hidden="true">
                  ↗
                </span>
              </Link>
            </Magnetic>

            <button
              type="button"
              className={`mobile-menu-button ${menuOpen ? "is-open" : ""}`}
              onClick={() => setMenuOpen((current) => !current)}
              aria-label={menuOpen ? "Close navigation" : "Open navigation"}
              aria-expanded={menuOpen}
              aria-controls="mobile-navigation"
            >
              <span className="burger-line" />
              <span className="burger-line" />
            </button>
          </div>
        </div>
      </header>

      <AnimatePresence>
        {menuOpen ? (
          <motion.div
            className="mobile-navigation"
            id="mobile-navigation"
            role="dialog"
            aria-modal="true"
            aria-label="Site navigation"
            initial={{ clipPath: "inset(0% 0% 100% 0%)" }}
            animate={{ clipPath: "inset(0% 0% 0% 0%)" }}
            exit={{
              clipPath: "inset(0% 0% 100% 0%)",
              transition: { duration: 0.6, ease: [0.76, 0, 0.24, 1], delay: 0.1 },
            }}
            transition={{ duration: 0.8, ease: [0.76, 0, 0.24, 1] }}
            data-lenis-prevent
          >
            <motion.nav
              aria-label="Mobile navigation"
              initial="hidden"
              animate="visible"
              exit="hidden"
              variants={{
                hidden: { transition: { staggerChildren: 0.03, staggerDirection: -1 } },
                visible: { transition: { staggerChildren: 0.07, delayChildren: 0.3 } },
              }}
            >
              {navItems.map((item, index) => (
                <motion.div
                  key={item.href}
                  className="mobile-link-mask"
                  variants={{
                    hidden: { y: "110%", opacity: 0 },
                    visible: { y: "0%", opacity: 1, transition: { duration: 0.9, ease } },
                  }}
                >
                  <Link
                    href={item.href}
                    onClick={() => setMenuOpen(false)}
                    className={isActiveLink(item.href) ? "is-active" : ""}
                  >
                    <span className="mobile-index">0{index + 1}</span>
                    <span className="mobile-label">{item.label}</span>
                    <span className="mobile-arrow" aria-hidden="true">
                      ↗
                    </span>
                  </Link>
                </motion.div>
              ))}

              <motion.div
                variants={{
                  hidden: { opacity: 0, y: 20 },
                  visible: { opacity: 1, y: 0, transition: { duration: 0.8, ease } },
                }}
              >
                <Link
                  href="/contact"
                  className="mobile-inquire"
                  onClick={() => setMenuOpen(false)}
                >
                  <span>Make an Inquiry</span>
                  <span aria-hidden="true">↗</span>
                </Link>
              </motion.div>
            </motion.nav>

            <motion.div
              className="mobile-footer"
              initial={{ opacity: 0 }}
              animate={{ opacity: 1, transition: { delay: 0.7 } }}
              exit={{ opacity: 0, transition: { duration: 0.2 } }}
            >
              <a href={contact.phoneHref}>{contact.phone}</a>
              <a href={contact.instagram} target="_blank" rel="noopener noreferrer">
                {contact.instagramHandle}
              </a>
              <span>LAHORE · PAKISTAN</span>
            </motion.div>
          </motion.div>
        ) : null}
      </AnimatePresence>
    </>
  );
}
