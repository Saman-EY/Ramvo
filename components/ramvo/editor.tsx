"use client";

import { useState } from "react";
import { Play, Check, Terminal, CodeXml, Atom, Boxes, Container, Braces, FileCode } from "lucide-react";
import { Button } from "@/components/ui/button";

const techs = [
  { name: "React", icon: Atom, cls: "react" },
  { name: "Next.js", icon: CodeXml, cls: "next" },
  { name: "TypeScript", icon: FileCode, cls: "typescript" },
  { name: "Node.js", icon: Boxes, cls: "node" },
  { name: "Python", icon: Braces, cls: "python" },
  { name: "Docker", icon: Container, cls: "docker" },
];

export function Editor() {
  const [tab, setTab] = useState("website.tsx");
  const [run, setRun] = useState(false);
  return (
    <div className="editor-scene" dir="ltr">
      <div className="scene-grid" />
      <div className="editor">
        <div className="editor-bar">
          <div className="window-dots">
            <i />
            <i />
            <i />
          </div>
          <span>ramvo / your-next-big-idea</span>
          <CodeXml size={15} />
        </div>
        <div className="editor-tabs">
          {["website.tsx", "design.css"].map((t) => (
            <Button
              key={t}
              variant="ghost"
              className={tab === t ? "selected" : ""}
              onClick={() => {
                setTab(t);
                setRun(false);
              }}
            >
              <FileCode size={14} />
              {t}
              <span>×</span>
            </Button>
          ))}
        </div>
        <div className="editor-code">
          {tab === "website.tsx" ? (
            <>
              <div>
                <em>01</em>
                <span className="code-comment">{"// Great ideas deserve great engineering."}</span>
              </div>
              <div>
                <em>02</em>
                <span>
                  <span className="code-violet">import</span> {"{"} <span className="code-cream">createExperience</span> {"}"}{" "}
                  <span className="code-violet">from</span> <span className="code-green">&apos;ramvo&apos;</span>;
                </span>
              </div>
              <div>
                <em>03</em>
              </div>
              <div>
                <em>04</em>
                <span>
                  <span className="code-violet">const</span> project = <span className="code-gold">createExperience</span>({"{"}
                </span>
              </div>
              <div>
                <em>05</em>
                <span>
                  {" "}
                  idea: <span className="code-green">&apos;Your vision, our code&apos;</span>,
                </span>
              </div>
              <div>
                <em>06</em>
                <span>
                  {" "}
                  stack: [<span className="code-green">&apos;React&apos;</span>, <span className="code-green">&apos;Next.js&apos;</span>],
                </span>
              </div>
              <div>
                <em>07</em>
                <span>
                  {" "}
                  performance: <span className="code-gold">100</span>,
                </span>
              </div>
              <div>
                <em>08</em>
                <span>
                  {" "}
                  possibilities: <span className="code-violet">Infinity</span>
                </span>
              </div>
              <div>
                <em>09</em>
                <span>{"}"});</span>
              </div>
              <div>
                <em>10</em>
              </div>
              <div>
                <em>11</em>
                <span>
                  <span className="code-violet">export default</span> project.<span className="code-gold">launch</span>();
                  <span className="cursor-blink">▎</span>
                </span>
              </div>
            </>
          ) : (
            <>
              <div>
                <em>01</em>
                <span className="code-comment">{"/* Designed to make a difference. */"}</span>
              </div>
              <div>
                <em>02</em>
                <span>.your-next-project {"{"}</span>
              </div>
              <div>
                <em>03</em>
                <span>
                  {" "}
                  experience: <span className="code-green">extraordinary</span>;
                </span>
              </div>
              <div>
                <em>04</em>
                <span>
                  {" "}
                  performance: <span className="code-gold">100%</span>;
                </span>
              </div>
              <div>
                <em>05</em>
                <span>
                  {" "}
                  possibilities: <span className="code-violet">infinite</span>;
                </span>
              </div>
              <div>
                <em>06</em>
                <span>{"}"}</span>
              </div>
            </>
          )}
        </div>
        <div className="editor-terminal">
          <div>
            <Terminal size={13} /> TERMINAL{" "}
            <Button variant="ghost" size="sm" onClick={() => setRun(true)} aria-label="اجرای پیش‌نمایش کد">
              {run ? <Check /> : <Play />}
              {run ? "Deployed" : "Run code"}
            </Button>
          </div>
          <p aria-live="polite">
            {run ? (
              <>
                <span className="text-leaf">✓</span> Your next big idea is live. Let&apos;s build it.
              </>
            ) : (
              <>
                <span className="text-leaf">➜</span> ramvo <span className="code-comment">npm run build:your-vision</span>
              </>
            )}
          </p>
        </div>
        <div className="editor-status">
          <span>
            ⎇ main* <Check size={11} /> 0 errors
          </span>
          <span>
            UTF-8 &nbsp; TypeScript <span className="text-leaf">●</span>
          </span>
        </div>
      </div>
      {techs.map(({ name, icon: Icon, cls }) => (
        <div key={name} className={`floating-tech ${cls}`}>
          <Icon size={19} />
          <b>{name}</b>
        </div>
      ))}
      <div className="build-badge">
        <span className="build-icon">
          <Check size={19} />
        </span>
        <div>
          <b>Built for the future.</b>
          <small>Scalable. Reliable. Yours.</small>
        </div>
        <span className="text-leaf">↗</span>
      </div>
    </div>
  );
}

export function Marquee() {
  return (
    <div className="marquee" dir="ltr">
      <div className="marquee-track">
        {[0, 1].map((n) => (
          <div className="marquee-group" key={n} aria-hidden={n === 1}>
            {["React", "Next.js", "TypeScript", "Node.js", "Python", "Docker", "PostgreSQL", "Figma"].map((name) => (
              <span key={name}>
                <CodeXml size={23} />
                {name}
                <i>✦</i>
              </span>
            ))}
          </div>
        ))}
      </div>
    </div>
  );
}
