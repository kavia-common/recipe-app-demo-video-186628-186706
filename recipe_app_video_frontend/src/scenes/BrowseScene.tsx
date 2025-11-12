import React from "react";
import { AbsoluteFill, interpolate, useCurrentFrame } from "remotion";
import { DeviceMockup } from "../components/DeviceMockup";
import { Theme } from "../theme";

const recipes = [
  { id: 1, title: "Mediterranean Bowl", tag: "Healthy", color: "#DBEAFE" },
  { id: 2, title: "Spicy Ramen", tag: "Quick", color: "#FEF3C7" },
  { id: 3, title: "Avocado Toast", tag: "Vegan", color: "#ECFCCB" },
  { id: 4, title: "Chicken Tikka", tag: "Popular", color: "#FFE4E6" },
  { id: 5, title: "Berry Smoothie", tag: "Breakfast", color: "#E0E7FF" },
  { id: 6, title: "Pesto Pasta", tag: "Italian", color: "#D1FAE5" },
  { id: 7, title: "Sourdough Sandwich", tag: "Lunch", color: "#F3E8FF" },
];

// PUBLIC_INTERFACE
export const BrowseScene: React.FC = () => {
  /** Browse screen with vertical scroll animation through recipes. */
  const frame = useCurrentFrame();
  const itemHeight = 120;
  const visibleCount = 6;
  const totalHeight = recipes.length * (itemHeight + 16);
  const scroll = interpolate(frame, [0, 180], [0, totalHeight - visibleCount * (itemHeight + 16)], {
    extrapolateLeft: "clamp",
    extrapolateRight: "clamp",
  });

  return (
    <AbsoluteFill>
      <DeviceMockup title="Discover">
        <div
          style={{
            position: "absolute",
            inset: 0,
            background: Theme.colors.background,
          }}
        >
          <div style={{ position: "absolute", top: 16, left: 16, right: 16 }}>
            <input
              placeholder="Search recipes..."
              style={{
                width: "100%",
                padding: "14px 16px",
                borderRadius: 14,
                border: "1px solid rgba(17,24,39,0.08)",
                outline: "none",
                boxShadow: "inset 0 1px 2px rgba(0,0,0,0.03)",
              }}
            />
          </div>

          <div
            style={{
              position: "absolute",
              top: 70,
              left: 16,
              right: 16,
              bottom: 16,
              overflow: "hidden",
              borderRadius: 16,
            }}
          >
            <div style={{ position: "absolute", top: -scroll, left: 0, right: 0 }}>
              {recipes.map((r, idx) => (
                <div
                  key={r.id}
                  style={{
                    display: "flex",
                    alignItems: "center",
                    gap: 16,
                    height: itemHeight,
                    marginBottom: 16,
                    background: r.color,
                    borderRadius: 16,
                    padding: 16,
                    border: "1px solid rgba(17,24,39,0.06)",
                  }}
                >
                  <div
                    style={{
                      width: 88,
                      height: 88,
                      borderRadius: 16,
                      background:
                        idx % 2 === 0 ? Theme.colors.primary : Theme.colors.secondary,
                      opacity: 0.15,
                    }}
                  />
                  <div style={{ display: "flex", flexDirection: "column" }}>
                    <strong
                      style={{
                        fontSize: 20,
                        color: Theme.colors.text,
                        marginBottom: 4,
                      }}
                    >
                      {r.title}
                    </strong>
                    <span
                      style={{
                        fontSize: 14,
                        color: "#4B5563",
                      }}
                    >
                      {r.tag} • 20–30 min
                    </span>
                    <div
                      style={{
                        marginTop: 10,
                        display: "inline-flex",
                        alignItems: "center",
                        gap: 8,
                      }}
                    >
                      <button
                        style={{
                          background: Theme.colors.primary,
                          color: "white",
                          border: 0,
                          borderRadius: 999,
                          padding: "6px 10px",
                          fontSize: 12,
                          boxShadow: "0 8px 16px rgba(37,99,235,0.25)",
                        }}
                      >
                        View
                      </button>
                      <button
                        style={{
                          background: "white",
                          color: Theme.colors.text,
                          border: "1px solid rgba(17,24,39,0.08)",
                          borderRadius: 999,
                          padding: "6px 10px",
                          fontSize: 12,
                        }}
                      >
                        Favorite
                      </button>
                    </div>
                  </div>
                </div>
              ))}
            </div>
          </div>
        </div>
      </DeviceMockup>
    </AbsoluteFill>
  );
};
