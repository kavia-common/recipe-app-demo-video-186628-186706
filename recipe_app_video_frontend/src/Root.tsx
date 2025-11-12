import { Composition } from "remotion";
import { DemoVideo } from "./Video";
import { IntroScene } from "./scenes/IntroScene";
import { BrowseScene } from "./scenes/BrowseScene";
import { RecipeDetailScene } from "./scenes/RecipeDetailScene";
import { FavoriteActionScene } from "./scenes/FavoriteActionScene";
import { OutroScene } from "./scenes/OutroScene";

// PUBLIC_INTERFACE
export const RemotionRoot: React.FC = () => {
  /** Registers compositions for the demo video and individual scenes. */
  return (
    <>
      <Composition
        id="DemoVideo"
        component={DemoVideo}
        durationInFrames={720}
        fps={30}
        width={1920}
        height={1080}
      />
      <Composition id="IntroScene" component={IntroScene} durationInFrames={120} fps={30} width={1920} height={1080} />
      <Composition id="BrowseScene" component={BrowseScene} durationInFrames={210} fps={30} width={1920} height={1080} />
      <Composition id="RecipeDetailScene" component={RecipeDetailScene} durationInFrames={150} fps={30} width={1920} height={1080} />
      <Composition id="FavoriteActionScene" component={FavoriteActionScene} durationInFrames={120} fps={30} width={1920} height={1080} />
      <Composition id="OutroScene" component={OutroScene} durationInFrames={120} fps={30} width={1920} height={1080} />
    </>
  );
};
