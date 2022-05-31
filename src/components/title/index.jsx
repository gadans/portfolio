import React, { useState } from "react";
import styled from "styled-components";

function Title({ onMouseEnter, onMouseLeave }) {
  const [state] = useState({
    title: "Gadan Park",
  });
  return (
    <TitleWrap onMouseEnter={onMouseEnter} onMouseLeave={onMouseLeave}>
      {state.title}
    </TitleWrap>
  );
}

const TitleWrap = styled.div`
  font-family: "Poppins", sans-serif;
  text-align: center;
  font-weight: 900;
  color: #1d1d1f;
  font-size: 10vw;
  font-style: italic;
  margin: 0;
  padding: 0;
`;

export default Title;
