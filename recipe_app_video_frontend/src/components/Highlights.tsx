import React from "react";
import { AbsoluteFill, Easing, interpolate, useCurrentFrame } from "remotion";
import { Theme } from "../theme";

// PUBLIC_INTERFACE
export const TapPulse: React.FC<{ x: number; y: number; from: number; duration: number }> = ({
  x,
  y,
  from,
  duration,
}) => {
  /** Circular ripple to indicate tap/click actions. */
  const frame = useCurrentFrame();
  const p = interpolate(frame, [from, from + duration], [0, 1], {
    extrapolateLeft: "clamp",
    extrapolateRight: "clamp",
    easing: Easing.out(Easing.quad),
  });

  const size = 12 + p * 40;
  const opacity = 1 - p;

  return (
    <AbsoluteFill>
      <div
        style={{
          position: "absolute",
          left: x - size / 2,
          top: y - size / 2,
          width: size,
          height: size,
          borderRadius: size,
          background: Theme.colors.primary,
          boxShadow: "0 0 0 6px rgba(37,99,235,0.25)",
          opacity,
        }}
      />
    </AbsoluteFill>
  );
};

// PUBLIC_INTERFACE
export const HeartFavorite: React.FC<{ from: number; x: number; y: number }> = ({ from, x, y }) => {
  /** Favorite heart appears and scales up subtly. */
  const frame = useCurrentFrame();
  const scale = interpolate(frame, [from, from + 20], [0, 1], {
    extrapolateLeft: "clamp",
    extrapolateRight: "clamp",
    // Use a supported easing signature; approximate elastic with back-out for compatibility
    easing: Easing.out(Easing.back(1.2)),
  });

  return (
    <AbsoluteFill>
      <div
        style={{
          position: "absolute",
          left: x,
          top: y,
          transform: `scale(${scale}) translate(-50%, -50%)`,
          color: Theme.colors.secondary,
          filter: "drop-shadow(0 6px 20px rgba(245,158,11,0.45))",
        }}
      >
        <svg width="48" height="48" viewBox="0 0 24 24" fill={Theme.colors.secondary}>
          <path d="M12 21s-6.716-4.563-9.333-8.333C.5 10.083 2 6 6 6c2.333 0 3.5 1.5 6 3.5C14.5 7.5 15.667 6 18 6c4 0 5.5 4.083 3.333 6.667C18.716 16.437 12 21 12 21z" />
        </svg>
      </div>
    </AbsoluteFill>
  );
};
