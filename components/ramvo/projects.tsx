"use client";

import { useRef, useState } from "react";
import Link from "next/link";
import Image from "next/image";
import { ChevronLeft, ChevronRight, Expand, ExternalLink, Minimize } from "lucide-react";
import { Button } from "@/components/ui/button";
import { Dialog, DialogContent, DialogDescription, DialogTitle } from "@/components/ui/dialog";
import { projects } from "@/lib/variables";

type Project = (typeof projects)[number];

export function ProjectGrid({ items = projects, layout = "slider" }: { items?: Project[]; layout?: "slider" | "grid" }) {
  const sliderRef = useRef<HTMLDivElement>(null);
  const [slideIndex, setSlideIndex] = useState(0);
  const [selected, setSelected] = useState<Project | null>(null);
  const [galleryIndex, setGalleryIndex] = useState(0);
  const [fullscreen, setFullscreen] = useState(false);
  const activeIndex = Math.min(slideIndex, Math.max(0, items.length - 1));

  function goToSlide(index: number) {
    const nextIndex = Math.max(0, Math.min(index, items.length - 1));
    const slide = sliderRef.current?.children[nextIndex];
    if (slide instanceof HTMLElement) {
      setSlideIndex(nextIndex);
      slide.scrollIntoView({ behavior: "smooth", block: "nearest", inline: "start" });
    }
  }

  function openProject(project: Project) {
    setSelected(project);
    setGalleryIndex(0);
    setFullscreen(false);
  }

  const galleryImages = selected?.gallery ?? [];
  const selectedImage = galleryImages[Math.min(galleryIndex, galleryImages.length - 1)];

  return (
    <>
      {layout === "slider" && (
        <div className="mb-4 flex items-center justify-end">
          <div className="flex gap-2" dir="ltr">
            <Button
              variant="outline"
              size="icon"
              aria-label="پروژه قبلی"
              disabled={activeIndex === 0}
              onClick={() => goToSlide(activeIndex - 1)}
            >
              <ChevronLeft />
            </Button>
            <Button
              variant="outline"
              size="icon"
              aria-label="پروژه بعدی"
              disabled={activeIndex >= items.length - 1}
              onClick={() => goToSlide(activeIndex + 1)}
            >
              <ChevronRight />
            </Button>
          </div>
        </div>
      )}
      <div
        ref={sliderRef}
        className={
          layout === "slider"
            ? "flex snap-x snap-mandatory gap-6 overflow-x-auto scroll-smooth pb-3 [scrollbar-width:none] [&::-webkit-scrollbar]:hidden max-[800px]:gap-4"
            : "grid grid-cols-1 gap-6 min-[801px]:grid-cols-2"
        }
        role={layout === "slider" ? "region" : undefined}
        aria-label={layout === "slider" ? "پروژه‌های رموو" : undefined}
        aria-roledescription={layout === "slider" ? "اسلایدر" : undefined}
      >
        {items.map((p, index) => (
          <article
            key={p.id}
            className={`${layout === "slider" ? "w-[calc((100%-24px)/2)] shrink-0 snap-start max-[800px]:w-[88%]" : "w-full"} overflow-hidden rounded-lg border border-border bg-card shadow-[0_14px_45px_oklch(0.055_0.02_255_/_20%)] transition-colors hover:border-primary/50`}
            role={layout === "slider" ? "group" : undefined}
            aria-roledescription={layout === "slider" ? "اسلاید" : undefined}
            aria-label={layout === "slider" ? `پروژه ${index + 1} از ${items.length}` : undefined}
          >
            <div
              className={`relative aspect-[1.65] overflow-hidden p-[25px_25px_0] max-[800px]:p-[20px_20px_0] ${p.id % 2 === 0 ? "bg-[color-mix(in_oklch,var(--primary)_10%,var(--card))]" : "bg-[color-mix(in_oklch,var(--leaf)_10%,var(--card))]"}`}
            >
              <Image
                src={p.image}
                alt={`تصویر اصلی ${p.title}`}
                loading="lazy"
                width={1536}
                height={1024}
                unoptimized
                className="h-full w-full rounded-tl-sm rounded-tr-sm object-cover object-top"
              />
              <span className="absolute top-[13px] right-[15px] rounded border border-border bg-background px-2.5 py-1.5 text-xs text-foreground">
                {p.category}
              </span>
            </div>
            <div className="p-5 px-[23px]">
              <h3 className="text-base font-bold">{p.title}</h3>
              <p className="mt-2 line-clamp-1 text-sm leading-7 text-muted-foreground">{p.description}</p>
              <div className="mt-4 flex flex-wrap justify-end gap-2" dir="ltr">
                {p.tags.map((tag, idx) => (
                  <span key={idx} className="rounded border border-border px-2 py-1 font-mono text-xs text-muted-foreground">
                    {tag}
                  </span>
                ))}
              </div>
              <div className="mt-4 flex justify-start border-border pt-4">
                <Button
                  className="w-full text-base rounded-lg min-h-4 text-primary"
                  variant="outline"
                  onClick={() => openProject(p)}
                >
                  جزئیات پروژه
                </Button>
              </div>
            </div>
          </article>
        ))}
      </div>

      <Dialog
        open={Boolean(selected)}
        onOpenChange={(open) => {
          if (!open) {
            setSelected(null);
            setFullscreen(false);
          }
        }}
      >
        <DialogContent
          className={`max-h-[92dvh] w-full overflow-y-auto ${fullscreen ? "h-[92dvh] max-w-[96vw] p-3 sm:max-w-[96vw]" : "max-w-[850px] sm:max-w-[1000px]"}`}
          dir="rtl"
        >
          {selected &&
            selectedImage &&
            (fullscreen ? (
              <div className="flex h-full min-h-0 flex-col gap-3">
                <div className="flex justify-start">
                  <Button variant="outline" size="sm" onClick={() => setFullscreen(false)}>
                    بازگشت به جزئیات <Minimize />
                  </Button>
                </div>
                <Image
                  src={selectedImage}
                  alt={`نمای بزرگ تصویر ${selected.title}`}
                  width={1800}
                  height={1200}
                  unoptimized
                  className="min-h-0 flex-1 object-contain"
                />
              </div>
            ) : (
              <div className="pt-5">
                <div className="grid gap-3">
                  <div className="relative flex aspect-[1.45] items-center justify-center overflow-hidden rounded-lg border border-border bg-background/60 p-3">
                    <Image
                      src={selectedImage}
                      alt={`تصویر ${galleryIndex + 1} از ${selected.title}`}
                      width={1536}
                      height={1024}
                      unoptimized
                      className="h-full w-full object-contain"
                    />
                    <Button
                      variant="secondary"
                      size="icon"
                      className="absolute top-3 left-3"
                      aria-label="نمایش تمام‌صفحه تصویر"
                      onClick={() => setFullscreen(true)}
                    >
                      <Expand />
                    </Button>
                    {/* {galleryImages.length > 1 && (
                      <div className="absolute inset-x-3 bottom-3 flex justify-between" dir="ltr">
                        <Button
                          variant="secondary"
                          size="icon"
                          aria-label="تصویر قبلی"
                          disabled={galleryIndex === 0}
                          onClick={() => setGalleryIndex(galleryIndex - 1)}
                        >
                          <ChevronLeft />
                        </Button>
                        <Button
                          variant="secondary"
                          size="icon"
                          aria-label="تصویر بعدی"
                          disabled={galleryIndex === galleryImages.length - 1}
                          onClick={() => setGalleryIndex(galleryIndex + 1)}
                        >
                          <ChevronRight />
                        </Button>
                      </div>
                    )} */}
                  </div>
                  {galleryImages.length > 1 && (
                    <div className="flex gap-2 overflow-x-auto" aria-label="تصاویر بیشتر پروژه">
                      {galleryImages.map((image, index) => (
                        <button
                          key={index}
                          type="button"
                          className={`size-[68px] shrink-0 overflow-hidden rounded border ${galleryIndex === index ? "border-primary" : "border-border"}`}
                          aria-label={`نمایش تصویر ${index + 1}`}
                          aria-pressed={galleryIndex === index}
                          onClick={() => setGalleryIndex(index)}
                        >
                          <Image src={image} alt="" width={136} height={100} unoptimized className="h-full w-full object-cover" />
                        </button>
                      ))}
                    </div>
                  )}
                </div>
                <div className="flex flex-col mt-3 gap-4">
                  <div>
                    <DialogTitle className="text-lg font-bold leading-8">{selected.title}</DialogTitle>
                    <span className="mt-2 inline-flex rounded border border-border px-2.5 py-1 text-xs text-muted-foreground">
                      {selected.category}
                    </span>
                  </div>
                  <DialogDescription className="text-sm leading-8">
                    {selected.description} این پروژه، نمونه‌ای نمایشی برای معرفی توانمندی‌های رموو است.
                  </DialogDescription>
                  <div>
                    <h3 className="mb-3 text-sm font-semibold text-foreground">فناوری‌ها و کتابخانه‌ها</h3>
                    <div className="flex flex-wrap gap-2" dir="ltr">
                      {selected.tags.map((tag) => (
                        <span
                          key={tag}
                          className="rounded border border-border px-2.5 py-1.5 font-mono text-xs text-muted-foreground"
                        >
                          {tag}
                        </span>
                      ))}
                    </div>
                  </div>
                  {selected.url && (
                    <Button asChild className="mt-auto self-start w-full min-h-10 text-base">
                      <Link href={selected.url} target="_blank" rel="noreferrer">
                        مشاهده وب‌سایت <ExternalLink />
                      </Link>
                    </Button>
                  )}
                </div>
              </div>
            ))}
        </DialogContent>
      </Dialog>
    </>
  );
}
