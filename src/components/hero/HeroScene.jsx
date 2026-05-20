import { useEffect, useState } from "react";
import { motion, AnimatePresence } from "framer-motion";

import "./HeroScene.css";

const terminalMessages = [
  "> Initializing portfolio...",
  "> Loading full-stack systems...",
  "> Connecting AI workflows...",
  "> Deploying scalable services...",
  "> Optimizing backend architecture...",
  "> Monitoring distributed systems...",
  "> Scaling cloud infrastructure...",
  "> Syncing developer environment...",
  "> Running production checks...",
  "> Systems operational.",
];

const stackItems = [
  "React",
  "Node.js",
  "Spring Boot",
  "MongoDB",
  "Docker",
  "System Design",
];

const MAX_VISIBLE_LINES = 6;

const HeroScene = () => {
  // Each entry: { id, text, isCls }
  const [visibleLines, setVisibleLines] = useState([]);

  useEffect(() => {
    let cancelled = false;
    let idCounter = 0;

    const delay = (ms) =>
      new Promise((resolve) => {
        const t = setTimeout(resolve, ms);
        // store so we can cancel — handled via `cancelled` flag
        return t;
      });

    const addLine = (text, isCls = false) => {
      if (cancelled) return;
      const id = idCounter++;
      setVisibleLines((prev) => {
        const next = [...prev, { id, text, isCls }];
        return next.length > MAX_VISIBLE_LINES
          ? next.slice(next.length - MAX_VISIBLE_LINES)
          : next;
      });
    };

    const clearAll = () => {
      if (cancelled) return;
      setVisibleLines([]);
    };

    const run = async () => {
      while (!cancelled) {
        // Stream messages one by one
        for (let i = 0; i < terminalMessages.length; i++) {
          if (cancelled) return;
          addLine(terminalMessages[i]);
          await delay(900);
        }

        // Wait 1 sec after "Systems operational."
        await delay(1000);
        if (cancelled) return;

        // Show cls line
        addLine("cls", true);
        await delay(1000);
        if (cancelled) return;

        // Instant clear — real terminal cls behaviour
        clearAll();

        // Brief pause before restarting
        await delay(1500);
      }
    };

    run();

    return () => {
      cancelled = true;
    };
  }, []);

  return (
    <div className="hero-scene">

      {/* glow */}
      <div className="terminal-glow" />

      {/* grid */}
      <div className="terminal-grid" />

      {/* terminal */}
      <motion.div
        className="terminal-window"
        initial={{ opacity: 0, y: 30 }}
        animate={{ opacity: 1, y: 0 }}
        transition={{ duration: 0.8 }}
      >

        {/* header */}
        <div className="terminal-header">
          <div className="terminal-dots">
            <span className="dot red" />
            <span className="dot yellow" />
            <span className="dot green" />
          </div>
          <p className="terminal-title">SG • SYSTEM TERMINAL</p>
        </div>

        {/* body */}
        <div className="terminal-body">

          {/* terminal feed */}
          <div className="terminal-feed">
            <AnimatePresence initial={false} mode="popLayout">
              {visibleLines.map((line, index) => {
                const isLast = index === visibleLines.length - 1;

                return (
                  <motion.p
                    key={line.id}
                    layout="position"

                    initial={{ opacity: 0, y: 20 }}

                    animate={{ opacity: 1, y: 0 }}

                    exit={{ opacity: 0, y: -20 }}

                    transition={{
                      duration: 0.35,
                      ease: "easeOut",
                    }}

                    className={`terminal-line ${isLast ? "active-line" : ""} ${
                      line.isCls ? "cls-line" : ""
                    }`}
                  >
                    {line.text}

                    {isLast && !line.isCls && (
                      <span className="terminal-cursor">|</span>
                    )}
                  </motion.p>
                );
              })}
            </AnimatePresence>
          </div>

          {/* stack pills — stay mounted always */}
          <div className="stack-grid">
            {stackItems.map((item, index) => (
              <motion.div
                key={item}
                className="stack-pill"
                initial={{ opacity: 0, scale: 0.9 }}
                animate={{ opacity: 1, scale: 1 }}
                transition={{ delay: 1 + index * 0.08 }}
              >
                {item}
              </motion.div>
            ))}
          </div>

        </div>

      </motion.div>

    </div>
  );
};

export default HeroScene;