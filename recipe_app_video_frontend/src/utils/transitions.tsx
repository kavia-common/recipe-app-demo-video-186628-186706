import React from "react";
import { AbsoluteFill, Easing, interpolate, useCurrentFrame } from "remotion";

// PUBLIC_INTERFACE
export const CrossFade: React.FC<{
  children: React.ReactNode;
  durationInFrames: number;
  from: number;
  to: number;
}> = ({ children, durationInFrames, from, to }) => {
  /** Cross-fade wrapper for smooth scene transitions. */
  const frame = useCurrentFrame();

  const fadeIn = interpolate(frame, [from, from + durationInFrames], [0, 1], {
    extrapolateLeft: "clamp",
    extrapolateRight: "clamp",
  });

  const fadeOut = interpolate(frame, [to - durationInFrames, to], [1, 0], {
    extrapolateLeft: "clamp",
    extrapolateRight: "clamp",
  });

  const opacity = Math.min(fadeIn, fadeOut);

  return <AbsoluteFill style={{ opacity }}>{children}</AbsoluteFill>;
};

// PUBLIC_INTERFACE
export const SlideIn: React.FC<{
  children: React.ReactNode;
  enterFrom?: "left" | "right" | "bottom" | "top";
  durationInFrames: number;
  from: number;
}> = ({ children, enterFrom = "right", durationInFrames, from }) => {
  /** Slide-in transition helper. */
  const frame = useCurrentFrame();
  const p = interpolate(
    frame,
    [from, from + durationInFrames],
    [1, 0],
    { extrapolateLeft: "clamp", extrapolateRight: "clamp", easing: Easing.out(Easing.cubic) }
  );

  const offset = 120;
  const transform =
    enterFrom === "right"
      ? `translateX(${p * offset}px)`
      : enterFrom === "left"
        ? `translateX(${-p * offset}px)`
        : enterFrom === "bottom"
          ? `translateY(${p * offset}px)`
          : `translateY(${-p * offset}px)`;

  const opacity = interpolate(frame, [from, from + durationInFrames], [0, 1], {
    extrapolateLeft: "clamp",
    extrapolateRight: "clamp",
  });

  return <AbsoluteFill style={{ transform, opacity }}>{children}</AbsoluteFill>;
};

// PUBLIC_INTERFACE
export const SlideOut: React.FC<{
  children: React.ReactNode;
  exitTo?: "left" | "right" | "bottom" | "top";
  durationInFrames: number;
  to: number;
}> = ({ children, exitTo = "left", durationInFrames, to }) => {
  /** Slide-out transition helper. */
  const frame = useCurrentFrame();
  const p = interpolate(
    frame,
    [to - durationInFrames, to],
    [0, 1],
    { extrapolateLeft: "clamp", extrapolateRight: "clamp", easing: Easing.in(Easing.cubic) }
  );

  const offset = 120;
  const transform =
    exitTo === "right"
      ? `translateX(${p * offset}px)`
      : exitTo === "left"
        ? `translateX(${-p * offset}px)`
        : exitTo === "bottom"
          ? `translateY(${p * offset}px)`
          : `translateY(${-p * offset}px)`;

  const opacity = interpolate(frame, [to - durationInFrames, to], [1, 0], {
    extrapolateLeft: "clamp",
    extrapolateRight: "clamp",
  });

  return <AbsoluteFill style={{ transform, opacity }}>{children}</AbsoluteFill>;
};
