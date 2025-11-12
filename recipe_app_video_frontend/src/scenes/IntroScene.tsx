import React from "react";
import { AbsoluteFill, Easing, interpolate, useCurrentFrame } from "remotion";
import { Theme, gradients } from "../theme";

// PUBLIC_INTERFACE
export const IntroScene: React.FC = () => {
  /** Intro branding scene with app title. */
  const frame = useCurrentFrame();

  const titleOpacity = interpolate(frame, [0, 25], [0, 1], {
    extrapolateLeft: "clamp",
    extrapolateRight: "clamp",
    easing: Easing.out(Easing.cubic),
  });

  const subtitleOpacity = interpolate(frame, [20, 45], [0, 1], {
    extrapolateLeft: "clamp",
    extrapolateRight: "clamp",
  });

  return (
    <AbsoluteFill
      style={{
        background: gradients.subtle,
        display: "flex",
        alignItems: "center",
        justifyContent: "center",
        color: Theme.colors.text,
        fontFamily: "Inter, system-ui, sans-serif",
      }}
    >
      <div
        style={{
          background: Theme.colors.surface,
          borderRadius: 24,
          padding: "48px 64px",
          boxShadow: Theme.shadow.md,
          textAlign: "center",
          border: "1px solid rgba(17,24,39,0.06)",
        }}
      >
        <div
          style={{
            width: 96,
            height: 96,
            borderRadius: 24,
            margin: "0 auto 20px",
            background: `linear-gradient(135deg, ${Theme.colors.primary} 0%, ${Theme.colors.secondary} 100%)`,
            boxShadow: "0 10px 30px rgba(37,99,235,0.35)",
          }}
        />
        <h1
          style={{
            fontSize: 64,
            margin: 0,
            letterSpacing: -0.5,
            opacity: titleOpacity,
          }}
        >
          Recipe App Demo
        </h1>
        <p
          style={{
            fontSize: 24,
            marginTop: 12,
            color: "#374151",
            opacity: subtitleOpacity,
          }}
        >
          Smooth journeys. Clear flavors. Ocean Professional style.
        </p>
      </div>
    </AbsoluteFill>
  );
};
