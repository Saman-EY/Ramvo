"use client";

import { useState } from "react";
import {
  Play,
  Check,
  Terminal,
  CodeXml,
  Atom,
  Boxes,
  Container,
  Braces,
  FileCode,
  Database,
  Server,
  Layers3,
  Leaf,
} from "lucide-react";
import { Button } from "@/components/ui/button";

const techs = [
  { name: "React", icon: Atom, cls: "react" },
  { name: "Next.js", icon: CodeXml, cls: "next" },
  { name: "TypeScript", icon: FileCode, cls: "typescript" },
  { name: "Node.js", icon: Boxes, cls: "node" },
  { name: "Python", icon: Braces, cls: "python" },
  { name: "Docker", icon: Container, cls: "docker" },
];

const marqueeTechs = [
  { name: "React", icon: Atom, cls: "react" },
  { name: "Next.js", icon: CodeXml, cls: "next" },
  { name: "TypeScript", icon: FileCode, cls: "typescript" },
  { name: "Node.js", icon: Boxes, cls: "node" },
  { name: "Python", icon: Braces, cls: "python" },
  { name: "Django", icon: Leaf, cls: "django" },
  { name: "Docker", icon: Container, cls: "docker" },
  { name: "PostgreSQL", icon: Database, cls: "postgres" },
  { name: "Express.js", icon: Server, cls: "express" },
  { name: "Nest.js", icon: Layers3, cls: "nestjs" },
];

const marqueeColors: Record<string, string> = {
  React: "#61dafb",
  "Next.js": "#f4f4f5",
  TypeScript: "#3178c6",
  "Node.js": "#83cd29",
  Python: "#ffd343",
  Django: "#44b78b",
  Docker: "#2496ed",
  PostgreSQL: "#699eca",
  "Express.js": "#d4d4d8",
  "Nest.js": "#e0234e",
};

export function Editor() {
  const [tab, setTab] = useState("website.tsx");
  const [run, setRun] = useState(false);
  return (
    <div
      className="relative flex h-[435px] min-w-0 items-center justify-center min-[1450px]:h-[455px] max-[800px]:mx-auto max-[800px]:h-[435px] max-[800px]:w-full max-[800px]:max-w-[560px] max-[500px]:h-[403px]"
      dir="ltr"
    >
      <div className="absolute inset-[10px_-20px] rotate-[-20deg] rounded-[50%] border border-leaf/10 after:absolute after:inset-[25px] after:rounded-[50%] after:border after:border-dashed after:border-leaf/10 after:content-['']" />
      <div className="relative w-[94%] overflow-hidden rounded-lg border border-border bg-card/95 shadow-[var(--card-glow)] max-[500px]:w-[93%]">
        <div className="flex h-[38px] items-center justify-between border-b border-border px-[14px] font-mono text-[8px] text-muted-foreground">
          <div className="flex gap-[5px] [&>i]:size-[7px] [&>i]:rounded-full [&>i:first-child]:bg-[var(--code-red)] [&>i:nth-child(2)]:bg-primary [&>i:nth-child(3)]:bg-leaf">
            <i />
            <i />
            <i />
          </div>
          <span>ramvo / your-next-big-idea</span>
          <CodeXml size={15} />
        </div>
        <div className="flex border-b border-border">
          {["website.tsx", "design.css"].map((t) => (
            <Button
              key={t}
              variant="ghost"
              className={`h-[34px] gap-[7px] rounded-none border-r border-border px-[13px] font-mono text-[9px] text-muted-foreground ${tab === t ? "border-t border-t-primary bg-secondary text-foreground [&_svg]:text-[var(--code-blue)]" : ""} [&>span]:pl-[6px] [&>span]:text-[13px]`}
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
        <div className="min-h-[286px] whitespace-pre px-3 pt-[19px] pb-[13px] font-mono text-[10px] leading-[23px] min-[1450px]:text-xs min-[1450px]:leading-[25px] max-[1100px]:text-[8px] max-[800px]:text-[11px] max-[500px]:min-h-[270px] max-[500px]:px-2 max-[500px]:text-[7.4px] max-[500px]:leading-[22px] [&>div]:flex [&_em]:w-[30px] [&_em]:shrink-0 [&_em]:text-[9px] [&_em]:not-italic [&_em]:text-muted-foreground [&_em]:opacity-55 max-[500px]:[&_em]:w-6 max-[500px]:[&_em]:text-[7px]">
          {tab === "website.tsx" ? (
            <>
              <div>
                <em>01</em>
                <span className="text-muted-foreground opacity-65">{"// Great ideas deserve great engineering."}</span>
              </div>
              <div>
                <em>02</em>
                <span>
                  <span className="text-[var(--code-violet)]">import</span> {"{"}{" "}
                  <span className="text-foreground">createExperience</span> {"}"}{" "}
                  <span className="text-[var(--code-violet)]">from</span> <span className="text-leaf">&apos;ramvo&apos;</span>;
                </span>
              </div>
              <div>
                <em>03</em>
              </div>
              <div>
                <em>04</em>
                <span>
                  <span className="text-[var(--code-violet)]">const</span> project ={" "}
                  <span className="text-gold">createExperience</span>({"{"}
                </span>
              </div>
              <div>
                <em>05</em>
                <span>
                  {" "}
                  idea: <span className="text-leaf">&apos;Your vision, our code&apos;</span>,
                </span>
              </div>
              <div>
                <em>06</em>
                <span>
                  {" "}
                  stack: [<span className="text-leaf">&apos;React&apos;</span>,{" "}
                  <span className="text-leaf">&apos;Next.js&apos;</span>],
                </span>
              </div>
              <div>
                <em>07</em>
                <span>
                  {" "}
                  performance: <span className="text-gold">100</span>,
                </span>
              </div>
              <div>
                <em>08</em>
                <span>
                  {" "}
                  possibilities: <span className="text-[var(--code-violet)]">Infinity</span>
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
                  <span className="text-[var(--code-violet)]">export default</span> project.
                  <span className="text-gold">launch</span>();
                  <span className="animate-[blink_1.2s_step-end_infinite] text-primary">▎</span>
                </span>
              </div>
            </>
          ) : (
            <>
              <div>
                <em>01</em>
                <span className="text-muted-foreground opacity-65">{"/* Designed to make a difference. */"}</span>
              </div>
              <div>
                <em>02</em>
                <span>.your-next-project {"{"}</span>
              </div>
              <div>
                <em>03</em>
                <span>
                  {" "}
                  experience: <span className="text-leaf">extraordinary</span>;
                </span>
              </div>
              <div>
                <em>04</em>
                <span>
                  {" "}
                  performance: <span className="text-gold">100%</span>;
                </span>
              </div>
              <div>
                <em>05</em>
                <span>
                  {" "}
                  possibilities: <span className="text-[var(--code-violet)]">infinite</span>;
                </span>
              </div>
              <div>
                <em>06</em>
                <span>{"}"}</span>
              </div>
            </>
          )}
        </div>
        <div className="border-t border-border px-[13px] py-[10px] font-mono text-[8px] text-muted-foreground [&>div]:flex [&>div]:items-center [&>div]:gap-2 [&_button]:ml-auto [&_button]:h-[21px] [&_button]:px-[5px] [&_button]:font-mono [&_button]:text-[8px] [&_button]:text-leaf [&>p]:mt-[9px] [&>p]:text-[8px]">
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
                <span className="text-leaf">➜</span> ramvo{" "}
                <span className="text-muted-foreground opacity-65">npm run build:your-vision</span>
              </>
            )}
          </p>
        </div>
        <div className="flex justify-between border-t border-border bg-leaf/10 px-[10px] py-[5px] font-mono text-[7px] text-muted-foreground [&>span:first-child]:flex [&>span:first-child]:items-center [&>span:first-child]:gap-[6px]">
          <span>
            ⎇ main* <Check size={11} /> 0 errors
          </span>
          <span>
            UTF-8 &nbsp; TypeScript <span className="text-leaf">●</span>
          </span>
        </div>
      </div>
      {techs.map(({ name, icon: Icon }) => (
        <div
          key={name}
          className={`absolute z-[2] flex items-center gap-[7px] rounded-[7px] border border-border bg-card px-3 py-[10px] font-[Arial,sans-serif] text-[11px] shadow-[var(--card-glow)] animate-[float_6s_ease-in-out_infinite] max-[1100px]:px-2 max-[1100px]:py-2 max-[1100px]:text-[9px] max-[500px]:gap-1 max-[500px]:px-2 max-[500px]:py-[7px] max-[500px]:text-[8px] [&_svg]:text-leaf max-[500px]:[&_svg]:w-[15px] ${name === "React" ? "top-[11px] left-1 rotate-[-8deg] max-[500px]:top-0 max-[500px]:left-[3px] [&_svg]:text-[var(--code-blue)]" : name === "Next.js" ? "top-[49px] right-[-17px] [animation-delay:-1s] max-[1100px]:right-[-10px] max-[500px]:top-[41px] max-[500px]:right-0" : name === "TypeScript" ? "top-[211px] right-[-21px] [animation-delay:-2s] max-[1100px]:right-[-10px] max-[500px]:top-[207px] max-[500px]:right-[-7px] [&_svg]:text-[var(--code-blue)]" : name === "Node.js" ? "top-[171px] left-[-34px] [animation-delay:-3s] max-[1100px]:left-[-10px] max-[500px]:top-[163px] max-[500px]:left-[-7px]" : name === "Python" ? "bottom-[9px] left-[9px] [animation-delay:-4s] max-[500px]:bottom-[7px] max-[500px]:left-0 [&_svg]:text-primary" : "right-[10px] bottom-[6px] [animation-delay:-2s] max-[500px]:right-0 max-[500px]:bottom-[9px] [&_svg]:text-[var(--code-blue)]"}`}
        >
          <Icon size={19} style={{ color: marqueeColors[name] }} />
          <b>{name}</b>
        </div>
      ))}
      <div className="absolute bottom-[-52px] left-[190px] z-[3] flex items-center gap-[10px] rounded-[7px] border border-leaf/30 bg-card px-[14px] py-3 font-[Arial,sans-serif] text-[11px] shadow-[var(--card-glow)] max-[1100px]:left-[55px] max-[500px]:bottom-[-29px] max-[500px]:left-[65px] max-[500px]:p-[10px] max-[500px]:text-[9px] [&>div>small]:mt-1 [&>div>small]:block [&>div>small]:text-[9px] [&>div>small]:text-muted-foreground max-[500px]:[&>div>small]:text-[8px] [&>span:last-child]:ml-3">
        <span className="rounded-md bg-leaf/10 p-2 text-leaf max-[500px]:p-[5px]">
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
    <div
      className="flex h-20 items-center overflow-hidden border-y border-border bg-card/65 [mask-image:linear-gradient(to_right,transparent,var(--foreground)_8%,var(--foreground)_92%,transparent)] max-[500px]:h-16"
      dir="ltr"
    >
      <div className="flex w-max animate-[marquee_36s_linear_infinite]">
        {[0, 1].map((n) => (
          <div
            className="flex shrink-0 gap-[50px] pr-[50px] [&>span]:flex [&>span]:items-center [&>span]:gap-2.5 [&>span]:font-[Arial,sans-serif] [&>span]:text-base [&>span]:text-muted-foreground max-[500px]:[&>span]:text-sm"
            key={n}
            aria-hidden={n === 1}
          >
            {marqueeTechs.map(({ name, icon: Icon }) => {
              const color = marqueeColors[name];
              return (
                <span className="gap-[10px]" key={name}>
                  <span
                    className="grid size-[34px] shrink-0 place-items-center rounded-[11px] border border-current/25 bg-current/10 font-mono text-xs font-extrabold tracking-[-0.06em] transition-transform duration-300 hover:-translate-y-[3px] hover:-rotate-6 [&_svg]:opacity-100"
                    style={{ color }}
                  >
                    <Icon size={19} strokeWidth={2.2} aria-hidden="true" />
                  </span>
                  <b>{name}</b>
                  <i className="ml-1 text-[10px] not-italic text-primary">✦</i>
                </span>
              );
            })}
          </div>
        ))}
      </div>
    </div>
  );
}
