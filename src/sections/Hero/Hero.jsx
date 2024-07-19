import styles from "./HeroStyles.module.css";
import heroImg from "../../assets/hero-img.png";
import sun from "../../assets/sun.svg";
import moon from "../../assets/moon.svg";
import twitterLight from "../../assets/twitter-light.svg";
import twitterDark from "../../assets/twitter-dark.svg";
import githubLight from "../../assets/github-light.svg";
import githubDark from "../../assets/github-dark.svg";
import linkedInLight from "../../assets/linkedin-light.svg";
import linkedInDark from "../../assets/linkedin-dark.svg";
import CV from "../../assets/77RishabhPandey2025Resume.pdf";
import { useTheme } from "../../common/ThemeContext";

function Hero() {

  const { theme, toggleTheme } = useTheme();

  const themeIcon = theme =='light' ? sun : moon;
  const twitterIcon = theme =='light' ? twitterLight : twitterDark;
  const githubIcon = theme =='light' ? githubLight : githubDark;
  const linkedInIcon = theme =='light' ? linkedInLight : linkedInDark;



   return (
    <section id="hero">
      <div className={styles.colorModeContainer}>
        <img
          className={styles.hero}
          src={heroImg}
          alt="Profile picture of rishabh..."
        />
        <img
          className={styles.colorMode}
          src={themeIcon}
          alt="Color mode icon"
          onClick={toggleTheme}
        />
      </div>

      <div className={styles.info}>
        <h1>
          Rishabh
          <br />
          Pandey
        </h1>

        <h2> Fullstack Developer</h2>

        <span>
          <a href="twitter.com" target="_blank">
            <img src={twitterIcon} alt="Twitter icon" />
          </a>

          <a href="github.com" target="_blank">
            <img src={githubIcon} alt="github icon" />
          </a>

          <a href="linkedIn.com" target="_blank">
            <img src={linkedInIcon} alt="linkedIn icon" />
          </a>
        </span>
        <p>
          With a passion for developing modern React web apps for commercial
          businesses.
        </p>

        <a href={CV} download>
          <button className="hover"> Resume</button>
        </a>
      </div>
    </section>
  );
}

export default Hero;
