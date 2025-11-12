import React from "react";
import { AbsoluteFill } from "remotion";
import { Theme, device, gradients } from "../theme";

// PUBLIC_INTERFACE
export const DeviceMockup: React.FC<{
  children: React.ReactNode;
  title?: string;
}> = ({ children, title }) => {
  /** Renders a centered mobile device frame mockup with a title bar. */
  const deviceStyle: React.CSSProperties = {
    width: device.width,
    height: device.height,
    borderRadius: device.borderRadius,
    background: gradients.surface,
    boxShadow: Theme.shadow.md,
    border: `1px solid rgba(17,24,39,0.06)`,
    overflow: "hidden",
    position: "absolute",
    top: device.topOffset,
    left: "50%",
    transform: "translateX(-50%)",
  };

  const bezelStyle: React.CSSProperties = {
    position: "absolute",
    inset: device.bezel,
    borderRadius: device.borderRadius - 10,
    background: Theme.colors.surface,
    overflow: "hidden",
  };

  const notchStyle: React.CSSProperties = {
    position: "absolute",
    top: 10,
    left: "50%",
    transform: "translateX(-50%)",
    width: 180,
    height: 30,
    borderRadius: 20,
    background: "#0f172a0d",
  };

  const headerStyle: React.CSSProperties = {
    position: "absolute",
    top: 0,
    left: 0,
    right: 0,
    height: 64,
    background: `linear-gradient(180deg, ${Theme.colors.background} 0%, rgba(255,255,255,0.9) 100%)`,
    display: "flex",
    alignItems: "center",
    padding: "0 20px",
    color: Theme.colors.text,
    fontFamily: "'Inter', " + Theme.colors.text,
    fontWeight: 600,
    borderBottom: "1px solid rgba(17,24,39,0.06)",
  };

  return (
    <AbsoluteFill
      style={{
        background: gradients.subtle,
      }}
    >
      <div style={deviceStyle}>
        <div style={notchStyle} />
        <div style={bezelStyle}>
          {title ? <div style={headerStyle}>{title}</div> : null}
          <div style={{ position: "absolute", top: title ? 64 : 0, left: 0, right: 0, bottom: 0 }}>
            {children}
          </div>
        </div>
      </div>
    </AbsoluteFill>
  );
};
