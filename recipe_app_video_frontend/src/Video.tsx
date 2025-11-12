import React from "react";
import { AbsoluteFill, Sequence } from "remotion";
import { IntroScene } from "./scenes/IntroScene";
import { BrowseScene } from "./scenes/BrowseScene";
import { RecipeDetailScene } from "./scenes/RecipeDetailScene";
import { FavoriteActionScene } from "./scenes/FavoriteActionScene";
import { OutroScene } from "./scenes/OutroScene";
import { CrossFade, SlideIn, SlideOut } from "./utils/transitions";
import { Theme } from "./theme";

// PUBLIC_INTERFACE
export const DemoVideo: React.FC = () => {
  /**
   * Main composition that stitches scenes with smooth transitions.
   */
  const introDur = 120;           // 4s
  const browseDur = 210;          // 7s with scroll
  const detailDur = 150;          // 5s
  const favoriteDur = 120;        // 4s
  const outroDur = 120;           // 4s

  const xfade = 20;

  const introStart = 0;
  const browseStart = introStart + introDur - xfade;
  const detailStart = browseStart + browseDur - xfade;
  const favoriteStart = detailStart + detailDur - xfade;
  const outroStart = favoriteStart + favoriteDur - xfade;

  return (
    <AbsoluteFill style={{ background: Theme.colors.background }}>
      {/* Intro */}
      <Sequence from={introStart} durationInFrames={introDur}>
        <CrossFade from={introStart} to={browseStart + xfade} durationInFrames={xfade}>
          <IntroScene />
        </CrossFade>
      </Sequence>

      {/* Browse */}
      <Sequence from={browseStart} durationInFrames={browseDur}>
        <SlideIn from={browseStart} durationInFrames={15} enterFrom="right">
          <CrossFade from={browseStart} to={detailStart + xfade} durationInFrames={xfade}>
            <BrowseScene />
          </CrossFade>
        </SlideIn>
      </Sequence>

      {/* Recipe Detail */}
      <Sequence from={detailStart} durationInFrames={detailDur}>
        <SlideIn from={detailStart} durationInFrames={15} enterFrom="left">
          <CrossFade from={detailStart} to={favoriteStart + xfade} durationInFrames={xfade}>
            <RecipeDetailScene />
          </CrossFade>
        </SlideIn>
      </Sequence>

      {/* Favorite Action */}
      <Sequence from={favoriteStart} durationInFrames={favoriteDur}>
        <SlideIn from={favoriteStart} durationInFrames={15} enterFrom="bottom">
          <CrossFade from={favoriteStart} to={outroStart + xfade} durationInFrames={xfade}>
            <FavoriteActionScene />
          </CrossFade>
        </SlideIn>
      </Sequence>

      {/* Outro */}
      <Sequence from={outroStart} durationInFrames={outroDur}>
        <SlideOut to={outroStart + outroDur} durationInFrames={20} exitTo="top">
          <OutroScene />
        </SlideOut>
      </Sequence>
    </AbsoluteFill>
  );
};

// PUBLIC_INTERFACE
export const getDemoVideoMeta = () => {
  /** Returns default metadata for the DemoVideo composition. */
  return {
    fps: 30,
    width: 1920,
    height: 1080,
    durationInFrames: 720,
  };
};
