import { FaGithub, FaBloggerB } from "react-icons/fa";
import { SiGmail } from "react-icons/si";
import styled from "styled-components";

function Contact({ onMouseEnter, onMouseLeave }) {
  return (
    <ContactWrap>
      <a href="https://github.com/dannsgo">
        <FaGithub onMouseEnter={onMouseEnter} onMouseLeave={onMouseLeave} />
      </a>
      <a href="https://dannsgo.com">
        <FaBloggerB onMouseEnter={onMouseEnter} onMouseLeave={onMouseLeave} />
      </a>
      <a href="https://mail.google.com/mail/?view=cm&amp;fs=1&amp;to=dannsgo@gmail.com">
        <SiGmail onMouseEnter={onMouseEnter} onMouseLeave={onMouseLeave} />
      </a>
    </ContactWrap>
  );
}

const ContactWrap = styled.div`
  font-size: 8vw;
  display: flex;
  justify-content: space-around;
  margin: 24vh 20vw 10vh;
  color: #1d1d1f;

  a {
    color: #1d1d1f;
  }
`;

export default Contact;
