"use client";

import { useState } from "react";
import Image from "@/components/BaseImage";
import Link from "next/link";
import { AnimatePresence, LayoutGroup, motion } from "framer-motion";
import { productFilters, products } from "@/data/products";

const filters = productFilters.map((f) => ({
  label: f.label,
  match: (p) => f.id === "all" || p.family === f.id,
}));

const ease = [0.16, 1, 0.3, 1];

export default function ProductsExplorer() {
  const [filter, setFilter] = useState("All");
  const active = filters.find((item) => item.label === filter);
  const visible = products.filter(active.match);

  return (
    <LayoutGroup>
      <div className="products-filters" role="toolbar" aria-label="Filter products">
        {filters.map((item) => {
          const count = products.filter(item.match).length;
          const isActive = item.label === filter;
          return (
            <button
              key={item.label}
              type="button"
              className={`products-filter ${isActive ? "is-active" : ""}`}
              onClick={() => setFilter(item.label)}
              aria-pressed={isActive}
            >
              {isActive ? (
                <motion.span
                  layoutId="products-filter-pill"
                  className="products-filter-pill"
                  transition={{ type: "spring", stiffness: 400, damping: 34 }}
                />
              ) : null}
              <span className="products-filter-label">{item.label}</span>
              <span className="products-filter-count">{String(count).padStart(2, "0")}</span>
            </button>
          );
        })}
      </div>

      <motion.div layout className="products-grid">
        <AnimatePresence mode="popLayout">
          {visible.map((product, index) => (
            <motion.article
              layout
              key={product.slug}
              className="products-card"
              initial={{ opacity: 0, y: 40, scale: 0.96 }}
              animate={{ opacity: 1, y: 0, scale: 1 }}
              exit={{ opacity: 0, scale: 0.94, transition: { duration: 0.3 } }}
              transition={{ duration: 0.8, delay: index * 0.05, ease }}
            >
              <Link href={`/products/${product.slug}`} className="products-card-link">
                <div className="products-card-image">
                  <Image
                    src={product.cover}
                    alt={`AF7 ${product.title}`}
                    fill
                    sizes="(max-width: 700px) 100vw, (max-width: 1100px) 50vw, 33vw"
                  />
                  <span className="products-card-tag">{product.code}</span>
                  {product.size ? (
                    <span className="products-card-size">{product.size}</span>
                  ) : null}
                  <span className="products-card-count">{product.images.length} views</span>
                </div>
                <div className="products-card-body">
                  <div className="products-card-title">
                    <span>{product.number}</span>
                    <h3>{product.title}</h3>
                  </div>
                  <p>{product.summary}</p>
                  <div className="products-card-footer">
                    <span>{product.familyLabel}</span>
                    <span className="products-card-arrow" aria-hidden="true">↗</span>
                  </div>
                </div>
              </Link>
            </motion.article>
          ))}
        </AnimatePresence>
      </motion.div>
    </LayoutGroup>
  );
}
