"use client";

import type { RefObject } from "react";
import gsap from "gsap";
import { useGSAP } from "@gsap/react";
import { ScrollTrigger } from "gsap/ScrollTrigger";

gsap.registerPlugin(useGSAP, ScrollTrigger);

type StairDirection = "up" | "down" | "left" | "right" | "zoom";

type StairStep = {
  selector: string;
  direction?: StairDirection;
  amount?: number;
  duration?: number;
  stagger?: number;
  at?: number | string;
};

type ScrollStairRevealOptions = {
  start?: string;
  ease?: string;
  once?: boolean;
};

const getFromVars = (direction: StairDirection, amount: number) => {
  switch (direction) {
    case "up":
      return { autoAlpha: 0, y: amount };
    case "down":
      return { autoAlpha: 0, y: -amount };
    case "left":
      return { autoAlpha: 0, x: amount };
    case "right":
      return { autoAlpha: 0, x: -amount };
    case "zoom":
      return { autoAlpha: 0, y: Math.round(amount * 0.6), scale: 0.96 };
    default:
      return { autoAlpha: 0, y: amount };
  }
};

export function useScrollStairReveal(
  rootRef: RefObject<HTMLElement | null>,
  steps: StairStep[],
  options: ScrollStairRevealOptions = {},
) {
  useGSAP(
    () => {
      if (!rootRef.current || steps.length === 0) return;

      const q = gsap.utils.selector(rootRef);
      const timeline = gsap.timeline({
        defaults: { ease: options.ease ?? "power3.out" },
        scrollTrigger: {
          trigger: rootRef.current,
          start: options.start ?? "top 78%",
          once: options.once ?? true,
        },
      });

      steps.forEach((step, index) => {
        const targets = gsap.utils.toArray<HTMLElement>(q(step.selector));
        if (targets.length === 0) return;

        const fromVars = getFromVars(step.direction ?? "up", step.amount ?? 28);

        gsap.set(targets, fromVars);
        timeline.to(
          targets,
          {
            autoAlpha: 1,
            x: 0,
            y: 0,
            scale: 1,
            duration: step.duration ?? 0.62,
            stagger: step.stagger ?? 0.1,
          },
          step.at ?? (index === 0 ? 0 : ">-0.36"),
        );
      });
    },
    { scope: rootRef },
  );
}
