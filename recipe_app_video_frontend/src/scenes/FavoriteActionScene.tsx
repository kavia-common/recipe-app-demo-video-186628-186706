import React from "react";
import { AbsoluteFill } from "remotion";
import { DeviceMockup } from "../components/DeviceMockup";
import { TapPulse, HeartFavorite } from "../components/Highlights";
import { Theme } from "../theme";

// PUBLIC_INTERFACE
export const FavoriteActionScene: React.FC = () => {
  /** Simulates tapping the favorite button with pulse and heart pop. */
  // Coordinates are relative within the device screen content area
  const favX = 720 - 16 - 28; // right padding 16, button center ~28px from right
  const favY = 1520 - 20 - 28 - 64; // bottom 20, height ~56 => center, minus header 64

  return (
    <AbsoluteFill>
      <DeviceMockup title="Recipe">
        <div style={{ position: "absolute", inset: 0, background: Theme.colors.background }}>
          {/* Basic placeholder content */}
          <div
            style={{
              position: "absolute",
              top: 16,
              left: 16,
              right: 16,
              height: 200,
              background: "#e5e7eb",
              borderRadius: 16,
            }}
          />
          <div style={{ position: "absolute", top: 232, left: 16, right: 16 }}>
            <h3 style={{ margin: 0, color: Theme.colors.text }}>Spicy Ramen</h3>
            <p style={{ color: "#4B5563", marginTop: 4 }}>30 min • Medium • Japanese</p>
          </div>

          <div style={{ position: "absolute", bottom: 20, left: 16, right: 16, display: "flex", gap: 12 }}>
            <button
              style={{
                flex: 1,
                background: Theme.colors.primary,
                color: "white",
                border: 0,
                padding: "14px 16px",
                borderRadius: 14,
                boxShadow: "0 10px 24px rgba(37,99,235,0.35)",
              }}
            >
              Start Cooking
            </button>
            <button
              style={{
                width: 56,
                background: "#fff",
                border: "1px solid rgba(17,24,39,0.08)",
                borderRadius: 14,
              }}
            >
              <svg width="24" height="24" viewBox="0 0 24 24" fill="#9CA3AF" style={{ display: "block", margin: "0 auto" }}>
                <path d="M12 21s-6.716-4.563-9.333-8.333C.5 10.083 2 6 6 6c2.333 0 3.5 1.5 6 3.5C14.5 7.5 15.667 6 18 6c4 0 5.5 4.083 3.333 6.667C18.716 16.437 12 21 12 21z" />
              </svg>
            </button>
          </div>

          {/* Tap pulse and heart favorite animations */}
          <TapPulse x={favX} y={favY} from={20} duration={30} />
          <HeartFavorite x={favX} y={favY} from={40} />
        </div>
      </DeviceMockup>
    </AbsoluteFill>
  );
};
