import desertNoSky from "../assets/About-Images/desert-NoSky.png";
import desertRock from "../assets/About-Images/desert-rock.png";
import desert from "../assets/About-Images/desert.png";
import grass from "../assets/About-Images/grass.png";
import man from "../assets/About-Images/man.png";
import water from "../assets/About-Images/water.png";
import watterFall from "../assets/About-Images/waterfall.png";
import centerCity from "../assets/Home-Images/center-city.png";
import hillLeft from "../assets/Home-Images/hill-left-1.png";
import hillRight from "../assets/Home-Images/hill-right-1.png";
import leftCity from "../assets/Home-Images/left-city.png";
import rightCity from "../assets/Home-Images/right-city.png";
import moonCity from "../assets/Home-Images/city-moon.png";
import rail from "../assets/Home-Images/rail.png";
import sky from "../assets/Home-Images/sky.png";
import train from "../assets/Home-Images/train.png";
import waterCity from "../assets/Home-Images/water.png";
import { Parallax, ParallaxLayer } from "@react-spring/Parallax";
import NavBar from "./NavBar.jsx";
import ProductCard from "./ProductCard.jsx";
import Salmon from "../assets/products/Salmon.png";
import Snapper from "../assets/products/Snapper.png";
import Tuna from "../assets/products/Tuna.png";
import Swordfish from "../assets/products/Swordfish.png";

export default function Page() {
  return (
    <Parallax pages={3.5}>
      <ParallaxLayer offset={0} sticky={{ start: 0, end: 3 }}>
        <NavBar />
      </ParallaxLayer>
      <ParallaxLayer offset={0}>
        <img
          src={sky}
          alt="sky"
          className="w-[150%] fixed top-[-30%]"
          id="home"
        />
      </ParallaxLayer>
      <ParallaxLayer offset={0}>
        <img
          src={moonCity}
          alt="moonCity"
          className="w-[7%] fixed left-[37%] top-[-7%] "
        />
      </ParallaxLayer>
      <ParallaxLayer offset={0}>
        <img
          src={waterCity}
          alt="waterCity"
          className="w-[100%] h-[200%] fixed top-[-75%] left-0"
        />
      </ParallaxLayer>

      <ParallaxLayer offset={0}>
        <img
          src={centerCity}
          alt="centerCity"
          className="w-[100%] fixed top-[-18%] left-[2%]"
        />
      </ParallaxLayer>
      <ParallaxLayer offset={0}>
        <img
          src={hillLeft}
          alt="hillLeft"
          className="w-[100%] fixed top-[-28%] right-0"
        />
      </ParallaxLayer>
      <ParallaxLayer offset={0}>
        <img
          src={hillRight}
          alt="hillRight"
          className="w-[100%] fixed top-[-20%] left-0"
        />
      </ParallaxLayer>
      <ParallaxLayer offset={0}>
        <img
          src={leftCity}
          alt="leftCity"
          className="w-[100%] fixed top-[-19%] left-0"
        />
      </ParallaxLayer>
      <ParallaxLayer offset={0}>
        <img
          src={rightCity}
          alt="rightCity"
          className="w-[90%] fixed top-[-10%] right-0"
        />
      </ParallaxLayer>
      <ParallaxLayer offset={0}>
        <img
          src={train}
          alt="train"
          className="w-[90%] fixed left-0 top-[-12%]"
        />
      </ParallaxLayer>
      <ParallaxLayer offset={0}>
        <img
          src={rail}
          alt="rail"
          className="w-[100%] fixed left-0 top-[-20%]"
        />
      </ParallaxLayer>
      <ParallaxLayer offset={1} style={{ backgroundColor: "#1D002C" }}>
        <img
          src={desert}
          alt="desert"
          className="w-[90%] fixed top-[20%] left-0"
          id="about"
        />
      </ParallaxLayer>
      <ParallaxLayer offset={1}>
        <img
          src={desertNoSky}
          alt="desertNoSky"
          className="w-[90%] fixed top-[18%] left-0"
        />
      </ParallaxLayer>
      <ParallaxLayer offset={1}>
        <img
          src={desertRock}
          alt="desertRock"
          className="w-[100%] fixed top-[10%] left-[-5%]"
        />
      </ParallaxLayer>

      <ParallaxLayer offset={1}>
        <img
          src={watterFall}
          alt="watterFall"
          className="w-[100%] fixed top-[-5%] right-[-5%]"
        />
      </ParallaxLayer>
      <ParallaxLayer offset={1}>
        <img src={water} alt="water" className="w-[100%] fixed top-[11%]" />
      </ParallaxLayer>
      <ParallaxLayer offset={1}>
        <img
          src={man}
          alt="man"
          className="w-[100%] fixed top-[10%] left-[40%]"
        />
      </ParallaxLayer>
      <ParallaxLayer offset={1}>
        <img src={grass} alt="grass" className="w-full fixed top-[12%]" />
      </ParallaxLayer>
      <ParallaxLayer
        offset={2.35}
        factor={1.5}
        style={{
          backgroundColor: "#121137",
          display: "flex",
          flexDirection: "row",
          justifyContent: "space-around",
          alignItems: "center",
        }}
        id="prds"
      >
        <ProductCard
          img={Salmon}
          name="Salmon"
          price="$20"
          description="Fresh salmon from the Atlantic ocean is a popular choice among seafood lovers. Known for its rich flavor and buttery texture, salmon is a versatile fish that can be enjoyed in a variety of dishes."
        />
        <ProductCard
          img={Snapper}
          name="Snapper"
          price="$25"
          description="Fresh snapper from the Pacific ocean. Known for its delicate flavor and firm texture, snapper is a popular choice among seafood lovers. Whether grilled, or pan-seared, this versatile fish is sure to satisfy your taste buds. "
        />
        <ProductCard
          img={Tuna}
          name="Tuna"
          price="$30"
          description="Fresh tuna from the Indian ocean is a popular choice among seafood lovers. Known for its rich flavor and meaty texture, tuna is a versatile fish that can be enjoyed in a variety of dishes. "
        />
        <ProductCard
          img={Swordfish}
          name="Swordfish"
          price="$35"
          description="Fresh swordfish from the Arctic ocean is a popular choice among seafood lovers. Known for its mild flavor and meaty texture, swordfish is a versatile fish that can be enjoyed in a variety of dishes."
        />
      </ParallaxLayer>
    </Parallax>
  );
}
