"use client";

import { useEffect, useState } from "react";
import { scrollToTop } from "./motion/SmoothScroll";

const formatter = new Intl.DateTimeFormat("en-GB", {
  timeZone: "Asia/Karachi",
  hour: "2-digit",
  minute: "2-digit",
});

export default function FooterClock() {
  const [time, setTime] = useState("");

  useEffect(() => {
    const update = () => setTime(formatter.format(new Date()));
    update();
    const timer = window.setInterval(update, 15000);
    return () => window.clearInterval(timer);
  }, []);

  return (
    <span className="footer-bar-center">
      <span>Lahore · Pakistan{time ? ` · ${time} PKT` : ""}</span>
      <button type="button" className="footer-top" onClick={scrollToTop}>
        Back to top <span aria-hidden="true">↑</span>
      </button>
    </span>
  );
}
