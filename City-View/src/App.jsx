import { ParallaxProvider, Parallax } from "react-scroll-parallax";
import bg from "./assets/bg.png";
import background from "./assets/background.jpg";
import text from "./assets/text-img.webp";

export default function App() {
  return (
    <>
      <ParallaxProvider>
        <Parallax
          className="foreground"
          scale={[1, 1.6]}
          startScroll={0}
          endScroll={700}
          style={{
            position: "fixed",
            left: 0,
            top: 0,
            width: "100%",
            zIndex: 100,
          }}
        >
          <img style={{ width: "100%" }} src={bg} alt="foreground" />
        </Parallax>
        <Parallax
          className="background"
          scale={[1, 1.18]}
          startScroll={0}
          endScroll={800}
          style={{
            position: "fixed",
            left: 0,
            top: 0,
            width: "100%",
          }}
        >
          <img style={{ width: "100%" }} src={background} alt="background" />
        </Parallax>
        <Parallax
          opacity={[1.5, 0]}
          style={{
            position: "fixed",
            left: "30%",
            top: "50%",
            zIndex: 200,
          }}
        >
          <img style={{ width: "50%" }} src={text} alt="text" />
        </Parallax>
      </ParallaxProvider>
      <div className="h-[2000px] w-full ">
        <div className="bg-black h-full w-full"></div>
      </div>
    </>
  );
}
