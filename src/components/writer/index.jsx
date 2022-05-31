import React from "react";
import Typewriter from "typewriter-effect";
import styled from "styled-components";

function Writer() {
  return (
    <TypewriterWrap>
      <Typewriter
        options={{
          autoStart: true,
          loop: true,
          delay: 40,
          strings: [
            "Hello, My name is Gadan Park",
            "Front-end Engineer",
            "UI design",
            "User experience",
            "New Technologies",
          ],
        }}
      ></Typewriter>
    </TypewriterWrap>
  );
}

const TypewriterWrap = styled.div`
  font-family: "Inter", sans-serif;
  text-align: center;
  font-weight: 700;
  font-size: 3.6vw;
  color: #000000;
`;

export default Writer;
