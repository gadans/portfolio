import styled from "styled-components";

function Project({ onMouseEnter, onMouseLeave }) {
  return (
    <ProjectTitleWrap onMouseEnter={onMouseEnter} onMouseLeave={onMouseLeave}>
      PROJECTS
    </ProjectTitleWrap>
  );
}

const ProjectTitleWrap = styled.div`
  font-family: sans-serif;
  display: flex;
  justify-content: center;
  font-size: 22vw;
  opacity: 0.05;
  font-weight: 900;
  margin: 38vh -1.5vw;
`;

export default Project;
