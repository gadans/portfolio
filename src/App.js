import { useEffect, useState } from "react";
import GlobalStyle from "./globalStyle.js";
import Page from "./components/page/";
import { motion } from "framer-motion";
import styled from "styled-components";

function App() {
  const [mousePosition, setMousePosition] = useState({
    x: 0,
    y: 0,
  });
  const [cursorVariant, setCursorVariant] = useState("default");

  useEffect(() => {
    const mouseMove = (e) => {
      setMousePosition({
        x: e.clientX,
        y: e.clientY,
      });
    };

    window.addEventListener("mousemove", mouseMove);

    return () => {
      window.removeEventListener("mousemove", mouseMove);
    };
  }, []);

  const variants = {
    default: {
      x: mousePosition.x - 16,
      y: mousePosition.y - 16,
    },
    title: {
      height: 150,
      width: 150,
      x: mousePosition.x - 75,
      y: mousePosition.y - 75,
      backgroundColor: "#f9f9f9",
      mixBlendMode: "difference",
    },
    text: {
      height: 100,
      width: 100,
      x: mousePosition.x - 50,
      y: mousePosition.y - 50,
      backgroundColor: "#1d1d1f",
      mixBlendMode: "difference",
      opacity: 0.2,
    },
    click: {
      height: 100,
      width: 100,
      x: mousePosition.x - 50,
      y: mousePosition.y - 50,
      backgroundColor: "#1d1d1f",
    },
  };

  const textLeave = () => setCursorVariant("default");

  const titleEnter = () => setCursorVariant("title");

  const textEnter = () => setCursorVariant("text");

  const clickEnter = () => setCursorVariant("click");

  return (
    <>
      <GlobalStyle />
      <Page
        onMouseEnter={{ titleEnter, textEnter, clickEnter }}
        onMouseLeave={textLeave}
      />
      <CursorWrap>
        <motion.div
          className="cursor"
          variants={variants}
          animate={cursorVariant}
        />
      </CursorWrap>
    </>
  );
}

const CursorWrap = styled.div`
  .cursor {
    background-color: #1d1d1f;
    block-size: 1.2rem;
    inline-size: 1.2rem;
    border-radius: 50%;
    position: fixed;
    top: 0;
    left: 0;
    pointer-events: none;
  }
`;

export default App;
