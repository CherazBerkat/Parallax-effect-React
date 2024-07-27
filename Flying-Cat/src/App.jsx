import { Parallax, ParallaxLayer } from "@react-spring/parallax";
import { useSpring, animated } from "@react-spring/web";
import cat from "./assets/cat.gif";
import moon from "./assets/moon.png";
import land from "./assets/land.png";
function App() {
  const props = useSpring({
    from: { transform: "translate3d(20vw,-20vw,0) rotate(0deg)" },
    to: async (next) => {
      // Bounce and spin effect
      await next({ transform: "translate3d(10vw,-10vw,0) rotate(-20deg)" });
      await next({
        transform: "translate3d(7vw,-7vw,0) rotate(20deg)",
      });
      await next({
        transform: "translate3d(4vw,-4vw,0) rotate(-20deg)",
      });
      await next({
        transform: "translate3d(2vw,-2vw,0) rotate(20deg)",
      });
      await next({ transform: "translate3d(0,0,0) rotate(0deg)" });
    },
  });

  return (
    <>
      <Parallax pages={3}>
        <ParallaxLayer
          offset={0}
          speed={1}
          factor={2}
          style={{ backgroundImage: `url(${moon})`, backgroundSize: "cover" }}
        />
        <ParallaxLayer
          sticky={{ start: 0, end: 0.3 }}
          speed={0.5}
          style={{
            display: "flex",
            justifyContent: "right",
            alignItems: "center",
          }}
        >
          <animated.div style={props}>
            <h1 className="text-6xl font-bold text-transparent bg-clip-text bg-gradient-to-r from-orange-500 to-white mr-[200px] mt-[200px] p-5  font-ga-maamli">
              Hi, I&apos;m a flying Cat
            </h1>
          </animated.div>
        </ParallaxLayer>
        <ParallaxLayer
          offset={1}
          speed={1}
          factor={4}
          style={{ backgroundImage: `url(${land})`, backgroundSize: "cover" }}
        />
        <ParallaxLayer
          speed={0.5}
          sticky={{
            start: 0.1,
            end: 2.5,
          }}
          style={{
            display: "flex",
            justifyContent: "left",
          }}
        >
          <img src={cat} alt="cat" className="w-[400px] h-[600px] ml-60" />
        </ParallaxLayer>
        <ParallaxLayer
          offset={2.1}
          style={{
            display: "flex",
            justifyContent: "center",
            alignItems: "center",
          }}
        >
          <h1 className="text-6xl font-bold text-white font-ga-maamli mt-[100px]">
            The end
          </h1>
        </ParallaxLayer>
      </Parallax>
    </>
  );
}
export default App;
