import React from "react";
import { AbsoluteFill } from "remotion";
import { DeviceMockup } from "../components/DeviceMockup";
import { Theme } from "../theme";

// PUBLIC_INTERFACE
export const RecipeDetailScene: React.FC = () => {
  /** Recipe detail mock with hero, ingredients, and a CTA. */
  return (
    <AbsoluteFill>
      <DeviceMockup title="Pesto Pasta">
        <div style={{ position: "absolute", inset: 0, background: Theme.colors.background }}>
          <div
            style={{
              position: "absolute",
              left: 0,
              right: 0,
              height: 240,
              background: `linear-gradient(135deg, ${Theme.colors.primary} 0%, ${Theme.colors.secondary} 100%)`,
              opacity: 0.2,
            }}
          />
          <div
            style={{
              position: "absolute",
              top: 14,
              left: 14,
              right: 14,
              height: 180,
              borderRadius: 16,
              background: "#dbeafe",
              border: "1px solid rgba(17,24,39,0.08)",
              boxShadow: "0 12px 30px rgba(0,0,0,0.08)",
            }}
          />
          <div style={{ position: "absolute", top: 210, left: 16, right: 16 }}>
            <h2 style={{ margin: 0, fontSize: 26, color: Theme.colors.text }}>Pesto Pasta</h2>
            <p style={{ margin: "6px 0 0", color: "#4B5563" }}>25 min • Easy • Italian</p>
          </div>

          <div style={{ position: "absolute", top: 270, left: 16, right: 16 }}>
            <strong style={{ color: Theme.colors.text }}>Ingredients</strong>
            <ul style={{ paddingLeft: 18, marginTop: 8, color: "#374151" }}>
              <li>Pasta</li>
              <li>Fresh basil</li>
              <li>Parmesan</li>
              <li>Pine nuts</li>
              <li>Garlic, Olive oil</li>
            </ul>
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
              aria-label="Favorite"
            >
              <svg width="24" height="24" viewBox="0 0 24 24" fill={Theme.colors.secondary} style={{ display: "block", margin: "0 auto" }}>
                <path d="M12 21s-6.716-4.563-9.333-8.333C.5 10.083 2 6 6 6c2.333 0 3.5 1.5 6 3.5C14.5 7.5 15.667 6 18 6c4 0 5.5 4.083 3.333 6.667C18.716 16.437 12 21 12 21z" />
              </svg>
            </button>
          </div>
        </div>
      </DeviceMockup>
    </AbsoluteFill>
  );
};
