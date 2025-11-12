import React from "react";
import { AbsoluteFill, Easing, interpolate, useCurrentFrame } from "remotion";
import { Theme, gradients } from "../theme";

// PUBLIC_INTERFACE
export const OutroScene: React.FC = () => {
  /** Closing credits with subtle gradient and thanks text. */
  const frame = useCurrentFrame();
  const opacity = interpolate(frame, [0, 25], [0, 1], {
    extrapolateLeft: "clamp",
    extrapolateRight: "clamp",
    easing: Easing.out(Easing.cubic),
  });

  return (
    <AbsoluteFill
      style={{
        background: gradients.subtle,
        color: Theme.colors.text,
        display: "flex",
        alignItems: "center",
        justifyContent: "center",
        textAlign: "center",
        fontFamily: "Inter, system-ui, sans-serif",
      }}
    >
      <div
        style={{
          background: Theme.colors.surface,
          borderRadius: 24,
          padding: "36px 48px",
          boxShadow: Theme.shadow.md,
          border: "1px solid rgba(17,24,39,0.06)",
          opacity,
        }}
      >
        <h2 style={{ margin: 0, fontSize: 40 }}>Thanks for watching!</h2>
        <p style={{ marginTop: 8, color: "#4B5563", fontSize: 18 }}>
          Built with Remotion • Ocean Professional style
        </p>
      </div>
    </AbsoluteFill>
  );
};
