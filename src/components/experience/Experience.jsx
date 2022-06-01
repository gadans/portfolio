import {
  FaHtml5,
  FaCss3,
  FaSass,
  FaReact,
  FaGitAlt,
  FaGithub,
  FaPython,
  FaJava,
} from "react-icons/fa";
import { DiGoogleCloudPlatform } from "react-icons/di";
import { SiJavascript, SiFirebase, SiOracle } from "react-icons/si";
import { IoLogoFigma } from "react-icons/io5";
import styled from "styled-components";
import { motion } from "framer-motion";

function Experience() {
  return (
    <ExperienceWrap>
      <div className="first">
        <motion.div
          whileHover={{
            scale: 2,
            rotate: 360,
            color: "#F16529",
          }}
          whileTap={{
            scale: 1.5,
            color: "#f2a98a",
          }}
        >
          <FaHtml5 />
        </motion.div>

        <motion.div
          whileHover={{
            scale: 2,
            rotate: 360,
            color: "#2965F1",
          }}
          whileTap={{
            scale: 1.5,
            color: "#8aa9f2",
          }}
        >
          <FaCss3 />
        </motion.div>

        <motion.div
          style={{ fontSize: "7vh" }}
          whileHover={{
            scale: 2,
            rotate: 360,
            color: "#CD6799",
          }}
          whileTap={{
            scale: 1.5,
            color: "#cc99b2",
          }}
        >
          <FaSass />
        </motion.div>

        <motion.div
          style={{ fontSize: "5.5vh" }}
          whileHover={{
            scale: 2,
            rotate: 360,
            color: "#F1BF26",
          }}
          whileTap={{
            scale: 1.5,
            color: "#f2d788",
          }}
        >
          <SiJavascript />
        </motion.div>

        <motion.div
          style={{ fontSize: "7vh" }}
          whileHover={{
            scale: 2,
            rotate: 360,
            color: "#00D8FF",
          }}
          whileTap={{
            scale: 1.5,
            color: "#80ecff",
          }}
        >
          <FaReact />
        </motion.div>
      </div>

      <div className="second">
        <motion.div
          whileHover={{
            scale: 2,
            color: "#336D9C",
          }}
          whileTap={{
            scale: 1.5,
            color: "#62829c",
          }}
        >
          <FaPython />
        </motion.div>

        <motion.div
          whileHover={{
            scale: 2,
            color: "#E51F24",
          }}
          whileTap={{
            scale: 1.5,
            color: "#e67c80",
          }}
        >
          <FaJava />
        </motion.div>

        <motion.div
          whileHover={{
            scale: 2,
            color: "#F7C52A",
          }}
          whileTap={{
            scale: 1.5,
            color: "#f7dd8d",
          }}
        >
          <SiFirebase />
        </motion.div>

        <motion.div
          style={{ fontSize: "8vh" }}
          whileHover={{
            scale: 2,
            color: "#2D75E0",
          }}
          whileTap={{
            scale: 1.5,
            color: "#87abe0",
          }}
        >
          <DiGoogleCloudPlatform />
        </motion.div>

        <motion.div
          whileHover={{
            scale: 2,
            color: "#C74634",
          }}
          whileTap={{
            scale: 1.5,
            color: "#c7867d",
          }}
        >
          <SiOracle />
        </motion.div>
      </div>

      <div className="three">
        <motion.div
          whileHover={{
            scale: 2,
            rotate: -360,
            color: "#F05133",
          }}
          whileTap={{
            scale: 1.5,
            color: "#f0a292",
          }}
        >
          <FaGitAlt />
        </motion.div>

        <motion.div
          whileHover={{
            scale: 2,
            rotate: -360,
            color: "#171516",
          }}
          whileTap={{
            scale: 1.5,
            color: "#595959",
          }}
        >
          <FaGithub />
        </motion.div>

        <motion.div
          whileHover={{
            scale: 2,
            rotate: -360,
            color: "#A259FF",
          }}
          whileTap={{
            scale: 1.5,
            color: "#d1adff",
          }}
        >
          <IoLogoFigma />
        </motion.div>
      </div>
    </ExperienceWrap>
  );
}

const ExperienceWrap = styled.div`
  display: flex;
  flex-flow: column;
  grid-gap: 4vw;
  font-size: 6vh;
  display: flex;
  justify-content: space-around;
  margin: 24vh 12vw 10vh;
  color: #1d1d1f;
  div {
    display: flex;
    grid-gap: 1vw;
    justify-content: space-around;
    align-items: center;
  }
`;

export default Experience;
